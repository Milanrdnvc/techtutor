import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Desktops from './Desktops/Desktops';
import Contact from './Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../CSS/App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/desktops" component={Desktops} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
