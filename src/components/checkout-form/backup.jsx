import React from 'react';

import {CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            amount: ""
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
       try {    
            let token = await this.props.stripe.createToken({ name: this.state.name  })
            console.log(token);
            
       } catch(e) {
           throw e;
       }
        
    }

    render() {
        return (
            <>
          <form
            onSubmit={this.handleSubmit.bind(this)}
            style={{ margin: "0 auto", width: "50%" }}
          >
            <div className="form-group">
              <label>Nombre</label>
              <input
                // value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                name="name"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                // value={this.state.amount}
                onChange={e => this.setState({ amount: e.target.value })}
                name="amount"
                type="text"
                className="form-control"
              />
            </div>

            <CardElement />
            <div
              className="form-group"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button type="submit" className="sendButton">
                Enviar
              </button>
            </div>
          </form>
          </>
        );
    }
} 


export default injectStripe(CheckoutForm);