import styled from "styled-components";
import { NavLink } from "react-router-dom";
import auto_rent from "../../images/auto_rent.jpg";

export const StyledTitle = styled.h1`
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const StyledBG = styled.div`
  background-image: url(${auto_rent});
  padding-bottom: 260px;
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const StyledDescription = styled.p`
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  width: 1400px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const StyledTextDescription = styled(StyledDescription)`
  font-size: 20px;
  color: #2980b9;
  font-weight: 600;
`;

export const StyledNavLink = styled(NavLink)`
  background-color: #2980b9;
  color: #fff;
  padding: 5px 15px;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  border-radius: 8px;
  display: block;
  width: 200px;
  margin: 20px auto;
  text-align: center;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
