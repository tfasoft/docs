import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DocsAPI from './components/docs-api';

import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path={'/'} exact><Home /></Route>
            <Route path={'/api'} exact><DocsAPI /></Route>
          </Switch>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00b74a" fill-opacity="1" d="M0,192L30,165.3C60,139,120,85,180,96C240,107,300,181,360,192C420,203,480,149,540,160C600,171,660,245,720,272C780,299,840,277,900,234.7C960,192,1020,128,1080,133.3C1140,139,1200,213,1260,240C1320,267,1380,245,1410,234.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </div>
    </Router>
  );
}

export default App;
