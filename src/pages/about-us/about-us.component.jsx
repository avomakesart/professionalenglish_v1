import React from 'react'

import Footer from '../../components/footer/footer.component';

import {
    AboutUsContent,
    TextAbout
    } from './about-us.styles';

import {
    Container,
    IconsFlex,
    IconFlex
    } from '../../components/utilities/utilities.styles';

import {
    AltHeader,
    AltHeroText
    } from '../../components/hero/hero.styles';

// Images
import AboutUsImage from '../../assets/mustbe.jpg';
import Mission from '../../assets/about/mission.svg';
import Vision from '../../assets/about/vision.svg';
import Values from '../../assets/about/values.svg';

const AboutUs = () => {

    return(
        <>
        <AltHeader className='altHero'>
        <AltHeroText className='center'>
              Nosotros
        </AltHeroText>
        </AltHeader>
        <Container>
            <hr />
        <AboutUsContent>
                    <TextAbout>
                    <h2 style={{textAlign:'center'}}>Ayudamos a empresas y acompañantes</h2>
                    Somos una Academia líder en Guadalajara, en la enseñanza del idioma inglés. 
                    Con la calidad ofrecida en nuestros servicios y la metodología propia en 
                    constante desarrollo, nos comprometemos con nuestros alumnos en ofrecerles
                    la mejor manera de aprender.
                    </TextAbout>
                    <img src={AboutUsImage} alt="AboutUsImage" 
                    style={{ 
                        flexBasis: '40%', 
                        margin:'0 auto', 
                        width: '23rem'
                        }} className='img'/>
        </AboutUsContent>
            </Container>
            <Container style={{marginBottom:'3rem'}}>
                <hr />
                <IconsFlex>
                    <IconFlex>
                        <img src={Mission} alt="School Courses"/>
                        <h3>Clases Presenciales</h3>
                       <p>Ofrecemos clases presenciales en nuestras instalaciones, 
                        las cuales cuentan con aire acondicionado, cafetería, baños,
                        y más beneficios que tendrás a tu disposición.</p> 
                    </IconFlex>
                    <IconFlex>
                        <img src={Vision} alt="Online Courses"/>
                        <h3>Clases Presenciales</h3>
                       <p>Ofrecemos clases presenciales en nuestras instalaciones, 
                        las cuales cuentan con aire acondicionado, cafetería, baños,
                        y más beneficios que tendrás a tu disposición.</p>
                    </IconFlex>
                    <IconFlex>
                        <img src={Values} alt="Business Courses"/>
                        <h3>Clases Presenciales</h3>
                      <p>Ofrecemos clases presenciales en nuestras instalaciones, 
                        las cuales cuentan con aire acondicionado, cafetería, baños,
                        y más beneficios que tendrás a tu disposición.</p>
                    </IconFlex>
                </IconsFlex>
            </Container>

         <Footer/>
        </>
    );
};


export default AboutUs;