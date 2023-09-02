// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './shared-layout/SharedLayout';
import HomePage from './pages/home-page/HomePage';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { RestrictedRoute } from './RestrictedRoute';
import Contacts from './pages/contacts/Contacts';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'features/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks';
import ErrorPage from './pages/error-page/ErrorPage';
import Loading from './loading/Loading';

export const App = () => {
  // const store = useSelector(store => store);
  // console.log(store);
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className="loading-container">
      <Loading />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/register" component={<Contacts />} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
