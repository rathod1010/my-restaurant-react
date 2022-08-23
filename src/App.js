import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'

import FetchAllRestaurants from './components/FetchAllRestaurants.1';
import FetchRestaurant from './components/FetchRestaurant';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Bookings from './components/Bookings';
import SuccessDrawer from './components/success-model';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<FetchAllRestaurants/>}></Route>
          <Route path="/restaurant/view/:id" element={<FetchRestaurant/>}></Route>
          <Route path="/user/signin" element={<SignUp/>} />
          <Route path="/user/login" element={<Login/>} />
          <Route path="/bookings/:id" element={<Bookings/>}/>
          <Route path="/success" element={<SuccessDrawer/>} />
        </Routes>
      </Router>
     

    </div>
  );
}

export default App;
