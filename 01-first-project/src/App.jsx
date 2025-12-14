import './App.css'

function App() {

    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src="https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.png"
                    alt="logo"/>
            </header>
            <nav className='nav'>
                <a>Profile</a>
                <a>Message</a>
                <a>News</a>
                <a>Music</a>
                <a>Settings</a>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://assets.monica.im/tools-web/_next/static/media/mobile_upscale.e93d7497.webp"
                         alt=""/>
                </div>
                <div>
                    {/*<img src="https://web-tool.org/create-round-image/rectangular-image.jpg" alt=""/>*/}
                    ava + desc
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                </div>
                <div>
                    <div>
                        post1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
