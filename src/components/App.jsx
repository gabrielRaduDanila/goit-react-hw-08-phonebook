// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './shared-layout/SharedLayout';
import HomePage from './pages/home-page/HomePage';
import Register from './pages/register/Register';
import { RestrictedRoute } from './RestrictedRoute';
import Contacts from './pages/contacts/Contacts';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'features/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(refreshUser()), [dispatch]);

  return (
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
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/register" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
