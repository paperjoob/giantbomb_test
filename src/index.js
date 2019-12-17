import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Rent videogame
const rentReducer = (state = [], action) => {
    // TODO: Products added to the cart
    switch(action.type) {
        case 'RENT_VIDEOGAME':
            return [...state, action.payload];
        case 'DELETE':
            // return state.filter(({ id }) => id !== action.data);
            return state.filter(item => (
                item.i !== action.payload.i
              ))
        case 'CLEAR_CART':
            return [];
        default:
            return state
    }
};

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        rentReducer
    }),
);

// Wrap our App in a Provider, this makes Redux available in our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
