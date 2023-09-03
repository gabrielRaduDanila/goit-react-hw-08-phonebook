import { useDispatch, useSelector } from 'react-redux';
import './ContactList.css';
import {
  openModal,
  setId,
  setName,
  setModalFor,
} from 'features/modal/modalSlice';
import { selectContacts, selectFilter } from 'features/auth/selectors';
import { FiEdit2 } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { useState } from 'react';
import NoResultFound from 'components/no-result-found/NoResultFound';

const findFilteredContacts = (contacts, filter) => {
  const typedName = filter.toLowerCase();
  const filterdContact = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(typedName);
  });
  return filterdContact;
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const [closeNoResult, setCloseNoResult] = useState(true);

  const contactsToDisplay = filter
    ? findFilteredContacts(contacts, filter)
    : contacts;

  return filter &&
    filter.length > 0 &&
    contactsToDisplay.length === 0 &&
    closeNoResult ? (
    <NoResultFound setCloseNoResult={setCloseNoResult} />
  ) : (
    <div className="display-contacts">
      <h2>Contacts</h2>
      <ul className="contacts-list">
        {contactsToDisplay.map(contact => {
          const contactId = contact.id;
          return (
            <li key={contactId} className="contact">
              <p>
                <span>{capitalizeName(contact.name)}: </span>
                {contact.number}
              </p>
              <div className="btns-container">
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => {
                    dispatch(setId({ id: contactId }));
                    dispatch(setName({ name: contact.name }));
                    dispatch(setModalFor({ modalFor: 'delete' }));
                    dispatch(openModal());
                  }}
                >
                  <AiFillDelete className="delete-icon" />
                </button>
                <button
                  type="button"
                  className="edit-button"
                  onClick={() => {
                    dispatch(setId({ id: contactId }));
                    dispatch(setName({ name: contact.name }));
                    dispatch(setModalFor({ modalFor: 'edit' }));
                    dispatch(openModal());
                  }}
                >
                  <FiEdit2 className="delete-icon" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactList;

function capitalizeName(name) {
  const words = name.split(/[ -]/);
  const capitalizedWords = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const capitalizedName = capitalizedWords.join(' ');
  return capitalizedName;
}
