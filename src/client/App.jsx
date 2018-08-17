import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './Components/error';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import LoginForm from './Components/User/LoginForm';
import SignUpForm from './Components/User/SignUpForm';
import Profile from 'Components/User/profile';
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
            showMenu: false,
            cartItem: [],
        };
        this.loginHandler = this.loginHandler.bind(this);
        this.signoutHandler = this.signoutHandler.bind(this);
        this.getItems = this.getItems.bind(this);
        this.addItemHandler= this.addItemHandler.bind(this);
        this.addFavouriteHandler=this.addFavouriteHandler.bind(this);
        this.openMenu=this.openMenu.bind(this);
        this.cartItem=this.cartItem.bind(this);

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
    }

    loginHandler(apiData) {
        if (apiData.loginStatus) {
            this.setState({loggedIn: true, user: apiData.result, redirectLogin: true});
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
        const obj = [];
        const price =event.target.getAttribute('price');
        const image =event.target.getAttribute('image');
        const item =event.target.getAttribute('item');
        const id =event.target.getAttribute('id');
        obj.push(id, item, image, price );
        const currentCartItem = this.state.cartItem.slice();
        currentCartItem.push(obj);
        const count = this.state.itemCount + 1;
        this.setState({
            itemCount: count,
            cartItem: currentCartItem
        });
    }

    addFavouriteHandler(){
        console.log("favourite")
    }

    openMenu(event) {
        event.preventDefault(); 
        this.setState({
          showMenu: true,
        });
    }

    cartItem(event){
        
    }

    render() {
        console.log('cartttttt',this.state.cartItem)
        var { loggedIn, user, redirectLogin } = this.state;
        return (
                [   
                <header>
                    <Navbar user={user} loggedIn={loggedIn} signoutHandler={this.signoutHandler} itemCount={this.state.itemCount} showMenu={this.state.showMenu} openMenu={this.openMenu} cartItem={this.cartItem}/>
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
                            <Route path='/cart' render={()=><Cart loggedIn={loggedIn} user={user} cartItem={this.state.cartItem}/>}/>
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