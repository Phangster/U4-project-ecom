import React from 'react';
import {Switch,Route,Link,Redirect } from 'react-router-dom';

const styles = {
    page: {
        width: '100%',
        height: '100vh',
        padding: '0px',
        margin: '0px',
        background: 'url("./images/gym_background.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textAlign: 'center',
    },
    gym: {
        width: '500px',
        height: '500px',
        marginTop: '10%',
        backgroundImage: 'url("./images/workout.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'inline-block',
        paddingRight: '10px',
        position: 'relative',
        opacity: '0.85',
    },
    diet: {
        width: '500px',
        height: '500px',
        marginTop: '60px',
        backgroundImage: 'url("./images/diet.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'inline-block',
        position: 'relative',
        opacity: '0.85',
    },
    centered: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '100px'
    }
}
export default class Gym extends React.Component {
    constructor() {
        super();
    }

    render(){
        return(
            <div class="wrapper">
                <div className="page" style={styles.page}>
                    <Link to='/gym/workout'>
                        <div className="gym" style={styles.gym}>
                            <div className="center" style={styles.centered}>
                            <p>WORKOUT</p>
                            </div>                
                        </div>
                    </Link>
                    <Link to='/gym/diet'>
                        <div className="diet" style={styles.diet}>
                            <div className="center" style={styles.centered}>
                            <p>DIET</p>
                            </div> 
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}