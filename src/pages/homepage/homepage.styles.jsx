import styled from 'styled-components';

export const Container = styled.div`
width: 95%;
max-width: 120rem; /** 120rem = 1200px **/
margin: 0 auto;
`;

export const HomePageContent = styled.div`
@media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
}
`;

export const TextHomePage = styled.div`
margin: 0;
padding: 1rem 0 3rem 0;
font-family: 'Lato', sans-serif;
font-size: 1.3rem;
line-height: 2;
text-align:justify;
@media (min-width: 768px) {
        margin-left: 2rem;
}
`;


export const ContactContent = styled.div`
  flex: 0 0 95%;
  color: white;
  `;