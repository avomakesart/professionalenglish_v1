import React from 'react'

import Footer from '../../components/footer/footer.component';

import {
    ServicesText,
    ServicesContent
    } from './services.styles';
    
import {
    Container,
    IconsFlex,
    IconFlex,
    Button,
    } from '../../components/utilities/utilities.styles';
    

import {
    AltHeader,
    AltHeroText
    } from '../../components/hero/hero.styles';

import School from '../../assets/service/school.svg';
import Online from '../../assets/service/online.svg';
import Business from '../../assets/service/business.svg';

const Services = () => {

    return(
        <>
        <AltHeader className='altHero'>
        <AltHeroText className='center'>
              Servicios
        </AltHeroText>
        </AltHeader>
            <Container style={{marginBottom:'3rem'}}>
                <hr />
                <IconsFlex>
                    <IconFlex>
                        <img src={School} alt="Icon One"/>
                        <h3>Clases Presenciales</h3>
                        <p>Ofrecemos clases presenciales en nuestras instalaciones, 
                            las cuales cuentan con aire acondicionado, cafetería, baños, 
                            y más beneficios que tendrás a tu disposición.</p>
                    </IconFlex>
                    <IconFlex>
                        <img src={Online} alt="Icon Two"/>
                        <h3>Clases Online</h3>
                        <p>Disfruta de nuestras clases desde la comodidad de tu casa u oficina,
                            así podrás alcanzar tus metas y aprender inglés de una manera cómoda y divertidas.</p>
                    </IconFlex>
                    <IconFlex>
                        <img src={Business} alt="Icon Three"/>
                        <h3>Clases Empresariales</h3>
                       <p>Ofrecemos clases personalizadas las cuales puede tomar, 
                        desde la comodidad de su oficina o con opción de acudir a nuestra academia.</p>
                    </IconFlex>
                </IconsFlex>
            </Container>
            <ServicesContent className='servicesImg' style={{marginTop:'4rem'}}>
                <Container style={{margin:'0 auto'}}>
                <ServicesText>
                    <h2 className='center'>Sevicio de traducciones</h2>
                    Contamos con el servicio de traduccion, altamente profesional y con experiencia que nos respalda.
                <Button
              href='/contacto'
              rel="noopener"
              primary
              style={{margin:'2rem 0'}}
            >
            Contacto
            </Button>
                    </ServicesText>
          
                </Container>
            </ServicesContent>
         <Footer/>
        </>
    );
};


export default Services;