import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

function App () {
  let [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);


  const [filter, setFilter] = useState(''); 
  const [newContact, setNewContact] = useState()
  const handleRemove = id => {
    const newList = contacts.filter(item => item.id !== id);

    setContacts(newList);
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setFilter(value);

  };


  const handleSearch = () => {
    setFilter(filter);
  };

  useEffect(() => {
  localStorage.setItem(`contact`, JSON.stringify(contacts))
  }, [contacts, newContact]);

  const onSubmit=((event)=>{
    event.preventDefault()
 const checkArray = contacts.filter(contact => {
      const filterArray = contact.name.toLowerCase();
      const filterName = newContact.name.toLowerCase();

      if (filterArray.includes(filterName)) {
        return true;
      } else return false;
    });

    if (checkArray.length>0) {
      alert(`Masz już kontakt o imieniu : ${newContact.name}`);
    } else  
            setContacts([...contacts, newContact])
            event.target.reset();
        
      })

      

  return (
    <>
      <ContactForm 
      contacts={contacts}
      setContacts={setContacts}
      filter={filter}
      handleChange={handleInputChange}
      setFilter={setFilter}
      onSubmit={onSubmit}
      setNewContact={setNewContact}
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
