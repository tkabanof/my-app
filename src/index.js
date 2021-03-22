import { StrictMode } from 'react';
import * as serviceWorker from './serviceWorker';
import {store} from './redux/redux-store'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
    document.getElementById('root')
);

window.store = store

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some  .
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
