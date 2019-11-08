import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SiteHeader = styled.div`
background-color: #1B1C1D;
padding: 1.5rem 0 2rem 0;
@media (min-width: 768px) {
        padding: 1rem 0 2rem 0;
}   
`;

export const Container = styled.div`
width: 95%;
max-width: 120rem; 
margin: 0 auto;
`;

export const HeaderContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content:space-between;
text-align: center;
@media (min-width: 768px) {
        text-align: right;
}
`;


export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100%;
@media (min-width: 768px) {
        display:flex;
        justify-content:left;
}
`;

export const Nav = styled.div`
display: none;
@media (min-width: 768px) {
        color: white;
        display: block;
        margin-top: -2.5rem;
}
`;

export const NavLink = styled(Link)`
text-decoration: none;
font-size: 2.2rem; 
margin-right: 2rem;
display: block;
color: black;
text-align: center;
@media (min-width: 768px) {
        color: white;
    text-align: left;
    display: inline-block;
    margin-right: 1.5rem;
    font-size: 1.2rem; /** 1.8rem = 18px **/
}
`;


export const NavMobile = styled.div`
display: inline-block;
@media (min-width: 768px) {
        display: none;
}
`;



export const NavLinkMobile = styled(Link)`
text-decoration: none;
font-size: 2.2rem; 
margin-right: 2rem;
display: block;
color: black;
text-align: center;
@media (min-width: 768px) {
      display: none;
}
`;
