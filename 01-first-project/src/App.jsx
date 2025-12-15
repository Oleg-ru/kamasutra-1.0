import './App.css'
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";

function App() {

    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile />
        </div>
    )
}

export default App
