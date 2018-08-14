import React from 'react';
import { Link, Redirect } from 'react-router-dom'
export default class LoginFrom extends React.Component {

    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            password: null,
            confirmPassword: null,
            message: '',
        }
    }

    submitHandler(event){
        event.preventDefault();
        const opts = {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({...this.state})
          }
        fetch('/api/submit-user', opts)
            .then(apiResponse => apiResponse.json()) //Ajax Fetch http response header
            .then(apiData => {
                this.props.loginHandler(apiData)
                this.setState({
                    message: apiData.message
                });
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    changeHandler(){

    }

    render(){
        return(
            <div>
               <div class="background-image"></div>
                <div class="title">
                <h3 class="center-align grey-text"></h3>
                </div>
                <div class="row" style={{paddingBottom: '10%'}}>
                <div class="col s12 l4 offset-l4">
                    <div class="card grey lighten-3">
                    <div class="card-content">
                        <h4 class="card-title center-align">Login</h4>
                        <form>
                        <div class="row">
                            <div class="input-field col s12">
                            <i class="material-icons prefix">email</i>
                            <input type="email" id="email" class="validate" />
                            <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <i class="material-icons prefix">vpn_key</i>
                            <input type="password" id="password" class="validate" />
                            <label for="email">Password</label>
                            </div>
                        </div>
                        <div class="row center-align">
                            <button class="btn waves-effect waves-light" style={{marginBottom: '10px'}}type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                            </button><br />
                            <Link to='/signup'>Don't have an account?</Link>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}