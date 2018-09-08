import React from 'react';

const styles = {
    page: {
        display: 'inline-block',
        width: '100%',
        height: '100vh',
        padding: '0px',
        margin: '0px',
        // background: 'url("../images/gym_diet_background.jpg")',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
    },
    section: {
        marginTop: '5%',
        display: 'flex',
        justifyContent: 'center'
    },
    table: {
        background: 'white',
        width: '60%',
        border: '1px solid #e5e5e5',
        padding: '60px'
    },
    header:{
        textAlign: 'center'
    },
    img: {
        width:'150px',
        height: '150px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    },
    td1: {
        padding: '20px 0',
        width: '30%',
        textAlign: 'center'
    },
    td2: {
        padding: '20px 0 20px 10px',
        width: '70%'
    },
    span:{
        padding: '20px 20px'
    }
}

export default class cart extends React.Component {
    render(){
        const {loggedIn, cartItem, addFromCart, removeFromCart} = this.props;
        
        if(loggedIn == true && cartItem == null){
            return(
                <div style={styles.page}> 
                    <h1>Empty cart</h1>
                </div>
            )
        }else{
            const items = cartItem.map((item, index)=>{
                return(
                        <tr style={{borderTop: '1px solid #e5e5e5'}}>
                            <td style={styles.td1}>
                                <img style={styles.img} src = {"../images/" + item.img}/>
                                <div style={{textAlign: 'center'}}>{item.item}</div>
                            </td>
                            <td>
                                <button onClick={()=>addFromCart(index)}>+</button>
                                <span style={styles.span}>{item.count}</span>
                                <button onClick={()=>removeFromCart(index)}>-</button>
                            </td>
                            <td tyle={styles.td2}>
                                <span>{item.price}</span>
                            </td>
                        </tr>
                )
            })
        return(
            <div style={styles.page}> 
                <section style={styles.section}>
                    <table style={styles.table}>
                    <tbody>
                    <tr>
                        <th colSpan="2" style={styles.header}><h2>Order Confirmation</h2></th>
                    </tr>
                        {items}  
                    </tbody>
                    </table>
                </section>
            </div>
        )
        }
    }
}