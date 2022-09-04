// https://connections-api.herokuapp.com/docs/#/

import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { Contacts } from '../Pages/Contacts';
import { Register } from 'Pages/Register';
import { Login } from 'Pages/Login';

import { Navigation } from './Navigation/Navigation';
import { useCurrentUserQuery } from 'redux/userApi';

import PrivateRoutes from './PrivateRoutes';

export const App = () => {
  const { token } = useSelector(state => state.user);
  useCurrentUserQuery(undefined, {
    skip: !token,
  });

  return (
    <>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/register"
            element={token ? <Navigate to="/contacts" /> : <Register />}
          />
          <Route
            path="/login"
            element={token ? <Navigate to="/contacts" /> : <Login />}
          />

          <Route path="/contacts" element={<PrivateRoutes />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
