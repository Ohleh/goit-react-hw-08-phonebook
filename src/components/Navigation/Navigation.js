import { NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink to="/register"> Register </NavLink>
      <NavLink to="/login"> Login </NavLink>
      <NavLink to="/contacts"> Contacts </NavLink>
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
};
