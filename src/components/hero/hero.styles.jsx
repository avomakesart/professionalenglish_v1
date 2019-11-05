import styled, {css} from 'styled-components';


export const HeroText = styled.h1`
    color: white;
    padding-bottom: 2rem;
    max-width: 60rem;
    line-height: 2;
    text-align:center;
    margin-top: 3em;
    margin-bottom: 0em;
    font-size: 3em;
    font-weight: normal;
@media (min-width: 768px) {
    margin-left:2em;
    text-align:left;
    font-size 4em;
}
`;

export const AltHeader = styled.div`
background-color: #1B1C1D;
padding: 1.5rem 0 2rem 0;
@media (min-width: 768px) {
        padding: 1rem 0 2rem 0;
}   
`;


export const AltHeroText = styled.h1`
    color: white;
    padding-bottom: 2rem;
    max-width: 100%;
    line-height: 2;
    text-align:center;
    margin-top: 2em;
    margin-bottom: 0em;
    font-size: 3em;
    font-weight: normal;
@media (min-width: 768px) {
    text-align:center;
    font-size 4em;
}
`;

export const AltText = styled.h1`
    color: white;
    padding-bottom: 2rem;
    max-width: 60rem;
    line-height: 2;
    text-align:center;
    margin-top: 3em;
    margin-bottom: 0em;
    font-size: 3em;
    font-weight: normal;
@media (min-width: 768px) {
    margin-left:2em;
    text-align:left;
    font-size 4em;
}
`;


export const HeroSubText = styled.h2`
color: white;
text-align:center;
font-size: 1.6em;
font-weight: normal;
margin: 0 auto;
@media (min-width: 768px) {
margin-left:4em;
text-align:left;
font-size 2em;
}
`;

export const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: flex;
  border-radius: 3px;
  justify-content:center;
  width: 5rem;
  background: transparent;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 auto;
  margin-top: 2em;
  text-decoration: none;
  padding: 0.78571429em 1.5em 0.78571429em;
  @media (min-width: 768px) {
    margin-top: 2em;
    margin-left:7em;
    }

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background-color: #FBBD08;
    color: white;
  `}
`