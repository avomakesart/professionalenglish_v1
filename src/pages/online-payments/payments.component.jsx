import React from 'react';
import { StripeProvider, Elements} from 'react-stripe-elements';

import CheckoutForm from '../../components/checkout-form/CheckoutForm';
import {
  Container
  } from '../../components/utilities/utilities.styles';

const Checkout = () => {
    return (
      <>
     <hr />
      <StripeProvider apiKey="pk_live_UXYTTYUMzgoU5EtSIPgvyIef00xzKAiPY0">
      <Container>
      <Elements>
        <CheckoutForm />
      </Elements>
      </Container>
      </StripeProvider>
    
      </>
    );
}

export default (Checkout);