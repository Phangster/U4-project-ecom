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
        const items = this.props.getItems;
        const content = items.map((item)=>{
            console.log(item)
            return(
                <div class="row">
                    <div class="col s6 m4" style={display}>
                    <div class="card">
                        <div class="card-image">
                        <img src={"../images/" + item.img} />
                        <span class="card-title">{item.item}</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                            <span class="card-content activator"><p>{item.short_description}</p><i class="material-icons right">arrow_drop_up</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">{item.item}<i class="material-icons right">close</i></span>
                            <p>{item.long_description}}</p>
                            <p>${item.price.toFixed(2)}</p>
                            <a class="waves-effect waves-light btn">Add to Cart</a>
                        </div>
                    </div>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <div style={styles.page}></div>
                <div style={context}>
                    {content}
                </div>
            </div>
        )
    }
}