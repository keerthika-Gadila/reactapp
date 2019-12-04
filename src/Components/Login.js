
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import details from '../Data/Details.json';
import Api from './Api';
class Login extends Component {
   

    constructor(props) {
        super(props);
        this.state = {
          authdata: [],
          value: "",
          pageLoaded: false,
          logged: false
        };
      }

      componentDidMount() {
       console.log(this.state.authdata)
        Api.getAllCards(data => this.setState({ authdata: data}));
        
      }
      
     // componentWillMount() {
     //   this._refreshproducts();
     // }
   
    //   validate(){
    //         if(Details.json[0].details.id===1){
    //             for(var i=0;i<Details.json[0].details.length;i++){
    //                 if(email==Details.json[0].details[i].email && password==Details.json[0].details[i].password)
    //                     logged=true;
    //             }
    //             if(logged)
    //                 alert("User Login");
    //             else  
    //                 alert("User login fail");
    //         }
    //   }
    //  _refreshproducts() {
    //    axios.get("http://localhost:4000/details").then(response => {
    //      this.setState({
    //        data: response.data,
    //        pageLoaded: true
    //      });
    //    });
    //  }
   
    handleSubmit(){
       
    }

    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields" >
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20" type='submit'>Login</button> <Link to="/" className="FormField__Link">Create an account</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;