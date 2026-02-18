import './App.css'
import styles from './App.module.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import {Route, Routes} from "react-router";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Friends from "./components/Friends/Friends.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Login from "./components/Login/Login.jsx";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer.js";
import Preloader from "./components/common/Preloader/Preloader.jsx";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <div className={styles.center}><Preloader /></div>
        }

        const {
            store
        } = this.props;

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar store={store}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='profile/:userId?' element={<ProfileContainer/>}/>
                        <Route path='dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='users' element={<UsersContainer/>}/>
                        <Route path='login' element={<Login/>}/>
                        <Route path='news' element={<News/>}/>
                        <Route path='music' element={<Music/>}/>
                        <Route path='settings' element={<Settings/>}/>
                        <Route path='friends' element={<Friends/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App)
