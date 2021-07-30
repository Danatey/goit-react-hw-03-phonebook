import PropTypes from 'prop-types';

import Button from "../Button";

import './ContactsListItem.scss'

const ContactsListItem = ({ onDelete, contacts }) => (
  <>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id} className="contact-item">
          {name}: {number}
          <Button
            btnType="button"
            btnName="Delete"
            onClick={() => onDelete(id)}
            classButton="contact-button"
          />
        </li>
      );
    })}
  </>
);

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
};

export default ContactsListItem