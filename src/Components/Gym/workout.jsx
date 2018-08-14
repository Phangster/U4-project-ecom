import React from 'react';

const styles = {
    page: {
        width: '100%',
        height: '60vh',
        padding: '0px',
        margin: '0px',
        background: 'url("../images/gym_workout_background.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        opacity: '0.8',
        position: 'relative',
    },
}

const display =  {
    marginTop: '80px',
}

const context = {
    display: 'block'
}

export default class workout extends React.Component {
    constructor() {
        super();
    }
    render(){
        return(
            <div>
                <div style={styles.page}></div>
                <div style={context}>
                <div class="row">
                    <div class="col s6 m4" style={display}>
                    <div class="card">
                        <div class="card-image">
                        <img src="../images/yoga.jpeg"/>
                        <span class="card-title">Yoga</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                            <span class="card-content activator"><p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively......</p><i class="material-icons right">arrow_drop_up</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Yoga<i class="material-icons right">close</i></span>
                            <p>Yoga is a practical aid, not a religion. Yoga is an ancient art based on a harmonizing system of development for the body, mind, and spirit. The continued practice of yoga will lead you to a sense of peace and well-being, and also a feeling of being at one with their environment.</p>
                            <p>$20.00</p>
                            <a class="waves-effect waves-light btn">Add to Cart</a>
                        </div>
                    </div>
                    </div>
                    <div class="col s6 m4" style={display}>
                    <div class="card">
                        <div class="card-image">
                        <img src="../images/spinning.jpeg"/>
                        <span class="card-title">Spinning</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                            <span class="card-content activator"><p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively......</p><i class="material-icons right">arrow_drop_up</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Spinning<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p>$20.00</p>
                            <a class="waves-effect waves-light btn">Add to Cart</a>
                        </div>
                    </div>
                    </div>
                    <div class="col s6 m4" style={display}>
                    <div class="card">
                        <div class="card-image">
                        <img src="../images/bodycombat.png"/>
                        <span class="card-title">Body Combat</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                            <span class="card-content activator"><p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively......</p><i class="material-icons right">arrow_drop_up</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Body Combat<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p>$20.00</p>
                            <a class="waves-effect waves-light btn">Add to Cart</a>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s6 m4" style={styles.display}>
                    <div class="card">
                        <div class="card-image">
                        <img src="../images/hiit.jpg"/>
                        <span class="card-title">HIIT</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                            <span class="card-content activator"><p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively......</p><i class="material-icons right">arrow_drop_up</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">HIIT<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p>$20.00</p>
                            <a class="waves-effect waves-light btn">Add to Cart</a>
                        </div>
                    </div>
                    </div>
                    <div class="col s6 m4" style={styles.display}>
                    <div class="card">
                        <div class="card-image">
                        <img src="../images/muaythai.jpeg"/>
                        <span class="card-title">Muay Thai</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                            <span class="card-content activator"><p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively......</p><i class="material-icons right">arrow_drop_up</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Muay Thai<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p>$20.00</p>
                            <a class="waves-effect waves-light btn">Add to Cart</a>
                        </div>
                    </div>
                    </div>
                    <div class="col s6 m4" style={styles.display}>
                    <div class="card">
                        <div class="card-image">
                        <img src="../images/spartan.jpeg"/>
                        <span class="card-title">Spartan</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                            <span class="card-content activator"><p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively......</p><i class="material-icons right">arrow_drop_up</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Spartan<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <p>$20.00</p>
                            <a class="waves-effect waves-light btn">Add to Cart</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}