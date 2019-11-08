import React from 'react'

import Footer from '../../components/footer/footer.component';
import ContactForm from '../../components/contact/contact.component';

import {
    Container,
    IconsFlex,
    IconFlex,
    Button,
    } from '../../components/utilities/utilities.styles';


import CallUs from '../../assets/contact/phone.svg';
import Location from '../../assets/contact/map.svg';
import Calendar from '../../assets/contact/schedule.svg';
    

import {
    AltHeader,
    AltHeroText
} from '../../components/hero/hero.styles';

const Contact = () => {

    return(
        <>
        <AltHeader className='altHero'>
        <AltHeroText className='center'>
              Contacto
        </AltHeroText>
        </AltHeader>
        <Container style={{marginBottom:'3rem'}}>
                <hr />
                <IconsFlex>
                    <IconFlex>
                        <img src={CallUs} alt="Phone Icon"/>
                        <h3>Llamanos</h3>
                       <p>Zapopan, Jal</p> 
                       <p><strong>Teléfono:</strong> 33 2153 5468</p>
                       <p><strong>Movil:</strong> 33 2320 7866</p>
                       <p>CDMX</p> 
                       <p><strong>Teléfono:</strong> 55 4127 6513</p>
                    </IconFlex>
                    <IconFlex>
                        <img src={Location} alt="Map Icon"/>
                        <h3>Sucursales</h3>
                        <p>Zapopan, Jal</p> 
                       <p>Av. Enrique Ladrón de Guevara #1655-4,
                        Paseos del Sol 45079, Zapopan, Jalisco, México</p>
                        <p>CDMX</p>
                        <p>La Coruña 166 Álamos, 03400 Ciudad de México, CDMX</p>
                    </IconFlex>
                    <IconFlex>
                        <img src={Calendar} alt="Calendar Icon"/>
                        <h3>Horario</h3>
                      <p><strong>Lunes a Viernes:</strong> 9:00 am a 8:00 pm</p>
                      <p><strong>Sabados:</strong> 9:00 am a 1:00 pm</p>
                        <Button
              href='https://goo.gl/maps/5d1tm2xHgzyEBavB9'
              rel="noopener"
              target='_blank'
              dark
            >
            Visitanos
            </Button>
                    </IconFlex>
                </IconsFlex>
            </Container>

            <Container>
                <hr/>
                <ContactForm />
            </Container>
         <Footer/>
        </>
    );
};


export default Contact;