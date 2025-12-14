import './App.css'

function App() {

    return (
        <>
            <Header />
            <Technologies />
        </>
    )
}

function Header() {

    return (
        <div>
            <a>Home</a>
            <a>News Feed</a>
            <a>Message</a>
        </div>
    )
}

function Technologies() {
    return (
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
        </ul>
    );
}

export default App
