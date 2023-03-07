import { legacy_createStore as createStore } from "redux"
 import mercedes from "../Components/Pictures/mercedes.jpg";
 import lexus from "../Components/Pictures/lexus.jpg";
 import suzuki from "../Components/Pictures/suzuki.jpg";

export const initialState = {
  isLoggedIn: false,
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
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGOUT": 
          return {...state,isLoggedIn: false}
        case "SUBMIT":
          const newstate = action.payload;
          return {...state, user:newstate, isLoggedIn: true}
       
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
          const newcarso = [ newcar,...cars];
          return {...state,cars:newcarso}
        case "EDITCAR":
          const carsi = state.cars;
          const car = action.payload.car;
          const imgData = action.payload.image;
          car.picture = imgData;
          for(var i = 0; i<carsi.length; i++) {
            if(+carsi[i].id === +car.id)
            break;
          }
          carsi[i] = car;
          return { ...state, cars:[ ...carsi] }
      default: 
          return state;
    }

}

export const store = createStore(reducer)