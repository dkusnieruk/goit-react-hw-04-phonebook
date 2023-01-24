import { useState } from 'react';
import {nanoid} from 'nanoid'
import css from '../ContactForm/contactForm.module.css';
import propTypes from 'prop-types';

function ContactForm(props) {
  const [name, setName] =useState()
  const [number, setNumber] = useState()

  return (
    <>
      <form className={css.form} onSubmit={((event)=>{
        event.preventDefault()
        const newContact = {
          id : nanoid(),
          name:name,
          number:number
        }

    const checkArray = props.contacts.filter(contact => {
      const filterArray = contact.name.toLowerCase();
      const filterName = newContact.name.toLowerCase();

      if (filterArray.includes(filterName)) {
        return true;
      } else return false;
    });

    if (checkArray.length>0) {
      alert(`Masz już kontakt o imieniu : ${newContact.name}`);
    } else  props.contacts.push(newContact);
            props.setFilter('')
            props.setContacts(props.contacts)
            event.target.reset();
        console.log(newContact);
        console.log(props.contacts);
      })

      }>
        <label className={css.label}>
          Name
          <input
            onChange={((event)=>{
              setName(event.target.value)
            }) }
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Add contact"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            onChange={((event)=>{
              setNumber(event.target.value)
            })}
            className={css.input}
            type="tel"
            name="number"
            placeholder="Add Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add Contact
        </button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  name: propTypes.string,
  number: propTypes.string,
  onChange: propTypes.func,
  onSubmit: propTypes.func,
};

export default ContactForm;
