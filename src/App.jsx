// Importing modules and packages:
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Importing Pages:
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Consultor from  './Pages/Consultor/Consultor';

// Importing Components:


// Importing style-sheets:
import './style/App.css';
import './style/global-style.css';


function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path="/adm" exact component={ Register } />
          <Route path="/consultor" exact component={ Consultor } />
        </Switch>
        
      </Router>
    
    </div>

  )
}

export default App;
