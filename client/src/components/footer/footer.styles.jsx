import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterSection = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
background-color: #191919;
margin: 0;
`;

export const ContainerTwo = styled.div`
width: 95%;
max-width: 120rem; 
margin: 0 auto;
`;

export const FooterContainer = styled.div`
padding: 3rem 0;
text-align: left;
`;

export const FooterGrid = styled.div`
text-align:center;
margin: 0 auto;
padding-top: 1.5rem;
@media (min-width: 768px) {
    margin-top: 3rem;
flex-basis: calc(33.3% - 1rem);
}
`;

export const FooterNav = styled.nav`
font-size: 1rem;
@media (min-width: 768px) {
        display: block;
        margin-top: 0rem;
}
`;

export const FooterNavLinkGrid = styled(Link)`
color: gray;
text-decoration: none;
font-size: 1.2rem; 
display: block;
@media (min-width: 768px) {
    text-align: center;
    cursor: pointer;
    display: block;
    font-size: 1.2rem; /** 1.8rem = 18px **/
}
`;

export const Copyright = styled.p`
margin: -1rem 0 auto;
padding-top: 1rem;
color: white;
text-align:center;
@media (min-width: 768px) {
    padding-top: 1rem;
}
`;