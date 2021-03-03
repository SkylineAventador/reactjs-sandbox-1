import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://www.logolynx.com/images/logolynx/90/90cdeb260df361a39d97540d9c75a814.png'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Setting</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 1
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
