import React, { Component } from "react";
import { nanoid } from 'nanoid';

import Button from '../Button';

import ButtonEl from './ButtonEl.json';


import './ContactForm.scss'

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    
    nameInputId = nanoid();
    numberInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({ id: nanoid(), ...this.state });
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '', });
    };

    render() {
        const { name, number } = this.state;
        
        return (
            <form className="form-container" onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId} className="form-label">Name</label>
                <input
                className="form-input"
                type="text"
                value={name}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleChange}
                id={this.nameInputId}
                />
                <label htmlFor={this.numberInputId} className="form-label">Number</label>
                <input
                className="form-input"
                type="tel"
                name="number"
                value={number}
                pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                required
                onChange={this.handleChange}
                id={this.numberInputId}
                />
                {ButtonEl.map(({ btnType, btnName }) =>
                {
                    return (<Button
                        btnType={btnType}
                        btnName={btnName}
                        key={btnName}
                        classButton="form-button"
                    />)
                })}
            </form>
        )
    }
}

export default ContactForm