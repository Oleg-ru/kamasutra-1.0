import './App.css'
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import {Route, Routes} from "react-router";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Friends from "./components/Friends/Friends.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";

function App(props) {

    const {
        store
    } = props;

    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar store={store}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='profile' element={<Profile />}/>
                    <Route path='dialogs/*' element={<DialogsContainer />}/>
                    <Route path='users' element={<UsersContainer />}/>
                    <Route path='news' element={<News />}/>
                    <Route path='music' element={<Music />}/>
                    <Route path='settings' element={<Settings />}/>
                    <Route path='friends' element={<Friends />}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
