import React from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends React.Component {
    render(){
        const styles = {
            cart: {
                position: 'absolute',
                marginTop: '-40px',
                visibility: 'hidden'
            }
        }
        const {loggedIn} = this.props;
        if(loggedIn){
            if(!this.props.itemCount == 0){
                styles.cart.visibility = 'visible'
            }
            return(
                <div>
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
                            <li>
                                <div id="cart-container">
                                    <div id="cart" style={{fontSize: '12px'}}>
                                        <Link to='/cart' onClick={this.props.getCartItem}className="fa fa-shopping-cart fa-2x openCloseCart"aria-hidden="true"></Link>
                                    </div>
                                    <span style={styles.cart}>{this.props.itemCount}</span>
                                </div>
                            </li>
                            <li><Link to= "/" onClick={this.props.signoutHandler}>Signout</Link></li>
                        </ul>
                    </div>
                    <div id="shoppingCart">
                        <div id="cartItemsContainer">
                            <h2>Items in your cart</h2>
                            <i class="fa fa-times-circle-o fa-3x openCloseCart" aria-hidden="true"></i>
                        <div id="cartItems"></div>
                        <span id="cartTotal"></span>
                    </div>
		  </div>
                </navi>
                </div>
            )
        }else{
            return(
                <navi style={{zIndex: '1000'}}>
                    <div className="menu-icon">
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
                    <div className="logo"><img src="../images/logo.png"/></div>
                    <div className="menu">
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