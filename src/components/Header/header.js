import { LinkHome, HeaderBlock, LinkPhone } from './Header.styled';
export const Header = () => {
   const number = "+380730000000"
    return (
      <HeaderBlock>
      <nav>
      <LinkHome to="/">Home</LinkHome>
      <LinkHome to="/catalog">Cotalog</LinkHome>
      <LinkHome to="/favorites">Favorites</LinkHome>
      </nav>
      <div>
      <LinkPhone href={`tel: ${number}`}>
        {number}
      </LinkPhone>
    </div>
    </HeaderBlock>
    )}