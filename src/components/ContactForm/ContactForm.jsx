import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from '../ContactForm/contactForm.module.css';
import propTypes from 'prop-types';

function ContactForm(props) {
  const [name, setName] = useState();
  const [number, setNumber] = useState();

  const newContact = {
    id: nanoid(),
    name: name,
    number: number,
  };

  return (
    <>
      <form className={css.form} onSubmit={props.onSubmit}>
        <label className={css.label}>
          Name
          <input
            onChange={event => {
              setName(event.target.value);
            }}
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
            onChange={event => {
              setNumber(event.target.value);
            }}
            className={css.input}
            type="tel"
            name="number"
            placeholder="Add Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button
          className={css.button}
          type="submit"
          onClick={() => {
            props.setNewContact(newContact);
          }}
        >
          Add Contact
        </button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onChange: propTypes.func,
  onSubmit: propTypes.func,
};

export default ContactForm;
