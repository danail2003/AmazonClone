import './App.css';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Footer from './components/Footer/Footer';

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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
