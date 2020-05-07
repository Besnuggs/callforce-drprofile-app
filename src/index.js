import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Redux, especially combinedReducers, is total overkill/unnecessary for this demo, but I'd like to demo async actions with a redux store for a much larger application.
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
  store = createStore(rootReducer(), composeEnhancer(applyMiddleware(thunk)))

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
     </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

render()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
