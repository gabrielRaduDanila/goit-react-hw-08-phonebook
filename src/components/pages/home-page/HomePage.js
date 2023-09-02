import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import { useLoadingAndError } from 'hooks/useLoadingAndError';
import ErrorMessage from 'components/error-message/ErrorMessage';
import LoadingSpinner from 'components/loading-spinner/LoadingSpinner';

const HomePage = () => {
  const { isLoggedIn, user } = useAuth();
  const { isError, isLoading } = useLoadingAndError();
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
      {isError && <ErrorMessage />}
      {isLoading && <LoadingSpinner />}
    </main>
  );
};
export default HomePage;
