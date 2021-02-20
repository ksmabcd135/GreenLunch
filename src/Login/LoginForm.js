import React, {Component} from 'react';
import CssCls from './Login.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mailAddress: "",
            password: ""
        }

        this.handleMailChange = this.handleMailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        console.log('mail address >>' + this.state.mailAddress + 'password>>' + this.state.password);
    }
    handleMailChange(event) {
        const cMail = event.target.value;
        this.setState({
            mailAddress: cMail
        });
    }
    handlePassChange(event) {
        const cPass = event.target.value;
        this.setState({
          password: cPass  
        });
    }

    render() {
        return (
            <div className={CssCls.Top}>
                <p>Sign In</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.mailAddress} onChange={this.handleMailChange} placeholder="Input Email address"/>
                    <input type="text" value={this.state.password} onChange={this.handlePassChange} placeholder="Input Password"/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export default LoginForm;