import { LinkHome, HeaderBlock, LinkPhone } from './header.styled';
import { Outlet } from 'react-router-dom';
const Header = () => {
  const number = '+380730000000';
  return (
    <div>
      <HeaderBlock>
        <nav>
          <LinkHome to="/">Home</LinkHome>
          <LinkHome to="/catalog">Cotalog</LinkHome>
          <LinkHome to="/favorites">Favorites</LinkHome>
        </nav>
        <div>
          <LinkPhone href={`tel: ${number}`}>{number}</LinkPhone>
        </div>
        <Outlet />
      </HeaderBlock>
    </div>
  );
};

export default Header;
