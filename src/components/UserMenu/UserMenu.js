import { useSelector } from 'react-redux';
import { useLogoutMutation } from 'redux/userApi';

export const UserMenu = () => {
  const [logout] = useLogoutMutation();
  const { email, name } = useSelector(state => state.user);

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <>
      <p>
        Hi: {name}, Your email: {email}
      </p>
      <button onClick={handleLogoutClick}>Logout</button>
    </>
  );
};
