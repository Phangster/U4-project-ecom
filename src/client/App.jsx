import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './Components/error';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import LoginForm from './Components/User/LoginForm';
import SignUpForm from './Components/User/SignUpForm';
import Profile from './Components/User/profile';
import {HashRouter as Router,Switch,Route,Link,Redirect } from 'react-router-dom';
import Travel from './Components/Travel';
import Gym from './Components/Gym';
import Home from './Components/Home';
import Workout from './Components/Gym/workout';
import Diet from './Components/Gym/diet';
import Cart from './Components/Cart/cart';




export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            user: null,
            redirectLogin: false
        };
        this.loginHandler = this.loginHandler.bind(this);
        this.signoutHandler = this.signoutHandler.bind(this);

    }
    
    componentDidMount(){
        //do an AJAX to check the status of the cookie
        const opts = {
            headers: {'Content-Type': 'application/json'}, //sending over a javascript object
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({})
          }
        fetch('/api/login-check', opts)
            .then(apiResponse => apiResponse.json())
            .then(apiData => {
                if (apiData.loginStatus == true){
                    this.setState({
                        loggedIn: true
                    });
                }
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    loginHandler(apiData) {
        if (apiData.loginStatus) {
            this.setState({loggedIn: true, user: apiData.result, redirectLogin: true});
            console.log("YOU'RE  LOGGED IN as", apiData.result.user_name)
        };
    }
    signoutHandler(){
        console.log(this.state.loggedIn)
        this.setState({
            loggedIn: false,
            user: null,
            redirectLogin: false
        })
    }

    render() {
        var { loggedIn, user, redirectLogin } = this.state;
        return (
                [   
                <header>
                    <Navbar user={user} loggedIn={this.state.loggedIn} signoutHandler={this.signoutHandler}/>
                </header>,
                <main>
                    <div className="container1">
                        <Switch>
                            {/* Public Routes */}
                            <Route exact path='/' render={()=><Home />}/>
                            <Route path='/login' render={()=><LoginForm loginHandler={this.loginHandler} redirectLogin={redirectLogin}/>}/>
                            <Route path='/signup' render={()=><SignUpForm />}/>

                            {/* Private Routes */}
                            <Route path='/gym/workout' render={()=><Workout />}/>
                            <Route path='/gym/diet' render={()=><Diet />}/>
                            <Route path='/gym' render={()=><Gym />}/>
                            <Route path='/travel' render={()=><Travel />}/>
                            <Route path='/cart' render={()=><Cart loggedIn={loggedIn} user={user}/>}/>
                            <Route path='/profile'render={()=><Profile loggedIn={loggedIn} user={user}/>}/>
                        </Switch>
                    </div>
                </main>,
                < Footer />
            ]
        );
    }
}

ReactDOM.render(
    <ErrorBoundary>
        <Router>
            <App />
        </Router>
    </ErrorBoundary>,
    document.getElementById('app')
)

module.hot.accept();