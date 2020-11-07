import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import {Lists} from './bothLists'
import index from "./redux/index";
import store from "./redux/store/index";
  
ReactDOM.render(
    <Provider store={store}>
        <Lists />
    </Provider>
    ,
    document.getElementById('root')
);
