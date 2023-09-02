import './contacts.css';
import AddContact from 'components/add-contact/AddContact';
import { selectContacts } from 'features/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from 'hooks/useModal';
import { useEffect } from 'react';
import { fetchContacts } from 'features/auth/operations';
import { selectFilter } from 'features/auth/selectors';
import { useLoadingAndError } from 'hooks/useLoadingAndError';
import { lazy } from 'react';

const Modal = lazy(() => import('components/modal/Modal'));
const EditModal = lazy(() => import('components/modal/EditModal'));
const Filter = lazy(() => import('components/filter/Filter'));
const ContactList = lazy(() => import('components/contacts-list/ContactsList'));
const ErrorMessage = lazy(() =>
  import('components/error-message/ErrorMessage')
);
const LoadingSpinner = lazy(() =>
  import('components/loading-spinner/LoadingSpinner')
);

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const { isError, isLoading } = useLoadingAndError();

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
      {isError && <ErrorMessage />}
      {isLoading && <LoadingSpinner />}
    </main>
  );
};
export default Contacts;
