import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import { legacy_createStore as createStore } from "redux"
 import mercedes from "./Components/Pictures/mercedes.jpg";
 import lexus from "./Components/Pictures/lexus.jpg";
 import suzuki from "./Components/Pictures/suzuki.jpg";

const initialState = {
  issLoggedIn: false,
  user: {
    email: "",
    name: "",
    password: ""
  },
  cars: [
    { id:1,
      name: "Mercedes",
      model: "c180",
      year: 1996,
      colour: "metallic",
      picture: mercedes,
      description: "very good car from Germany"
    },
    { id:2,
      name: "Lexus",
      model: "350f sport",
      year: 2015,
      colour: "red",
      picture: lexus,
      description: "very good car from USA"
    },
    { id:3,
      name: "Suzuki",
      model: "sx4",
      year: 2008,
      colour: "red",
      picture: suzuki,
      description: "very good car from Japan"
    }
  ]
}
//action =  {type: "Change mange", payload: "ds"}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN" :
          return {...state,issLoggedIn: true}
        case "LOGOUT": 
          return {...state,issLoggedIn: false}
        case "SUBMIT":
          const newstate = action.payload;
          return {...state, user:newstate}
       
        case "DELETE":
          const id = action.payload;
          const newcars = state.cars;
          return {...state,cars:newcars.filter((elem) =>  elem.id !== id)}
        case "ADDCAR": 
          const cars = state.cars;
          const newcar = action.payload.newcar;
          const image = action.payload.image;
          newcar.id = Math.floor(Math.random()*100000)
          newcar.picture = image;
          console.log("addimage",image)
          const newcarso = [...cars, newcar];
          return {...state,cars:newcarso}
        case "EDITCAR":
          const carsi = state.cars;
          const car = action.payload.car;
          const imgData = action.payload.image;
          
          car.picture = imgData;
         
          console.log("aaa",car)
          console.log("img", imgData)
          for(var i = 0; i<carsi.length; i++) {
            if(+carsi[i].id === +car.id)
            break;
          }
          carsi[i] = car;
          console.log("carsiiii",carsi)
          return { ...state, cars:[ ...carsi] }
      default: 
          return state;
    }

}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store} >
        <App />
    </Provider>
  </React.StrictMode>
);

