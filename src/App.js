import './App.css';
import Navbar from './Navbar';
import Dash from './Dash';
import Signup from './Signup';
import Signin from './Signin';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Fullpost from './Fullpost';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Dash />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/posts/:id">
          <Fullpost />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
