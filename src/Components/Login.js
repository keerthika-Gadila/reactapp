
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import details from '../Data/Details.json';

class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            details: [],
            isLoaded: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {

        fetch("http://localhost:4000/details")
            .then(details => details.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    details: json,
                })
            });
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
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = async (e) => {

        if (
            this.state.email === "" ||
            this.state.password === ""
        ) {
            alert("All fields are Mandatory");
        } else {
            var {isLoaded,details } =this.state;
                 if(!isLoaded) {
                     return <div>Loading.....</div>;
                 }
                 else{
        
                    
                        {details.map(details => (
                            <ul>
                            <li key={details.id}>
                                E-Mail Address:{details.email} | Password:{details.password}
                            </li>
                            </ul>
                        ))};
                        
            
            // e.preventDefault();
            
            //   try {
            //     await details.json(details.email, details.password);
            //     alert("Logged in");
            //   } catch (e) {
            //     alert(e.message);
            //   }
            }
        }
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
                        <button className="FormField__Button mr-20" type='submit' onClick={this.handleSubmit}>Login</button> <Link to="/" className="FormField__Link">Create an account</Link>
                    </div>
                </form>
            </div>
        );
    }
    // render() {
    //     var {isLoaded,items } =this.state;
    //     if(!isLoaded) {
    //         return <div>Loading.....</div>;
    //     }
    //     else{
    //         return(
    //             <div className="FormCenter">
    //                 <ul>
    //                     {items.map(item => (
    //                         <li key ={item.id}>
    //                             E-Mail Address:{item.email} | Password:{item.password}
    //                             </li>
    //                     ))};
    //                     </ul>
    //                     </div>
    //         )
    //     }
}

export default Login;