import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const styles = {
    page: {
        display: 'inline-block',
        width: '100%',
        height: '100vh',
        padding: '0px',
        margin: '0px',
        background: 'url("../images/gym_diet_background.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    spacing: {
        marginTop: '10%',
    }
}
export default class Profile extends React.Component {
    
    constructor() {
        super()
    }

    render(){
        const {user, loggedIn} = this.props
        console.log(user.user_name)
        
        if(!loggedIn){
            return <Redirect to = '/login' />
        }

        return(
            <div style={styles.page}>
                <h1 class="title-pen" style={styles.spacing}>User Profile<span></span></h1>
                    <div class="user-profile">
                        <img class="avatar" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s" alt="Ash" />
                        <div class="username">{user.user_name}</div>
                    <div class="bio">
                        Full-Time House Husband
                    </div>
                        <div class="description">
                        I like to cook, gym and build robots
                    </div>
                    <ul class="data">
                        <li>
                        <span><Link to='/' class="entypo-heart">Profile</Link></span>
                        </li>
                        <li>
                        <span><Link to='/cart' class="entypo-eye">Cart</Link></span>
                        </li>
                        <li>
                        <span><Link to='/' class="entypo-user">Messages</Link></span>
                        </li>
                        <li>
                        <span><Link to='/' class="entypo-user">History</Link></span>
                        </li>
                    </ul>
                    </div>
            </div>
        )
    }
}