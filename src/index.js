import React from 'react'  
import ReactDOM from 'react-dom' 
import { BrowserRouter } from 'react-router-dom' 
import App from './Components/App';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers/CombineReducers';
import {Provider} from 'react-redux'
  
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>  
            <App />  
        </BrowserRouter> 
    </Provider>  
), document.getElementById('root'));