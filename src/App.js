import React from 'react';
import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import Routes from "./routes"
import './App.css';
import store from './redux/store';

const App =()=> (
  <Provider store = {store}>
    <BrowserRouter>
    <Routes/>
  </BrowserRouter>
  </Provider>
)

export default App;
