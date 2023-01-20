import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <Router basename='/'>
      <>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
      </>
    </Router>
  );
}

export default App;
