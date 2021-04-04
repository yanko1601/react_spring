import { useState } from 'react'
import { Route, Switch } from 'react-router';
import './App.css';

import DataFetch from './Data/DataFetch';

import Home from './Components/Main/Home/Home';
import Login from './Components/Common/Login/Login';
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import Register from './Components/Common/Register/Register';

function App() {

  const [currentUser, setCurrentUser] = useState({id: 1, name: 'Yanko'})
  const [token, setToken] = useState('token');

  return (
    <div className="app">
      {/* <h1 className="heading">Hello tennis front-end app</h1> */}
      <Header data={{user: currentUser, token: token}}/>
      <Switch>
        <Route path="/" exact component={ () => <Home data={{user: currentUser, token: token}}/>} />
        <Route path="/login" exact component={ Login }/>
        <Route path="/register" exact component={ Register }/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
