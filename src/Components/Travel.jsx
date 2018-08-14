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
    north: {
        width: '20%',
        height: '500px',
        marginTop: '10%',
        backgroundImage: 'url("./images/north.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'inline-block',
        paddingRight: '10px',
        position: 'relative',
        opacity: '0.85',
    },
    south: {
        width: '20%',
        height: '500px',
        marginTop: '60px',
        backgroundImage: 'url("./images/south.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'inline-block',
        position: 'relative',
        opacity: '0.85',
    },
    east: {
        width: '20%',
        height: '500px',
        marginTop: '60px',
        backgroundImage: 'url("./images/east.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'inline-block',
        position: 'relative',
        opacity: '0.85',
    },
    west: {
        width: '20%',
        height: '500px',
        marginTop: '60px',
        backgroundImage: 'url("./images/west.jpeg")',
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
        fontSize: '60px'
    }
}
export default class Travel extends React.Component {
    constructor() {
        super();
    }

    render(){
        return(
            <div class="wrapper">
                <div className="page" style={styles.page}>
                    <Link to='/travel/north'>
                        <div className="north" style={styles.north}>
                            <div className="center" style={styles.centered}>
                            <p>NORTH</p>
                            </div>                
                        </div>
                    </Link>
                    <Link to='/travel/south'>
                        <div className="south" style={styles.south}>
                            <div className="center" style={styles.centered}>
                            <p>SOUTH</p>
                            </div> 
                        </div>
                    </Link>
                    <Link to='/travel/east'>
                        <div className="east" style={styles.east}>
                            <div className="center" style={styles.centered}>
                            <p>EAST</p>
                            </div> 
                        </div>
                    </Link>
                    <Link to='/travel/west'>
                        <div className="west" style={styles.west}>
                            <div className="center" style={styles.centered}>
                            <p>WEST</p>
                            </div> 
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}