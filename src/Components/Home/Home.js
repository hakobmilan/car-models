import React, { useState } from 'react'
import styles from './Home.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';
function Home() {

  const [isopen, setIsOpen] = useState(false);
  const [currId, setCurrId] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cars  =  useSelector( (state) => state.cars);
  const [search,setSearch] = useState("");
  
  const filtredCars = cars.filter(car => {
    return car.name.toLowerCase().includes(search.toLowerCase())
  })
  
  const handleDeleteButtonClick = (id) => {
    setCurrId(id);
  setIsOpen(true);
  }
  console.log(cars,'cars')
  const handleYesClick = () => {
    dispatch({
      type: "DELETE",
      payload: currId
  });
  setIsOpen(false);
  }

  return (
    <div className={styles.container}>
      {isopen? <Popup handleYesClick={handleYesClick} isopen = {isopen} setIsOpen = {setIsOpen}/> : null}
      <h3 className={styles.h3tag}>Please look our car parameters table</h3>
        <input value={search} onChange ={(e) => setSearch(e.target.value)} className={styles.search} type="search" placeholder='Search by name' />
        <br></br>

      <button onClick={() => navigate("/create")} className={styles.button}>Create New Car</button>
      <div className={styles.contdiv}>
      <table className={styles.cars}>
        <thead>
          <tr>
            <th>Car name</th>
            <th>Car model</th>
            <th>Year</th>
            <th>Colour</th>
            <th>Picture</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {filtredCars ? filtredCars.map((car) => (
            
           <tr key={car.id}>
              <td>{car.name}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.colour}</td>
              <td><img src={car.picture} alt="car" className={styles.images} /></td>
              <td> 
                <button onClick={ () => navigate(`/car/${car.id}`)} className={styles.little}>Info</button>
                <button onClick={ () => navigate(`/edit/${car.id}`)} className={styles.little}>Edit</button>
                <button onClick={ () => handleDeleteButtonClick(car.id)} className={styles.little}>Delete</button></td> 
           </tr>
        )) : ''}
        </tbody>
      </table>
      </div>
        
    </div>
  )
}

export default Home