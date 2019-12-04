import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from 'axios';
import Login from './Login';
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            //confirmpassword: '',
            email: '',
            hasAgreed: false
        };
        // state={
        //     password: '',
        //     confirmpassword: ''
        // }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        //this.handleConfirmPassword=this.handleConfirmPassword.bind(this);
        //this.handlePassword=this.handlePassword.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

   // handleConfirmPassword= (e) => {
       // if(e.target.value !== {confirmPassword:e.target.value}) {
          //  alert('Passwords does not match')
         //   this.setState( {confirmPassword:e.target.value})
        //}
    //}
//    handlePassword(e){
  //      const target = e.target;
    //    const value = target.value;
      //  const password=target.password;
        //this.setState({password:value});
    //}
   handleSubmit= async () =>{
        if (
            this.state.name === "" ||
            this.state.password === "" ||
            this.state.email === ""
        ) {
            alert("All fields are Mandatory");
        } else {

    const bodydata ={
              name:this.state.name,
              email:this.state.email,
              password:this.state.password,
             
           }
          const myurl = 'http://localhost:4000/details'
          axios.post(myurl,bodydata)
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
}
    render() {
        return (
            <div className="FormCenter">
                <form  className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label"
                            htmlFor="name">Full Name</label>
                        <input type="text" id="name"
                            className="FormField__Input"
                            placeholder="Enter your full name"
                            name="name" value={this.state.name}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label"
                            htmlFor="password">Password</label>
                        <input type="password" id="password"
                            className="FormField__Input"
                            placeholder="Enter your password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label"
                            htmlFor="password">Confirm Password</label>
                        <input type="password" id="confirmpassword"
                            className="FormField__Input"
                            placeholder="Confirm your password"
                            name="confirmpassword"
                            value={this.state.confirmpassword}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label"
                            htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email"
                            className="FormField__Input"
                            placeholder="Enter your email"
                            name="email" value={this.state.email}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox"
                                type="checkbox" name="hasAgreed"
                                value={this.state.hasAgreed}
                                onChange={this.handleInputChange} />
                            I agree all statements in <a href="/Login"
                                className="FormField__TermsLink">terms of service</a>
                        </label>
                    </div>

                    <div className="FormField">
                   <Link to="/Login"> <button onClick={this.handleSubmit} className="FormField__Button mr-20" >Register</button> </Link><Link to="/Login" className="FormField__Link">Already a member?</Link>
                </div>
                </form>
            </div>
           

        );
    }
}

export default Registration;
