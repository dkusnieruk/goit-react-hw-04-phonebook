import {useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';

function App () {
  // constructor() {
  //   super();
  //   this.state = {
  //     contacts: [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       w{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ],
  //     filter: '',
  //   };
  // }
        let [contacts, setContacts] = useState(
          [
                  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
                ]
        )
        
       const [filter, setFilter] =useState('') 
       const [name, setName] = useState()
       const [number, setNumber] = useState()

  function handleRemove  (id) {
    const newList = contacts.filter(item => item.id !== id);

    setContacts(newList)
    updateStorage()
    // this.setState(
    //   {
    //     contacts: newList,
    //   },
    //   this.updateStorage
    // );
  };

  function handleInputChange  (event) {
    const {value} = event.target
    setFilter(value)
  }

  function handleSubmit ( event ) {
    event.preventDefault();
      setName(event.target.elements.name.value)
      setNumber(event.target.elements.number.value)
    const object = {
      id: nanoid(),
      name,
      number,
    };
    
    setFilter("")

    const checkArray = contacts.filter(contact => {
      const filterArray = contact.name.toLowerCase();
      const filterName = object.name.toLowerCase();

      if (filterArray.includes(filterName)) {
        return true;
      } else return false;
    });

    if (checkArray.length > 0) {
      alert(`Masz już kontakt o imieniu : ${object.name}`);
    } else contacts.push(object);
    updateStorage()
      event.target.reset()
    setFilter('')
    
    
  };

  function handleSearch  ()  {
    setContacts(contacts)
    setFilter(filter)

  };

  useEffect(()=>{    
    localStorage.setItem('contact', JSON.stringify(contacts))
  }, [contacts])

 
  function updateStorage() {
    localStorage.setItem('contact', JSON.stringify(contacts));
    
  }
    return (
      <>
        <ContactForm
          name={name}
          number={number}
          onSubmit={handleSubmit}
        />
        <Filter
          contacts={contacts}
          filter={filter}
          handleSearch={handleSearch}
          handleChange={handleInputChange}
        />
        <ContactList
          contacts={contacts}
          filter={filter}
          name={name}
          handleRemove={handleRemove}
        />
      </>
    );
  }


export default App;
