import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <main>
      {isLoggedIn ? (
        <p>
          {user.name}, to see the list of contacts go to the{' '}
          <Link to="/contacts">
            <span className={css.link}>contacts</span>
          </Link>
        </p>
      ) : (
        <p>
          hello, please{' '}
          <Link to="/login" className={css.link}>
            log in
          </Link>{' '}
          or{' '}
          <Link className={css.link} to="/register">
            register
          </Link>{' '}
        </p>
      )}
    </main>
  );
};
export default HomePage;
