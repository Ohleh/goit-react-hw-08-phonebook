import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import PrivateRoutes from './PrivateRoutes';

export const Navigation = () => {
  const { token } = useSelector(state => state.user);
  return (
    <>
      {/* <NavLink to="/">Home</NavLink> */}
      {!token ? <NavLink to="/register"> Register </NavLink> : null}

      {token ? (
        <NavLink to="/contacts"> Contacts </NavLink>
      ) : (
        <NavLink to="/login"> Login </NavLink>
      )}
      <hr />
    </>
  );
};
