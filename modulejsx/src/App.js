import React,{useState} from 'react';
import Login from './Login';
import Main from './main';
import Footer from '../src/Footer/Footer';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (loggedInUsername) => {
    setLoggedIn(true);
    setUsername(loggedInUsername);
  }

  return(
    <div>
      {isLoggedIn ? (
        <div>
          <Main username={username}/>
          <Footer/>
        </div>
      ) : (
        <Login onLogin={handleLogin}/>
      )}
    </div>
    
  )
}

export default App