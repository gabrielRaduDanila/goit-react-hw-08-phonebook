import style from './SharedLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from 'components/loading/Loading';
import { AiOutlineHome } from 'react-icons/ai';
import { useAuth } from 'hooks';
import AuthNav from 'components/auth-nav/AuthNav';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={style.container}>
      <header className={style.phonebookHeader}>
        <NavLink to="/">
          <AiOutlineHome className={style.homeIcon} />
        </NavLink>
        {!isLoggedIn && <AuthNav />}

        {/* <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav> */}
      </header>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
