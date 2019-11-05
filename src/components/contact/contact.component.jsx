import React, { Component } from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import * as emailjs from 'emailjs-com'
import cogoToast from 'cogo-toast';

class ContactForm extends Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  }


handleSubmit(e) {
    e.preventDefault()
    const { name, lastName, email, subject, message } = this.state
    cogoToast.success("👏🏻 Tu mensaje se envio correctamente!!!", { position: 'top-right' });
    let templateParams = {
      from_name: name,
      from_last_name: lastName,
      to_email: email,
      to_name: 'Professional English',
      subject: subject,
      message_html: message,
     }

     emailjs.send(
      'smtp_server',
      'template_H2liF44L',
       templateParams,
      'user_PNxwZPpsJwyhtcqESAowX'
     )
     this.resetForm()
    }

   resetForm() {
       this.setState({
        name: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
       })
     }

   handleChange = (param, e) => {
       this.setState({ [param]: e.target.value })
     }
    render() {
        return (
                    <form
                    onSubmit={this.handleSubmit.bind(this)}
                    style={{margin:'0 auto', width:'50%'}}>
                        <div className="form-group">
                            <label >Nombre</label>
                            <input
                            value={this.state.name}
                            onChange={this.handleChange.bind(this, 'name')}
                            name="name" type="text" 
                            className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Apellido</label>
                            <input
                            value={this.state.lastName}
                            onChange={this.handleChange.bind(this, 'lastName')}
                            name="lastName" type="text" 
                            className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                            value={this.state.email}
                            onChange={this.handleChange.bind(this, 'email')}
                            name="email" type="email" 
                            className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Asunto</label>
                            <input  
                            value={this.state.subject}
                            onChange={this.handleChange.bind(this, 'subject')}
                            name="subject" type="text"
                            className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea 
                            value={this.state.message}
                            onChange={this.handleChange.bind(this, 'message')}
                            style={{ height: '7rem' }} 
                           name="message" type="textarea" 
                            className='form-control'></textarea>
                        </div>
                        <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between'}}>
                            <button type="submit" className="sendButton">Enviar</button>
                        </div>
                    </form>
                )
              }
            }

export default ContactForm;