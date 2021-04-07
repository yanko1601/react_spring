import { useState } from 'react'
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom'
import './App.css';

import Home from './Components/Main/Home/Home';
import Login from './Components/Common/Login/Login';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import Register from './Components/Common/Register/Register';
import Admin from './Components/Admin/Admin';
import NotAuth from './Components/Admin/NotAuth';

function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [token, setToken] = useState('');

  const handleLogOut = () => {
   setCurrentUser({});
   setToken('') 
  }
  
  const handleLogin = (logindetails) => {
    setCurrentUser(logindetails.playerOutputView);
    setToken(logindetails.token);
    <Redirect to="/register"/>;
  }

  return (
    <div className="app">
      {/* <h1 className="heading">Hello tennis front-end app</h1> */}
      <Header data={{user: currentUser, token: token}} HandleLogOut={handleLogOut}/>
      <Switch>
        <Route path="/" exact component={ () => <Home data={{user: currentUser, token: token}} />} />
        {token ? <Route path="/login" exact component={ () => <Home data={{user: currentUser, token: token}} />} /> : <Route path="/login" exact component={ () => <Login HandleLogin={handleLogin} /> }/>}
        <Route path="/register" exact component={ Register }/>
        <Route path="/admin" exact component={ Admin }/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
