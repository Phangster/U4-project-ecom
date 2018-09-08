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

const row = {
    display: 'inline'
}

export default class workout extends React.Component {
    constructor() {
        super();
    }
    render(){
        const {getItems} = this.props;

        // const items = this.props.getItems;
        const content = getItems.map((item, index)=>{
            return(
                <li>
                    <div className="col s6 m4" style={display}>
                    <div className="card">
                        <div className="card-image">
                        <img src={"../images/" + item.img} />
                        <span className="card-title">{item.item}</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light"><i id={index}className="fa fa-heart red waves-effect waves-light" aria-hidden="true" onClick={this.props.addFavouriteHandler}></i></a>
                        </div>
                        <div className="card-content">
                            <span className="card-content activator"><p>{item.short_description}</p><i className="material-icons right">arrow_drop_up</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{item.item}<i className="material-icons right">close</i></span>
                            <p>{item.long_description}}</p>
                            <p className="price">${item.price.toFixed(2)}</p>
                            <a className="waves-effect waves-light btn" id={index} onClick={this.props.addItemHandler}>Add to Cart</a>
                        </div>
                    </div>
                    </div>
                </li>
            )
        })
        return(
            <div>
                <div style={styles.page}></div>
                <div style={context}>
                <div class="row" style={row}>
                    <ul>
                        {content}
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}