import { fetchData } from "components/api/operations";
import { useEffect, useState } from "react";
import { List, ListItem, Container, ImgCar } from './gallery.styled';
// import carArray from "../../advertsCars.json"
export const Gallery = () => {
   const [carArray, setCarArray] = useState([])
   useEffect(()=>{ const fetcCar= async ()=>{ const arrayCar= await fetchData()
    console.log(arrayCar);
    setCarArray(arrayCar)}
    fetcCar()
   },[])

    return (
      <Container>
        <List>
          {carArray.map(car => (
            <ListItem key={car.id}>
             <ImgCar src={car.img} alt={car.make}/>
             <h3>{car.rentalPrice}</h3>
          <p>{car.address} | {car.rentalCompany} | {car.type} | {car.make} | {car.model} | {car.mileage}</p>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  };
  