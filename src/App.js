import React, {useState} from 'react';
import './App.css';
import {  createStore, applyMiddleware }  from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducers from './stores/reducers/rootReducers';
import Login from './component/Login/Login';
import Userlist from './component/userComponent/Userlist';
import { BrowserRouter, Route } from 'react-router-dom';
import Adduser from './component/userComponent/Adduser';
import "mdbreact/dist/css/mdb.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const store = createStore(rootReducers, applyMiddleware(thunk));	

  return (
  	
    <div className="App" style = {{padding: "29px"}}>
		<Provider store = {store}>
		  <header className = "container">
		  	<BrowserRouter>
		  	<Route path = "/" exact strict component = {Login} />
		  	<Route path = "/userlist" exact strict component = {Userlist} />
		  	<Route path = "/adduser" exact strict component = {Adduser} />
		    </BrowserRouter>
		  </header>
		</Provider>
    </div>

  );
}

export default App;
