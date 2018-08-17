import React from 'react';

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
}
export default class cart extends React.Component {
    
    
    render(){
        const {loggedIn, cartItem} = this.props;
        if(loggedIn){
            return(
                <div style={styles.page}>
                    {cartItem}
                </div>
            )
        }
    }
}