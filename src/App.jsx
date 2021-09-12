// Importing modules and packages:
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Consultor pages:
import HomeAdm from './Pages/HomeAdm/HomeAdm';
import Consultor from  './Pages/Consultor/Consultor';
import Schedule from './Pages/Schedule/Schedule';
import Confirmation from './Pages/Confirmation/Confirmation';

// ADM pages:
import Adm from './Pages/Adm/Adm';
import Register from './Pages/Register/Register';

// Importing style-sheets:
import './style/App.css';

function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          <Route path='/' exact component={ HomeAdm } />
          <Route path="/adm" exact component={ Register } />
          <Route path="/consultor" exact component={ Consultor } />
          <Route path="/consultor/schedule/:office" exact component={ Schedule } />
          <Route path='/confirmation' exact component={ Confirmation } />
          <Route path="/adm/criar" exact component={ Adm } />
          <Route path="/adm/home" exact component={ HomeAdm } />
        </Switch>
        
      </Router>
    
    </div>

  )
}

export default App;
