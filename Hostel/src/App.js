import './App.css';
import React from 'react';
import BoysHostel from './components/BoysHostel';
import GirlsHostel from './components/GirlsHostel';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  const [visible, setVisible] = React.useState(true);
  const[logged, setLogged] = React.useState(false);
  return (
    <>
      {logged ? (
        <>
        <Navbar />
        <br />
        <Router>
          {visible ? (<div className="container">
            <div className="d-flex justify-content-center">
              <h3 className="display-4">Choose your Gender</h3>
            </div>
            <div className="d-flex justify-content-around m-5">
              <Link to="/boysHostel"><img src="https://static.vectorcharacters.net/uploads/2013/04/Boy_Vector_Character_with_Bag_and_Notepad_Preview.jpg" width="370" className="img-fluid" onClick={() => { setVisible(false) }}></img></Link>
              <Link to="/girlsHostel"><img src="https://i.pinimg.com/originals/65/8e/3e/658e3e85a4d99cca3c1246d6455eedef.jpg" width="300" className="img-fluid" onClick={() => { setVisible(false) }}></img></Link>
            </div>
          </div>) : null
          }
  
          <Switch>
            <div className="container">
              <Route path="/boysHostel">
                <BoysHostel />
              </Route>
              <Route path="/girlsHostel">
                <GirlsHostel />
              </Route>
            </div>
          </Switch>
        </Router>
        </>
      ) : <Login logged={setLogged} />}
      

    </>
  );
}

export default App;
