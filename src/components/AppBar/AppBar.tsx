import { StyledContainer } from 'components/Container/Container.styled';
import {
  StyledHeader,
  StyledLinkWrap,
  StyledNav,
  StyledNavLink,
} from './AppBar.styled';

export const AppBar = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledLinkWrap>
            <StyledNavLink to="/catalog">Cars Catalog</StyledNavLink>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </StyledLinkWrap>
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};
