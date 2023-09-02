import './contacts.css';
import AddContact from 'components/add-contact/AddContact';
import ContactList from 'components/contacts-list/ContactsList';
import { selectContacts } from 'features/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from 'hooks/useModal';
import Modal from 'components/modal/Modal';
import EditModal from 'components/modal/EditModal';
import { useEffect } from 'react';
import { fetchContacts } from 'features/auth/operations';
import Filter from 'components/filter/Filter';
import { selectFilter } from 'features/auth/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const { isOpen, modalFor } = useModal();
  return (
    <main className="contacts-main">
      <AddContact />
      {contacts.length > 0 && <ContactList />}
      {contacts.length > 1 && <Filter />}
      {isOpen && modalFor === 'delete' && <Modal />}
      {isOpen && modalFor === 'edit' && <EditModal />}
      {filter && contacts.length === 0 && filter.length === 0 && (
        <h3>Add contacts to be displayed</h3>
      )}
    </main>
  );
};
export default Contacts;
