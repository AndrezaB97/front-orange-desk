// Importing modules and packages:
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Importing Pages:
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
<<<<<<< HEAD
// import Office from  './Pages/Office/Office';
=======
import Consultor from  './Pages/Consultor/Consultor';
import Adm from './Pages/Adm/Adm';
>>>>>>> master

// Importing Components:


// Importing style-sheets:
import './style/App.css';
import './style/global-style.css';
import HomeAdm from './Pages/HomeAdm/HomeAdm';


function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          <Route path='/' exact component={ Home } />
<<<<<<< HEAD
          <Route path="/register" exact component={ Register } />
          {/* <Route path="/office" exact component={ Office } /> */}
=======
          <Route path="/adm" exact component={ Register } />
          <Route path="/consultor" exact component={ Consultor } />
          <Route path="/adm/criar" exact component={ Adm } />
          <Route path="/adm/home" exact component={ HomeAdm } />
>>>>>>> master
        </Switch>
        
      </Router>
    
    </div>

  )
}

export default App;
