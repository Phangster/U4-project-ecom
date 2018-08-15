import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
    render(){
        return(
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
        )
    }
}

