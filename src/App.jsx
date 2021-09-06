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
<<<<<<< HEAD

    <Router>
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path="/adm" exact component={ Register } />
      </Switch>
      
    </Router>
=======
    <div className="App">

      <Router>

        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path="/adm" exact component={ Register } />
          <Route path="/consultor" exact component={ Consultor } />
        </Switch>
        
      </Router>
    
    </div>
>>>>>>> bac675f9f41fc2bebc7c4bcfa41e6336716435a6

  )
}

export default App;
