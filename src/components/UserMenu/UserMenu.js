import { useSelector } from 'react-redux';

export const UserMenu = () => {
  const { email, name } = useSelector(state => state.user);

  return (
    <>
      <p>
        Hi: {name}, Your email: {email}
      </p>

      <button type="button">Logout</button>
    </>
  );
};
