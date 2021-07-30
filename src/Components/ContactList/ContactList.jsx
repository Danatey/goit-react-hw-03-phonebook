import PropTypes from 'prop-types';

import './ContactList.scss'


const ContactsList = ({ children }) => (
  <ul className="contacts-list">{ children }</ul>
);

ContactsList.propTypes = {
  children: PropTypes.node,
};

export default ContactsList;