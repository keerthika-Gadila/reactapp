import React, { Component } from 'react';
import Login from './Login'; 
import details from './Details.json';

class Data extends Component {
    
    
        constructor(props) {
            super(props);
            this.state = {
                items: [],
                isLoaded: false,
            };
        }
        componentDidMount() {
            fetch("http://localhost:4000/details")
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        isLoaded: true,
                        items: json,
                    })
                });
        }
        render() {
            var {isLoaded,items } =this.state;
            if(!isLoaded) {
                return <div>LOading.....</div>;
            }
            else{
                return(
                    <div className="FormCenter">
                        <ul>
                            {items.map(item => (
                                <li key ={item.id}>
                                    E-Mail Address:{item.email} | Password:{item.password}
                                    </li>
                            ))};
                            </ul>
                            </div>
                )
            }