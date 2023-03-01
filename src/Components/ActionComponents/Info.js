import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import styles from './Info.module.css'
function Info() {
const {id} = useParams();
const cars  =  useSelector( (state) => state.cars);
for(let i =0; i<cars.length; i++) {
    if(+id === +cars[i].id) {
        var mycar = cars[i];
        console.log("mycar",mycar)
        break;
    }
}



  return (
    <div className={styles.container}>
        <h3>Car Information</h3>
        <table className={styles.table}>
            <tbody className={styles.tbody}>
                
                <tr>
                    <td>Car Name</td>
                    <td>{mycar.name?mycar.name:"undef"}</td>
                </tr>
                <tr>
                    <td>Car Model</td>
                    <td>{mycar.model}</td>
                </tr>
                <tr>
                    <td>Car Year</td>
                    <td>{mycar.year}</td>
                </tr>
                <tr>
                    <td>Car Colour</td>
                    <td>{mycar.colour}</td>
                </tr>
                <tr>
                    <td>Car Picture</td>
                    <td><img src={mycar.picture} alt="car" className={styles.images} /></td>
                </tr>
                <tr>
                    <td>Car Description</td>
                    <td>{mycar.description? mycar.description : "No info"}</td>
                </tr>
                
            </tbody>
        </table>
    </div>
  )
}

export default Info