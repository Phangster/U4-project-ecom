import React from 'react';
import { Redirect } from 'react-router-dom';
export default class SignUpForm extends React.Component {

    constructor() {
        super();
        this.state={
            name: null,
            email: null,
            password: null,
            confirmPassword: null,
            message: '',
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitSignUpHandler = this.submitSignUpHandler.bind(this)
    }

    submitSignUpHandler(event) {
        event.preventDefault();
        const opts = {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({...this.state})
          }
        fetch('/api/submit-new-user', opts)
            .then(apiResponse => apiResponse.json())
            .then(apiData => {
                // this.props.loginHandler(apiData)
                this.setState({
                    message: apiData.message
                });
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    changeHandler(event){
        let text = event.target.value;
        let field = event.target.id;
        console.log(field)
        this.setState({[field]: text});
        console.log('name', this.state.name)
        console.log('password', this.state.password)
    }

    render(){

        const { redirectLogin } = this.props
        if (redirectLogin) {
            return <Redirect to='/' />
        }

        return(
            <div>
                <div class="container">
                <div class="row" style={{width:'60%'}}>
                    <form class="col s12" id="reg-form" style={{marginTop:'20%'}} onSubmit={this.submitSignUpHandler}>
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="name" type="text" class="validate" onChange={this.changeHandler}required/>
                        <label for="name">Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="email" type="email" class="validate" onChange={this.changeHandler} required/>
                        <label for="email">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                        <input id="password" type="password" class="validate" minlength="6" onChange={this.changeHandler} required/>
                        <label for="password">Password</label>
                        </div>
             
                        <div class="input-field col s6">
                        <input id="confirmPassword" type="password" class="validate" minlength="6" onChange={this.changeHandler} required/>
                        <label for="confirmPassword">Confirm Password</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6" >
                        <button class="btn btn-large btn-register waves-effect waves-light" type="submit" name="action">Register
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}