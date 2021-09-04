// Importing modules and packages:
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Importing Pages:
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';

// Importing Components:


// Importing style-sheets:
import './App.css';
import './style/global-style.css';


function App() {
  return (

    <Router>

      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path="/adm" exact component={ Register } />
      </Switch>
      
    </Router>

  )
}

export default App
