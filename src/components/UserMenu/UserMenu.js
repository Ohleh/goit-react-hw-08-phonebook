import { useSelector } from 'react-redux';

export const UserMenu = () => {
  const { email } = useSelector(state => state.user);
  return (
    <>
      <p>user email: {email}</p>
      <button type="button">Logout</button>
    </>
  );
};
