import { CarList } from 'components/carList/carList';
import { Container } from './pages.styled';
// import { Gallery } from 'components/gallery/gallery';

const Catalog = () => {
  return (
    <Container>
      {/* <Gallery /> */}
      <CarList />
    </Container>
  );
};

export default Catalog;
