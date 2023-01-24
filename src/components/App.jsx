import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';

function App () {
  let [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');
  
  const handleRemove = id => {
    const newList = contacts.filter(item => item.id !== id);

    setContacts(newList);
    // updateStorage()
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setFilter(value);

  };


  const handleSearch = () => {
    setContacts(contacts);
    setFilter(filter);
  };

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
    setContacts(contacts)
    setFilter('')
  }, [contacts]);


  return (
    <>
      <ContactForm 
      contacts={contacts}
      setContacts={setContacts}
      filter={filter}
      handleChange={handleInputChange}
      setFilter={setFilter}
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
        handleRemove={handleRemove}
      />
    </>
  );
}

export default App;
