import styled, {css} from 'styled-components';

// Utilities
export const Container = styled.div`
width: 95%;
max-width: 120rem; /** 120rem = 1200px **/
margin: 0 auto;
`;

export const IconsFlex = styled.div`
@media (min-width: 768px) {
        display: flex;
        justify-content:∫ space-between;
}
`;

export const IconFlex = styled.div`
text-align:center;
margin-top: 3rem;
@media (min-width: 768px) {
flex-basis: calc(33.3% - 1rem);
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
  margin-top: 3rem;
  text-decoration: none;
  padding: 0.78571429em 1.5em 0.78571429em;
  @media (min-width: 768px) {
        margin: 0 8rem;
        margin-top: 3rem;
    }

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background-color: #FBBD08;
    color: white;
  `}
  ${props => props.dark && css`
    background-color: #191919;
    color: white;
  `}
  `;


// Section

export const Section = styled.div`
padding: 8rem 0 7rem;
text-align: center;
@media (min-width: 550px) {
      padding: 12rem 0 11rem;
    }

    @media (min-width: 750px) {
        padding: 14rem 0 15rem;
    }
    @media (min-width: 1000px) {
        padding: 20rem 0 19rem;
    }
`;

export const SectionHeading = styled.div`
margin-bottom: 1.2rem;
`;

export const SectionDescription = styled.div`
margin-bottom: 1.2rem;
@media (min-width: 750px) {
    max-width: 60%;
    margin-left: auto;
    margin-right: auto;
}
`;

// Values

export const Values = styled.div`
background-image: url('../images/values-bg.jpg');
background-size: cover;
color: #fff;
padding-bottom: 5rem;
`;


export const ValueMultiplier = styled.div`
margin-bottom: .5rem;
color: #11DFC7;
`;

export const ValueHeading = styled.div`
margin-bottom: .3rem;
`;

export const ValueDescription = styled.div`
opacity: .8;
font-weight: 300;
`;

// Help

export const GetHelp = styled.div`
border-bottom: 1px solid #ddd;  
`;

// Categories 

export const Categories = styled.div`
background-image: url('../images/values-bg.jpg');
background-size: cover;
color: #fff;
@media (min-width: 750px) {
padding: 15rem 0 8rem;
}
`;
