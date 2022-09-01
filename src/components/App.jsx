import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

import { Contacts } from '../Pages/Contacts';
import { Register } from 'Pages/Register';
import { Login } from 'Pages/Login';

import { Navigation } from './Navigation/Navigation';
import { useCurrentUserQuery } from 'redux/userApi';

// const Register = lazy(() => import('Pages/Register'));
// const Login = lazy(() => import('Pages/Login'));
// const Contacts = lazy(() => import('Pages/Contacts'));

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
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
          {/* <Route path="/usermenu" element={<UserMenu />} /> */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </Suspense>
    </>
  );
};
