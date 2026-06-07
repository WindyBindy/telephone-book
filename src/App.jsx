
import { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '', 
  }

  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addContact = (newContact) => {
    
    const duplicate = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (duplicate) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
  }
  handleDelete = id => {
		this.setState(prevState => {
			return {
				contacts: prevState.contacts.filter(contact => contact.id !== id),
			}
		})
	}




  render() {
    
    const { contacts, filter } = this.state; 
    
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div style={{ padding: '20px' }}>
        <h1>Phonebook</h1>

        
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        
        <Filter value={filter} onChange={this.handleInputChange} />

        <ContactList list={filteredContacts} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;