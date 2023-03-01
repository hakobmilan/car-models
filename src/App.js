
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Info from './Components/ActionComponents/Info';
import Edit from './Components/ActionComponents/Edit';
import NewCar from './Components/NewCar';

function App() {
  return (
      <Router>
        <div className="App">
                <Header/>
                <Routes>
                  <Route  element = {<Login/>}  path="/" />
                  <Route  element={<Home/>} path="/home"/>
                  <Route element = {<Info/>} path= "car/:id" />
                  <Route element = {<Edit/>} path = "edit/:id" />
                  <Route element = {<NewCar />} path = "/create" />
          </Routes>
          
        </div>
        </Router>
         
  );

}

export default App;
