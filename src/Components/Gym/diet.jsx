import React from 'react';
const styles = {
    page: {
        width: '100%',
        height: '100vh',
        padding: '0px',
        margin: '0px',
        background: 'url("../images/gym_diet_background.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textAlign: 'center',
    },
}
export default class diet extends React.Component {
    constructor() {
        super();
    }
    render(){
        return(
            <div style={styles.page}>
            </div>
        )
    }
}