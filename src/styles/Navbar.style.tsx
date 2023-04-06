import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppTheme } from "./App.style";

export const NavbarLink = styled(Link)`
  color: ${AppTheme.colors.forground};
  font-family: ${AppTheme.font.extra};
  text-decoration: none;
  margin: 10px;
  font-size: 2.2rem;
  @media (min-width: 1000px) {
    font-size: 1.2rem;
  }
`;
export const NavbarContainer = styled.nav<{extendNavbar:boolean}>`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color:${AppTheme.colors.lessBG};
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    height: 80px;
  }
`;


export const NavbarInnerContainer = styled.div`
  height: 80px;
  display: flex;
`;

export const BurgerMenu = styled.button`
  background: none;
  border: none;
  color:${AppTheme.colors.medium};
  font-size: 3rem;
  cursor: pointer;
   @media (min-width: 1000px) {
    display: none;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: none;
  ul{
    display: flex;
    list-style-type: none;
  }



  @media (min-width: 1000px) {
    display: flex;
  }

`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  align-items: center;
`;


export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  width: 80px;
  height: 80px;
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  ul{
    list-style-type: none;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;