import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DocsAPI from './components/docs-api';
import Footer from './components/footer';

import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='container pt-5'>
          <Switch>
            <Route path={'/'} exact><Home /></Route>
            <Route path={'/api'} exact><DocsAPI /></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
