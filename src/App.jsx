// Importing modules and packages:
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Consultor pages:
import HomeAdm from './Pages/HomeAdm/HomeAdm';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Office from  './Pages/Office/Office';
import Schedule from './Pages/Schedule/Schedule';
import DeskInstructions from './Pages/DeskInstructions/DeskInstructions';
import SelectDesk from './Pages/SelectDesk/SelectDesk';
import Review from './Pages/Review/Review';
import Confirmation from './Pages/Confirmation/Confirmation';

// Importing Components:

// ADM pages:
import Adm from './Pages/Adm/Adm';

// Importing style-sheets:
import './style/App.css';
import MySchedules from './Pages/MySchedules/MySchedules';

function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          <Route path='/' exact component={ HomeAdm } />
          <Route path='/register' exact component={ Register } />
          <Route path='/login' exact component={ Login } />
          <Route path="/office" exact component={ Office } />
          <Route path="/office/schedule/" exact component={ Schedule } />
          <Route path='/instructions'exact component={ DeskInstructions } />
          <Route path='/desks' exact component={ SelectDesk } />
          <Route path='/review' exact component={ Review } />
          <Route path='/confirmation' exact component={ Confirmation } />
          <Route path="/adm/criar" exact component={ Adm } />
          <Route path="/adm/home" exact component={ HomeAdm } />
          <Route path="/adm/home" exact component={ HomeAdm } />
          <Route path="/my/schedule" exact component={ MySchedules } />
        </Switch>
        
      </Router>
    
    </div>

  )
}

export default App;
