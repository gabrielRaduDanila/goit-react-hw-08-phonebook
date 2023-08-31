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

const Contacts = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const contacts = useSelector(selectContacts);
  const { isOpen, modalFor } = useModal();
  return (
    <main className="contacts-main">
      <AddContact />
      {contacts.length > 0 && <ContactList />}
      {isOpen && modalFor === 'delete' && <Modal />}
      {isOpen && modalFor === 'edit' && <EditModal />}
    </main>
  );
};
export default Contacts;
