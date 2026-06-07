
import { Component } from "react";
import { nanoid } from 'nanoid';
import style from "./ContactForm.module.css"
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') return;

    
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    
    this.props.onAddContact(newContact);

    
    this.setState({
      name: '',
      number: '',
    });
  }
  
  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <p className={style.title}>Name</p>
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.handleInputChange}
            
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
          <p className={style.title}>Number</p>
          <input
            type='tel'
            name='number'
            value={number}
            onChange={this.handleInputChange}
            
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
          />
          <br />
          <button type='submit' className={style.addButton}>Add contact</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;