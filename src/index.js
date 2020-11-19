import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some  .
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
