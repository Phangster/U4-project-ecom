import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './Components/User/LoginForm';
import SignUpForm from './Components/User/SignUpForm';
import Profile from './Components/User/Profile';
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
            name: ''
        };
        this.loginHandler = this.loginHandler.bind(this);
    }
    
    loginHandler(loginStatus) {
        if (loginStatus.message === 'success') {
            this.setState({loggedIn: true, name: loginStatus.username})
        };
    }

    render() {
        return (
            <Router>
            <div class="wrapper">
            <header>
                <navi style={{zIndex: '1000'}}>
                    <div class="menu-icon">
                        <i class="fa fa-bars fa-2x"></i>
                    </div>
                    <div class="logo"><img src="../images/logo.png"/></div>
                    <div class="menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/gym">Gym</Link></li>
                            <li><Link to="/travel">Travel</Link></li>
                            <li><Link to="/login"><i class="fa fa-sign-in" aria-hidden="true"></i></Link></li>
                        </ul>
                    </div>
                </navi>
            </header>
            <div className="container1">
                <Switch>
                    <Route exact path='/' render={()=><Home />}/>
                    <Route path='/gym/workout' render={()=><Workout />}/>
                    <Route path='/gym/diet' render={()=><Diet />}/>
                    <Route path='/gym' render={()=><Gym />}/>
                    <Route path='/travel' render={()=><Travel />}/>
                    <Route path='/login' render={()=><LoginForm />}/>
                    <Route path='/signup' render={()=><SignUpForm />}/>
                    <Route path='/cart' render={()=><Cart />}/>
                    <Route path='/profile' render={()=><Profile />}/>
                </Switch>
            </div>
            <div>
            <section1>
                <div className="containForFooterSection">
                    <div className="contactUs">
                        <p> Don't be shy - drop us a line </p>
                        <p> We're looking forward to speak to you </p>
                    </div>
                    <p id="contactUs"> hello@travy.com</p>
                </div>
            </section1>
            <footer class="footer-distributed">
                <div class="footer-left">
                    <div class="logofooter"><img src="../images/logo.png"/></div>
                    <p class="footer-links">
                        <Link to="/">Home</Link> 
                        <Link to="/gym">Gym</Link>
                        <Link to="/travel">Travel</Link>
                    </p>
                    <p class="footer-company-name">Travgy © 2015</p>
                </div>
                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                    </div>
                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+1.555.555.5555</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">support@company.com</a></p>
                    </div>

                </div>
                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>
                    <div class="footer-icons">

                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-github"></i></a>

                    </div>
                </div>
            </footer>
            </div>
        </div>
        </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

module.hot.accept();