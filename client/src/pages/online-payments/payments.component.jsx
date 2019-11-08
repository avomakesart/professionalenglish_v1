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
      <StripeProvider apiKey="pk_test_CcwKXSFozLzZApyXMe1KNzPp00TwwGze02">
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