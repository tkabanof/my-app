import React from 'react';
import * as serviceWorker from './serviceWorker';
import state, {addPost, subscribe, updateNewPostText} from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
subscribe(renderEntireTree);
renderEntireTree(state);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some  .
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
