import css from '../ContactList/contactList.module.css';
import propTypes from 'prop-types';

function ContactItem({ contact, handleRemove }) {
  return (
    <li className={css.singleItem} key={contact.id}>
      {contact.name}: {contact.number}
      <button
        className={css.removeButton}
        type="button"
        id={contact.id}
        onClick={() => handleRemove(contact.id)}
      >
        X
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  index: propTypes.number,
  handleRemove: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      name: propTypes.string,
      number: propTypes.number,
    })
  ),
};

export default ContactItem;
