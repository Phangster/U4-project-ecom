import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render(){

        const {loggedIn} = this.props;
        if(loggedIn){
            return(
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
                            <li><Link to="/profile"><i class='fa fa-user'></i></Link></li>
                            <li><Link to= "/" onClick={this.props.signoutHandler}>Signout</Link></li>
                        </ul>
                    </div>
                </navi>
            )
        }else{
            return(
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
            )

        }
    }
}