import css from '../ContactList/contactList.module.css';
import propTypes from 'prop-types';

function ContactItem(props) {
  return (
    <li className={css.singleItem} key={props.contact.id}>
      {props.contact.name}: {props.contact.number}
      <button
        className={css.removeButton}
        type="button"
        id={props.contact.id}
        onClick={() => props.handleRemove(props.contact.id)}
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
