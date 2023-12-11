import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import carsOperations from 'redux/operations.js';
import { List, ListItem, Container, Title, Section } from './pages.styled.js';
import { FiltersCar } from 'components/FiltersCar/FiltersCar';
import { CarCard } from 'components/carCard/carCard';

const Favorites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(carsOperations.fetchCars());
  }, [dispatch]);
  const cars = useSelector(state => state.cars.items);
  const favorites = useSelector(state => state.favorites.items);

  let favFilteredCars = [];
  favFilteredCars = cars.filter(car => favorites.includes(car.id));
  const [carArrayFiltr, setCarArrayfiltr] = useState([]);

  function brandFilterChange(model) {
    const cars = favFilteredCars.filter(car => car.make === model);

    setCarArrayfiltr(cars);
  }
  const arrCars = carArrayFiltr.length !== 0 ? carArrayFiltr : favFilteredCars;
  return (
    <>
      {favFilteredCars.length === 0 && <Title>No cars selected</Title>}
      {favFilteredCars.length !== 0 && (
        <Section>
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
        </Section>
      )}
    </>
  );
};
export default Favorites;
