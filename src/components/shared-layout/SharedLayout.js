import './SharedLayout.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { useAuth } from 'hooks';
import Loading from 'components/loading/Loading';
import AuthNav from 'components/auth-nav/AuthNav';
import UserMenu from 'components/user-menu/UserMenu';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="container">
      <header className="phonebookHeader">
        <NavLink to="/">
          <AiOutlineHome className="homeIcon" />
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
