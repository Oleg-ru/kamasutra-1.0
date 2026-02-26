import './App.css'
import styles from './App.module.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import {Route, Routes} from "react-router";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Friends from "./components/Friends/Friends.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Login from "./components/Login/Login.jsx";
import {Component, lazy, Suspense} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer.js";
import Preloader from "./components/common/Preloader/Preloader.jsx";
import AlterPreloader from "./components/common/Preloader/AlterPreloader/AlterPreloader.jsx";
// import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
// import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer.jsx'));

class App extends Component {

    catchRejectionEvent = (promiseRejectionEvent) => {
        alert("Произошла непредвиденная ошибка!")
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchRejectionEvent)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchRejectionEvent)
    }

    render() {

        if (!this.props.initialized) {
            return <div className={styles.center}><Preloader/></div>
        }

        const {
            store
        } = this.props;

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar store={store}/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<AlterPreloader />}>
                    <Routes>
                        <Route path='profile/:userId?' element={<ProfileContainer/>}/>
                        <Route path='dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='users' element={<UsersContainer/>}/>
                        <Route path='login' element={<Login/>}/>
                        <Route path='news' element={<News/>}/>
                        <Route path='music' element={<Music/>}/>
                        <Route path='settings' element={<Settings/>}/>
                        <Route path='friends' element={<Friends/>}/>
                        <Route path='*' element={<div>Not found 404</div>}/>
                    </Routes>
                    </Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App)
