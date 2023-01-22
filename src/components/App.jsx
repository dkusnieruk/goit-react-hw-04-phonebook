import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  handleRemove = id => {
    const newList = this.state.contacts.filter(item => item.id !== id);

    this.setState(
      {
        contacts: newList,
      },
      this.updateStorage
    );
  };

  handleInputChange = (event) =>{
    const {value} = event.target
    this.setState({
      filter:value
    },
    this.updateStorage)
  }

  handleSubmit = event => {
    event.preventDefault();
    const object = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };
    
    this.setState(
      {
      filter:""  
      },
      this.updateStorage
    );

    const checkArray = this.state.contacts.filter(contact => {
      const filterArray = contact.name.toLowerCase();
      const filterName = object.name.toLowerCase();

      if (filterArray.includes(filterName)) {
        return true;
      } else return false;
    });

    if (checkArray.length > 0) {
      alert(`Masz już kontakt o imieniu : ${object.name}`);
    } else this.state.contacts.push(object);
      event.target.reset()
  };
  handleSearch = () => {
    this.setState({
      contacts: this.state.contacts,
      filter: this.state.filter,
    });
  };

  updateStorage() {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  componentDidMount() {
    const state = localStorage.getItem('state');
    if (state) this.setState(JSON.parse(state));
  }

  render() {
    const { contacts, name, filter, number } = this.state;

    return (
      <>
        <ContactForm
          name={name}
          number={number}
          onSubmit={this.handleSubmit}
        />
        <Filter
          contacts={contacts}
          filter={filter}
          handleSearch={this.handleSearch}
          handleChange={this.handleInputChange}
        />
        <ContactList
          contacts={contacts}
          filter={filter}
          name={name}
          handleRemove={this.handleRemove}
        />
      </>
    );
  }
}

export default App;
