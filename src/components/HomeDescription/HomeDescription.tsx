import {
  StyledBG,
  StyledDescription,
  StyledNavLink,
  StyledTextDescription,
  StyledTitle,
} from "./HomeDescription.styled";

export const HomeDescription = () => {
  return (
    <>
      <StyledBG>
        <StyledTitle>Welcome to our Car Rental Service in Ukraine!</StyledTitle>
        <StyledDescription>
          Discover the freedom of driving with our diverse fleet of rental cars.
          Browse our catalog to choose from a wide range of vehicles based on
          your preferences, including make, hourly rental rates, and mileage.
          Whether you need a car for a quick trip or an extended journey, we've
          got you covered.
        </StyledDescription>
        <StyledDescription>
          With our user-friendly platform, finding the perfect rental car is
          just a few clicks away. Plus, don't forget to save your favorite
          selections for easy access in the future.
        </StyledDescription>
        <StyledTextDescription>
          Start your journey today and experience the convenience and
          flexibility of renting a car with us!
        </StyledTextDescription>
      </StyledBG>
      <StyledNavLink to="/catalog">Get Started</StyledNavLink>
    </>
  );
};
