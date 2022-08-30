import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';

import { Contacts } from './Contacts/Contacts';
import { Navigation } from './Navigation/Navigation';
import { Login } from 'Pages/Login';
import { Register } from 'Pages/Register';
import { UserMenu } from '../components/UserMenu/UserMenu';

export const App = () => {
  return (
    <>
      <Navigation />
      <UserMenu />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/contacts" element={<Contacts />} />
          {/* <Route path="/usermenu" element={<UserMenu />} /> */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </Suspense>
    </>
  );
};
