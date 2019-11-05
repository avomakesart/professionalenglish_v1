import React from 'react'

import Footer from '../../components/footer/footer.component';

import {
    ContactContent,
    HomePageContent,
    TextHomePage
    } from './homepage.styles';

import {
    Container,
    IconsFlex,
    IconFlex,
    Button
    } from '../../components/utilities/utilities.styles';

import { SiteHeader } from '../../components/header/header.styles';

import {
    HeroText,
    HeroSubText
} from '../../components/hero/hero.styles';

// Images
import AboutUsImage from '../../assets/mustbe.jpg';
import School from '../../assets/service/school.svg';
import Online from '../../assets/service/online.svg';
import Business from '../../assets/service/business.svg';

const HomePage = () => {

    return(
        <>
        <SiteHeader className='heroImg'>
        <HeroText>
                Professional English
            </HeroText>
            <HeroSubText>
                Conoce tu nivel de Inglés
            </HeroSubText>
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCFiGCMqhOAxT5_CESYTtKa_BKQLNJoXN2SZd8Bk1e4MFUCA/viewform"
              target="_blank"
              rel="noopener"
              primary
            >
            Comienza
            </Button>
        </SiteHeader>
            <Container>
            <hr />
                <HomePageContent>
                    <TextHomePage>
                    <h2 style={{textAlign:'center'}}>Ayudamos a empresas y acompañantes</h2>
                    Somos una Academia líder en Guadalajara, en la enseñanza del idioma inglés. 
                    Con la calidad ofrecida en nuestros servicios y la metodología propia en 
                    constante desarrollo, nos comprometemos con nuestros alumnos en ofrecerles
                    la mejor manera de aprender.
                    </TextHomePage>
                    <img src={AboutUsImage} alt="AboutUsImage" 
                    style={{ 
                        flexBasis: '40%', 
                        margin:'0 auto', 
                        width: '23rem'
                        }} className='img'/>
            <Button
              href='/nosotros'
              rel="noopener"
              primary
              style={{marginTop:'0'}}
            >
            Leer más
            </Button>
        </HomePageContent>
            </Container>
            <Container>
                <hr />
                <IconsFlex>
                    <IconFlex>
                        <img src={School} alt="School Courses"/>
                        <h3>Clases Presenciales</h3>
                        <p>Ofrecemos clases presenciales en nuestras instalaciones, 
                        las cuales cuentan con aire acondicionado, cafetería, baños,
                        y más beneficios que tendrás a tu disposición.</p>
            <Button
              href='https://goo.gl/maps/5d1tm2xHgzyEBavB9'
              rel="noopener"
              target='_blank'
              primary
            >
            Visitanos
            </Button>
                    </IconFlex>
                    <IconFlex>
                        <img src={Online} alt="Online Courses"/>
                        <h3>Clases Online</h3>
                       <p>Disfruta de nuestras clases desde la comodidad de tu casa u oficina,
                            así podrás alcanzar tus metas y aprender inglés de una manera cómoda 
                            y divertidas.</p>
                        <Button
              href='/contacto'
              rel="noopener"
              dark
            >
            Cotiza
            </Button>
                    </IconFlex>
                    <IconFlex>
                        <img src={Business} alt="Business Courses"/>
                        <h3>Clases Empresariales</h3>
                       <p>Ofrecemos clases personalizadas las cuales puede tomar, 
                        desde la comodidad de su oficina o con opción de acudir
                        a nuestra academia.</p> 
                        <Button
              href='/contacto'
              rel="noopener"
              primary
            >
            Contacto
            </Button>
                    </IconFlex>
                </IconsFlex>
            </Container>

            <ContactContent className='parallaxImg' style={{marginTop:'4rem'}}>
                <Container style={{margin:'0 auto'}}>
                <TextHomePage>
                    <h2 className='center'>¿Quieres aprender inglés?</h2>
                    Estas en el lugar indicado para poder aprender inglés de manera divertida y como un profesional
                <Button
              to='/contacto'
              rel="noopener"
              primary
              style={{margin:'2rem 0'}}
            >
            Empieza
            </Button>
                    </TextHomePage>
          
                </Container>
            </ContactContent>

         <Footer/>
        </>
    );
};


export default HomePage;