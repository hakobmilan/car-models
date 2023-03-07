
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Info from './Components/ActionComponents/Info/Info';
import Edit from './Components/ActionComponents/Edit/Edit';
import NewCar from './Components/NewCar/NewCar';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
function App() {
 const isLoggedIn = useSelector(state => state.isLoggedIn)
  return (
      <Router>
        <div className="App">
                <Header/>
                <Routes>
                    <Route  element = {<Login/>}  path="/" /> 
                    <Route  element={isLoggedIn?<Home/>:( <Navigate to="/" />)} path="/home"/>
                    <Route element = {isLoggedIn?<Info/>:( <Navigate to="/" />)} path= "car/:id" />
                    <Route element = {isLoggedIn?<Edit/>:( <Navigate to="/" />)} path = "edit/:id" />
                    <Route element = {isLoggedIn?<NewCar/>:( <Navigate to="/" />)} path = "/create" />
               </Routes>
          
        </div>
        </Router>
         
  );

}

export default App;
