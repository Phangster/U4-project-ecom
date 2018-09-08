import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './Components/error';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import LoginForm from './Components/User/LoginForm'; 
import SignUpForm from './Components/User/SignUpForm';
import Profile from './Components/User/Profile';
import {HashRouter as Router,Switch,Route,BrowserRouter,Link,Redirect } from 'react-router-dom';
import Travel from './Components/Travel';
import Gym from './Components/Gym';
import Home from './Components/Home';
import Workout from './Components/Gym/workout';
import Diet from './Components/Gym/diet';
import Cart from './Components/Cart/cart';




export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            user: null,
            redirectLogin: false,
            itemData: null,
            itemCount: 0,
            cartItem: [],
            cartUserItem: null,
        };
        this.loginHandler = this.loginHandler.bind(this);
        this.signoutHandler = this.signoutHandler.bind(this);
        this.getItems = this.getItems.bind(this);
        this.addItemHandler= this.addItemHandler.bind(this);
        this.addFavouriteHandler=this.addFavouriteHandler.bind(this);
        this.getCartItem=this.getCartItem.bind(this);
        this.addFromCart=this.addFromCart.bind(this);
        this.removeFromCart=this.removeFromCart.bind(this);


    }
    
    componentDidMount(){
        //do an AJAX to check the status of the cookie
        const opts = {
            headers: {'Content-Type': 'application/json'}, //sending over a javascript object
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({})
          }
        fetch('/api/login-check', opts)
            .then(apiResponse => apiResponse.json())
            .then(apiData => {
                if (apiData.loginStatus == true){
                    this.setState({
                        loggedIn: true
                    });
                }
            })
            .catch((error) =>{
                console.error(error);
            });

        this.getItems();

        //call cookie library communicate with the browser itself
    }

    loginHandler(apiData) {
        if (apiData.loginStatus) {
            this.setState({
                loggedIn: true,
                user: apiData.result,
                redirectLogin: true
            });
            console.log("YOU'RE  LOGGED IN as", apiData.result.user_name)
        };
    }

    signoutHandler(){
        console.log(this.state.loggedIn)
        this.setState({
            loggedIn: false,
            user: null,
            redirectLogin: false
        })
        document.cookie = 'user_id=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    getItems(){
        fetch('/api/get-items')
            .then(apiResponse => apiResponse.json())
            .then(apiData => {
                this.setState({
                    itemData: apiData.result
                });
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    addItemHandler(event){
        let id = event.target.id;
        id = parseInt(id);
        const count = this.state.itemCount + 1;
        const cartItem = this.state.cartItem;
        const products = this.state.itemData;
        const selectedItem = products[id];
        if(selectedItem['count'] >= 1 ){
            selectedItem.count++;
        }else{
            selectedItem['count'] = 1;
            cartItem.push(selectedItem);
        }
        this.setState({
            itemCount: count,
            cartItem: cartItem
        });
        
        const opts = {
            headers: {'Content-Type': 'application/json'}, //sending over a javascript object
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({item_id: id})
          }
        fetch('/api/adding-to-cart', opts)
            .then(apiResponse => apiResponse.json())
            .catch((error) =>{
                console.error(error);
            });
    }

    getCartItem(){
        fetch('/api/view-cart-items')
            .then(apiResponse => apiResponse.json())
            .then(apiData => {
                const cartUserItem = apiData.result;
                this.setState({
                    cartUserItem: cartUserItem
                });
            })
            .catch((error) =>{
                console.error(error);
            });
            console.log(this.state.cartUserItem )
    }

    addFavouriteHandler(){
        console.log("favourite")
    }

    addFromCart(index){
        console.log('add');
        const cartItem = this.state.cartItem;
        if(cartItem[index].count >= 1){
            cartItem[index].count++;
            debugger;
        }
        const currentItemCount = this.state.itemCount;
        const itemCount = currentItemCount + 1;
        this.setState({
            cartItem: cartItem,
            itemCount: itemCount
        })
    }

    removeFromCart(index){
        console.log('remove')
        const cartItem = this.state.cartItem;
        if(cartItem[index].count > 0){
            cartItem[index].count--;
            if(cartItem[index].count === 0){
                cartItem.splice(index, 1);
            }  
        }
        const currentItemCount = this.state.itemCount;
        const itemCount = currentItemCount - 1;
        this.setState({
            cartItem: cartItem,
            itemCount: itemCount
        })
    }
    render() {
        var { loggedIn, user, redirectLogin } = this.state;
        return (
                [   
                <header>
                    <Navbar user={user} loggedIn={loggedIn} signoutHandler={this.signoutHandler} itemCount={this.state.itemCount} getCartItem={this.getCartItem}/>
                </header>,
                <main>
                    <div className="container1">
                        <Switch>
                            {/* Public Routes */}
                            <Route exact path='/' render={()=><Home />}/>
                            <Route path='/login' render={()=><LoginForm loginHandler={this.loginHandler} redirectLogin={redirectLogin}/>}/>
                            <Route path='/signup' render={()=><SignUpForm />}/>
                            <Route path='/gym/workout' render={()=><Workout getItems={this.state.itemData} addItemHandler={this.addItemHandler} addFavouriteHandler={this.addFavouriteHandler}/>}/>
                            <Route path='/gym/diet' render={()=><Diet />}/>
                            <Route path='/gym' render={()=><Gym />}/>
                            <Route path='/travel' render={()=><Travel />}/>

                            {/* Private Routes */}
                            <Route path='/cart' render={()=><Cart loggedIn={loggedIn} user={user} cartItem={this.state.cartItem} addFromCart={this.addFromCart} removeFromCart={this.removeFromCart} />}/>
                            <Route path='/profile'render={()=><Profile loggedIn={loggedIn} user={user}/>}/>
                        </Switch>
                    </div>
                </main>,
                < Footer />
            ]
        );
    }
}

ReactDOM.render(
    <ErrorBoundary>
        <BrowserRouter>
        {/* <Router> */}
            <App />
        {/* </Router> */}
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('app')
)

module.hot.accept();