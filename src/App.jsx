// Importing modules and packages:
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Importing Pages:
import HomeAdm from './Pages/HomeAdm/HomeAdm';
import Register from './Pages/Register/Register';
import Consultor from  './Pages/Consultor/Consultor';
import Schedule from './Pages/Schedule/Schedule';
import Adm from './Pages/Adm/Adm';

// Importing Components:


// Importing style-sheets:
import './style/App.css';
import './style/global-style.css';


function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          <Route path='/' exact component={ HomeAdm } />
          <Route path="/adm" exact component={ Register } />
          <Route path="/consultor" exact component={ Consultor } />
          <Route path="/consultor/schedule/:office" exact component={ Schedule } />
          <Route path="/adm/criar" exact component={ Adm } />
          <Route path="/adm/home" exact component={ HomeAdm } />
        </Switch>
        
      </Router>
    
    </div>

  )
}

export default App;
