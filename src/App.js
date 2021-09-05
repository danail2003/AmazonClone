import './App.css';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
