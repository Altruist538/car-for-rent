import { fetchData } from '../../redux/operations';
import { useEffect, useState } from 'react';
import { LoadMoretButton, List, ListItem, Container } from './carList.styled';
import { FiltersCar } from 'components/FiltersCar/FiltersCar';
import { CarCard } from 'components/carCard/carCard';
export const CarList = () => {
  const [carArray, setCarArray] = useState([]);
  const [carArrayFiltr, setCarArrayfiltr] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 12;

  const pageUp = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const fetchCar = async () => {
      const arrayCar = await fetchData(page, limit);

      if (page === 1) {
        return setCarArray(arrayCar);
      }
      return setCarArray(prevArray => [...prevArray, ...arrayCar]);
    };
    fetchCar();
  }, [page, limit]);

  function brandFilterChange(model) {
    const cars = carArray.filter(car => car.make === model);
    setCarArrayfiltr(cars);
  }
  const arrCars = carArrayFiltr.length !== 0 ? carArrayFiltr : carArray;
  return (
    <>
      <FiltersCar brandFilterChange={brandFilterChange} />
      <Container>
        <List>
          {arrCars.map(car => (
            <ListItem key={car.id}>
              <CarCard car={car} />
            </ListItem>
          ))}
        </List>
      </Container>
      <LoadMoretButton onClick={() => pageUp()}>Load more</LoadMoretButton>
    </>
  );
};
