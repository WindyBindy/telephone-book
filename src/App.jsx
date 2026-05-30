import { Component } from 'react'
import { nanoid } from 'nanoid'
import './App.css'

class App extends Component {
  state = {
    contacts: [],
    filter: '', // 1. Добавили filter в стейт, как просят в ТЗ
    name: '',
    number: '',
  }

  // Наш универсальный метод сам справится с filter, так как у инпута будет name='filter'
  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleAddContact = event => {
    event.preventDefault()

    if (this.state.name.trim() === '' || this.state.number.trim() === '') return;

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }))
  }

  render() {
    // Деструктуризируем filter из стейта
    const { contacts, filter, name, number } = this.state

    // 3. Логика фильтрации: приводим всё к нижнему регистру (.toLowerCase())
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div style={{ padding: '20px' }}>
        <h1>Phonebook</h1>

        <form onSubmit={this.handleAddContact}>
          <div>
            <p>Name</p>
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <p>Number</p>
            <input
              type='tel'
              name='number'
              value={number}
              onChange={this.handleInputChange}
              pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
              title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
              required
            />
            <br />
            <button type='submit'>Add contact</button>
          </div>
        </form>

        <h2>Contacts</h2>
        
        {/* 2. Добавили поле поиска (без формы вокруг него) */}
        <div>
          <p>Find contacts by name</p>
          <input
            type="text"
            name="filter" // Имя совпадает с ключом в state
            value={filter}
            onChange={this.handleInputChange} // Использует тот же метод
          />
        </div>

        <ul>
          {/* Вместо обычных contacts рендерим уже отфильтрованный отфильтрованный массив filteredContacts */}
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id}>{name}: {number}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App