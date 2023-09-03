import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'features/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks';
<<<<<<< HEAD
import SharedLayout from './shared-layout/SharedLayout';
// import HomePage from './pages/home-page/HomePage';
// import Register from './pages/register/Register';
// import Login from './pages/login/Login';
// import Contacts from './pages/contacts/Contacts';
// import ErrorPage from './pages/error-page/ErrorPage';
import Loading from './loading/Loading';

=======
import Loading from './loading/Loading'
>>>>>>> da9d52faf3093bae0ea960aed31f3804162faf53
const HomePage = lazy(() => import('./pages/home-page/HomePage'));
const Register = lazy(() => import('./pages/register/Register'));
const Login = lazy(() => import('./pages/login/Login'));
const Contacts = lazy(() => import('./pages/contacts/Contacts'));
// const SharedLayout = lazy(() => import('./shared-layout/SharedLayout'));
const ErrorPage = lazy(() => import('./pages/error-page/ErrorPage'));
<<<<<<< HEAD
// const Loading = lazy(() => import('./loading/Loading'));
=======
//const Loading = lazy(() => import('./loading/Loading'));
>>>>>>> da9d52faf3093bae0ea960aed31f3804162faf53

export const App = () => {
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
