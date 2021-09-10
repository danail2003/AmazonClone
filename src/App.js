import './App.css';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Login from './components/Login';
import { useState } from 'react';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const signOut = () => {
    auth.signOut()
    .then(() => {
      localStorage.removeItem('user');
      setUser(null);
    })
  };

  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser} />
        ) : (
          <div className="App">
            <Header signOut={signOut} user={user} />
            <Switch>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </div>
        )
      }

    </Router>
  );
}

export default App;
