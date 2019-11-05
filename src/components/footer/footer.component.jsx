import React from 'react'

import { 
FooterNav,
Copyright,
FooterNavLinkGrid,
FooterGrid
 } from './footer.styles';

 import {
  Container,
  IconsFlex
  } from '../utilities/utilities.styles';

//import { ReactComponent as Logo } from '../../assets/crown.svg';

const Footer = () => {

return(
    <>
     <Container style={{backgroundColor:'#191919', width:'100%'}}>
                <IconsFlex>
                    <FooterGrid>
                        <strong className='title-footer'>Acerca</strong>
                        <FooterNav>
                        <FooterNavLinkGrid to='/' className='gray-color'>
                        Servicios
                        </FooterNavLinkGrid>
                        <FooterNavLinkGrid to='/' className='gray-color' >
                        Nosotros
                      </FooterNavLinkGrid>
                      <FooterNavLinkGrid to='/' className='gray-color' >
                        Contacto
                      </FooterNavLinkGrid>
                      </FooterNav>
                    </FooterGrid>
                    <FooterGrid>
                    <strong className='title-footer'>Social</strong>
                    <FooterNav>
                        <FooterNavLinkGrid href="https://facebook.com/professionalenglisgdl" className='gray-color'>
                        Facebook
                        </FooterNavLinkGrid>
                        <FooterNavLinkGrid href="https://instagram.com/professionalenglisgdl"  className='gray-color' >
                        Instagram
                      </FooterNavLinkGrid>
                      <FooterNavLinkGrid href="mailto:hello@professionalenglishgdl.com"  className='gray-color' >
                        Email
                      </FooterNavLinkGrid>
                  </FooterNav>
                    </FooterGrid>
                    <FooterGrid>
                      <Copyright>©Professional English 2019</Copyright>
                      <p className='footer-text'>Somos una Academia líder en Guadalajara, en la enseñanza del idioma inglés. 
                        Con la calidad ofrecida en nuestros servicios y la metodologia propia en 
                        constante desarrollo, nos comprometemos con nuestros alumnos en ofrecerles 
                        la mejor manera de aprender inglés.
                      Made with love by: Bluecatencode</p>
                    </FooterGrid>
                </IconsFlex>
            </Container>
    </>
    );
};

export default Footer;