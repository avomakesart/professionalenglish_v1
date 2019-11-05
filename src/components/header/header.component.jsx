import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useAuth0 } from "../../react-auth0-spa";

import {
  SiteHeader,
  Container,
  HeaderContent,
  LogoContainer,
  Nav,
  NavLink,

} from "./header.styles";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <>
      <SiteHeader>
        <Container>
          <HeaderContent>
            <LogoContainer to="/">
              <Logo className="logo" />
            </LogoContainer>
            <Nav>
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/nosotros">Nosotros</NavLink>
              <NavLink to="/servicios">Servicios</NavLink>
              <NavLink to="/contacto">Contacto</NavLink>
              <NavLink to="/checkout">Pago En Línea</NavLink>
              {!isAuthenticated && (
                <NavLink onClick={() => loginWithRedirect({})}>Log in</NavLink>
              )}

              <NavLink to="/perfil">Perfil</NavLink>
              {isAuthenticated && (
                <NavLink onClick={() => logout()}>Log out</NavLink>
              )}
            </Nav>
          </HeaderContent>
        </Container>
      </SiteHeader>
    </>
  );
};

export default Header;
