import logo from './logo.svg';
import './App.css';
import Banner from './Pages/Shared/Banner/Banner';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Reviews from './Pages/Reviews/Reviews';


function App() {
  return (
    <div className="App">


      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/reviews'>
            <Reviews></Reviews>
          </Route>

          <Route path='/booking/:serviceId'>
            <Booking></Booking>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
