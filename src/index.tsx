import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Header, Theme, GlobalStyle} from './components/Components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {HomePage} from './pages/HomePage';
  import {AboutPage} from './pages/AboutPage';
  import {ThemeProvider} from 'styled-components'
const App : React.FC = ()  => {
    let [light, setLight]  = useState(true);
    const handleClick = () => {
        setLight(!light);
    }
    return (
        <>
        <ThemeProvider theme={Theme}>
            <GlobalStyle/>
            <Router>
                <Header>
                    <div className="logo">
                    <Link to='/'>Hexman</Link>
                    </div>
                    <nav>
                        <ul>
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/blog'>Blog</Link>
                            <button onClick={handleClick}>{light ? 'Dark Mode' : 'Light Mode'}</button>
                        </ul>
                    </nav>

                </Header>
                <Switch>
                    <Route exact path='/'>
                        {light ? <HomePage background='white' color='black' /> : <HomePage background='black' color='white'/>}
                    </Route>
                    <Route path='/about/'>
                    {light ? <AboutPage background='white' color='black' /> : <AboutPage background='black' color='white'/>}
                    </Route>
                </Switch>
        </Router>
      </ThemeProvider>
        </>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));