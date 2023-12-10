import { fetchData } from 'components/api/operations';
import { useEffect, useState } from 'react';
import {
  List,
  ListItem,
  Container,
  ImgCar,
  BlockBigllInfo,
  LoadMoretButton,
  BigllInfo,
  BigllInfoBlue,
  SmallInfo,
  HeartImg,
  HeartButton,
  LearnMoretButton,
  BigllInfoPpice,
} from './gallery.styled';
import imgDefault from '../../data/car-d.jpg';
import iconHeart from '../../data/normal.svg';
import { FiltersCar } from 'components/FiltersCar/FiltersCar';
// import carArray from "../../data/advertsCars.json"
export const Gallery = () => {
  const [carArray, setCarArray] = useState([]);
  useEffect(() => {
    const fetcCar = async () => {
      const arrayCar = await fetchData(1, 12);
      console.log(arrayCar);
      setCarArray(arrayCar);
    };
    fetcCar();
  }, []);

  return (
    <>
    <FiltersCar/>
      <Container>
        <List>
          {carArray.map(car => (
            <ListItem key={car.id}>
              <HeartButton>
                <HeartImg src={iconHeart} alt={car.make} />
              </HeartButton>
              <ImgCar src={car.img || imgDefault} alt={car.make} />

              <BlockBigllInfo>
                <BigllInfo>
                  {car.make} <BigllInfoBlue>{car.model},</BigllInfoBlue>{' '}
                  {car.year}
                </BigllInfo>
                <BigllInfoPpice> {car.rentalPrice}</BigllInfoPpice>
              </BlockBigllInfo>
              <SmallInfo>
                {car.address.split(',').slice(-2).join(' | ')} |{' '}
                {car.rentalCompany}
              </SmallInfo>
              <SmallInfo>
                {' '}
                {car.type} | {car.make} | {car.id} | {car.functionalities[0]}
              </SmallInfo>
              <LearnMoretButton>Learn more</LearnMoretButton>
            </ListItem>
          ))}
        </List>
      </Container>
      <LoadMoretButton>Load more</LoadMoretButton>
    </>
  );
};
