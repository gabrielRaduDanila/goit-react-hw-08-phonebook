import style from './SharedLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from 'components/loading/Loading';
import { AiOutlineHome } from 'react-icons/ai';
import { useAuth } from 'hooks';
import AuthNav from 'components/auth-nav/AuthNav';
import UserMenu from 'components/user-menu/UserMenu';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={style.container}>
      <header className={style.phonebookHeader}>
        <NavLink to="/">
          <AiOutlineHome className={style.homeIcon} />
        </NavLink>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
