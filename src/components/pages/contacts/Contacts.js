import { useEffect } from 'react';
import './contacts.css';
import { fetchContacts } from 'features/auth/operations';
import { useDispatch } from 'react-redux';
import AddContact from 'components/add-contact/AddContact';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <div>
      <AddContact />
    </div>
  );
};
export default Contacts;
