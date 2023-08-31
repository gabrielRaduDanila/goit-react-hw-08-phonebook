import './Modal.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'features/modal/modalSlice';
import { useModal } from 'hooks/useModal';
import { selectContacts } from 'features/auth/selectors';
import { useRef } from 'react';
import { editContact } from 'features/auth/operations';

const EditModal = () => {
  const dispatch = useDispatch();
  const { id, contactName } = useModal();
  const contacts = useSelector(selectContacts);
  const contact = contacts.find(contact => contact.id === id);
  const nameInput = useRef();
  const numberInput = useRef();
  const handleEdit = () => {
    const newName = nameInput.current.value;
    const newNumber = numberInput.current.value;
    const namePattern =
      /^[a-zA-Zа-яА-Я]+([' -]?[a-zA-Zа-яА-Я ]?[a-zA-Zа-яА-Я]*)*$/;
    const isNameValid = namePattern.test(newName);
    if (!isNameValid && newName.length > 0) {
      alert(nameInput.current.title);
      return;
    }
    const numberPattern = /^\+?[\d\s-]+$/;
    let isNumberValid = numberPattern.test(newNumber);
    if (!isNumberValid && newNumber.length > 0) {
      alert(numberInput.current.title);
      return;
    }
    const contact = {
      name: newName,
      number: newNumber,
    };
    dispatch(editContact({ id, contact }));
    dispatch(closeModal());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>
          Edit the <span className="edit-name">{contactName}</span> contact
        </h4>
        <form className="phonebookForm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            ref={nameInput}
            defaultValue={contact.name ? contact.name : 'unknown'}
          />
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            ref={numberInput}
            defaultValue={contact.number ? contact.number : 'unknown'}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn confirm-btn"
              onClick={handleEdit}
            >
              edit
            </button>
            <button
              type="button"
              className="btn clear-btn"
              style={{ backgroundColor: '#8b0000' }}
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
};
export default EditModal;
