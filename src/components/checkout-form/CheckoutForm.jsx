import React from 'react';

import {CardElement, injectStripe } from 'react-stripe-elements';

import cogoToast from 'cogo-toast';


class CheckoutForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            amount: ""
        };
    }
    

    handleSubmit = async (e) => {
        e.preventDefault();
       try {    
            let { token } = await this.props.stripe.createToken({ 
              name: this.state.name
            })
            let email = this.state.email;
            let amount = this.state.amount;
            await fetch('/api/charges',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token, amount, email })
            })
            .then(response => {
              cogoToast.loading(<h3>Procesando tu pago...</h3>).then(() => {
                cogoToast.success(<div>
                  <h3>Tu pago se aplico correctamente!</h3>
                  <h4>revisa tu correo para más información!</h4>
                </div>);
              });
            })
            this.resetForm()
            // redirect, clear inputs, thanks alert goes here
       } catch(e) {
           throw e;
       }
        
    }

    resetForm() {
      this.setState({
       name: '',
       email: '',
       amount: ''
      })
    }

    render() {
  
        return (
            <>
          <form
            onSubmit={this.handleSubmit.bind(this)}
            style={{ margin: "0 auto", width: "50%" }}
          >
            <div className="form-group">
              <label>Nombre:</label>
              <input
                 value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                name="name"
                type="text"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Correo electrónico:</label>
              <input
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                name="email"
                type="email"
                placeholder="jane.doe@example.com"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Cantidad:</label>
              <input
                value={this.state.amount}
                onChange={e => this.setState({ amount: e.target.value })}
                name="amount"
                type="number"
                className="form-control"
              />
            </div>
            <label>Ingresa tu numero de tarjeta ---- EXP / Date ---- CVC ----- CP</label>
            <CardElement name="card" />
            <div
              className="form-group"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button type="submit" className="sendButton">
                Pagar
              </button>
            </div>
          </form>
          </>
        );
    }
} 


export default injectStripe(CheckoutForm);