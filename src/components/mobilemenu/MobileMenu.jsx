import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import {
  NavMobile,
  NavLinkMobile
} from "../header/header.styles";


const MenuMovil = ({ close }) =>{
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div id="menu">
    <NavMobile>
      <NavLinkMobile onClick={close} to="/"><a href="/">Inicio</a></NavLinkMobile>
      <NavLinkMobile onClick={close} to="/nosotros">Nosotros</NavLinkMobile>
      <NavLinkMobile onClick={close} to="/servicios">Servicios</NavLinkMobile>
      <NavLinkMobile onClick={close} to="/contacto">Contacto</NavLinkMobile>
      <NavLinkMobile onClick={close} to="/checkout">Pago En Línea</NavLinkMobile>
      <NavLinkMobile onClick={close} to="/perfil">Perfil</NavLinkMobile>
      {!isAuthenticated && (
               // eslint-disable-next-line jsx-a11y/anchor-is-valid
               <NavLinkMobile onClick={() => loginWithRedirect({})} to="/">Log in</NavLinkMobile>  )}
       {isAuthenticated && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
                 <NavLinkMobile onClick={() => logout()} to="/">Log out</NavLinkMobile> 
              )}
    </NavMobile>
    </div>
  )
};

export default MenuMovil;