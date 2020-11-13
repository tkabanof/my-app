import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogs={props.state.dialogsState}/>}/>
                    <Route path="/profile"
                           render={() => <Profile profiles={props.state.profile}
                                                  dispatch={props.dispatch}
                           />}/>
                    <Route path="/friends"
                           render={() => <Friends friends={props.state.friends}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
