import { Section, GoButton, Title, Welcome } from './pages.styled';

export default function Home() {
  return (
    <Section>
      <Title>Welcome to our car rental service!</Title>

      <h2>Book a car online in just a few clicks! </h2>
      <Welcome>
        Our service provides a simple and convenient rental process, as well as
        a high level of service.
      </Welcome>

      <Welcome>
        Start your adventure with us! Book a car right now and enjoy freedom of
        movement.
      </Welcome>
      <nav>
        <GoButton to="/catalog">Go to car selection</GoButton>
      </nav>
    </Section>
  );
}
