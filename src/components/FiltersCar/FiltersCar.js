import {
  FiltersBlock,
  Label,
  CarBrandInput,
  InputBlock,
  FromInput,
  ToInput,
  InputBlockFromTo,
  SearchButton,
} from './FiltersCar.styled';
import listCars from '../../data/makes.json';
export const FiltersCar = ({ brandFilterChange }) => {
  const priceOptions = [];
  for (let price = 10; price <= 500; price += 10) {
    priceOptions.push(<option key={price} value={`${price} $`} />);
  }
  return (
    <FiltersBlock>
      <InputBlock>
        <Label htmlFor="carModelSelect">Car brand</Label>
        <CarBrandInput
          name="car"
          list="carModelSelect"
          placeholder="  Enter the text"
          onChange={event => brandFilterChange(event.target.value)}
        />
        <datalist id="carModelSelect">
          {listCars.map((car, index) => (
            <option key={index} value={car} />
          ))}
        </datalist>
      </InputBlock>
      <InputBlock>
        <Label htmlFor="priceRange">Price/ 1 hour</Label>
        <CarBrandInput name="car" list="priceRange" placeholder="  To $" />
        <datalist id="priceRange">{priceOptions}</datalist>
      </InputBlock>
      <InputBlock>
        <Label htmlFor="from">Сar mileage / km</Label>
        <InputBlockFromTo>
          <FromInput type="text" id="from" name="from" placeholder="  From" />
          <ToInput type="text" id="to" name="to" placeholder="  To" />
        </InputBlockFromTo>
      </InputBlock>
      <SearchButton>Search</SearchButton>
    </FiltersBlock>
  );
};
