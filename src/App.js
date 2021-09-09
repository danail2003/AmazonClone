import './App.css';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser} />
        ) : (
          <div className="App">
            <Header user={user} />
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
