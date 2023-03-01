import React from 'react'
import styles from './Popup.module.css'
function Popup({isopen, setIsOpen, onDelete, handleYesClick}) {

  return (
    <div  className={styles.modal}>

    <div className={styles.modalcontent}>
      <p>Are you sure wou want to delete?</p>
      <button onClick={ handleYesClick}   className={styles.button}>Yes</button>
      <button onClick={() =>setIsOpen(false)} className={styles.button}>No</button>
    </div>
  
  </div>
  )
}

export default Popup