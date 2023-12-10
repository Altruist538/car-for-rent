import {
  ImgCar,
  BlockBigllInfo,
  BigllInfo,
  BigllInfoBlue,
  SmallInfo,
  HeartImg,
  HeartButton,
  LearnMoretButton,
  BigllInfoPpice,
} from './carCard.styled';
import imgDefault from '../../data/car-d.jpg';
import iconHeart from '../../data/normal.svg';
// import { FiltersCar } from 'components/FiltersCar/FiltersCar';
export const CarCard = ({ car }) => {
  const {
    id,
    make,
    img,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    functionalities,
  } = car;
  return (
    <>
      <HeartButton>
        <HeartImg src={iconHeart} alt={make} />
      </HeartButton>
      <ImgCar src={img || imgDefault} alt={make} />

      <BlockBigllInfo>
        <BigllInfo>
          {make} <BigllInfoBlue>{model},</BigllInfoBlue> {year}
        </BigllInfo>
        <BigllInfoPpice> {rentalPrice}</BigllInfoPpice>
      </BlockBigllInfo>
      <SmallInfo>
        {address.split(',').slice(-2).join(' | ')} | {rentalCompany}
      </SmallInfo>
      <SmallInfo>
        {type} | {make} | {id} | {functionalities[0]}
      </SmallInfo>
      <LearnMoretButton>Learn more</LearnMoretButton>
    </>
  );
};
