import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogContainer";
import FriendContainer from "./components/Friends/FriendContainer.txt";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import {Redirect} from "react-router";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer store={props.store}
                           />}/>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer store={props.store}/>
                           }/>
                    {/*<Route path="/friends"*/}
                    {/*       render={() => <FriendContainer store={props.store}/>}/>*/}
                    <Route path="/friends" component={Friends}/>
                    <Route path="/news" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/login" component={Login}/>
                    <Route exact path="/">
                        <Redirect to="/profile"/>
                    </Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
