import css from '../ContactList/contactList.module.css';
import propTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';

function ContactList(props) {
  return (
    <ul className={css.listMain}>
      {props.contacts
        .filter(contact => {
          const searchType = props.filter.toLowerCase();
          const contactType = contact.name.toLowerCase();

          return contactType.includes(searchType);
        })
        .map((contact, index) => {
          return (
            <ContactItem
              contact={contact}
              index={index}
              handleRemove={props.handleRemove}
              key={index}
            />
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  contact: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      name: propTypes.string,
      number: propTypes.number,
    })
  ),
  filter: propTypes.string,
  handleRemove: propTypes.func,
};
export default ContactList;
