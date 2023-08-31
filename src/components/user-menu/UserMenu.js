import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'features/auth/selectors';
import { logOut } from 'features/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="user-menu">
      <p className="user-message">Welcome, {user.name}</p>
      <button
        type="button"
        className="logOut-btn"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
