import { useDispatch } from 'react-redux';
import { findContact } from 'redux/phoneBookSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label>
        Find Contacts by name
        <br />
        <input
          type="text"
          onChange={e => dispatch(findContact(e.target.value))}
        />
      </label>
    </>
  );
};

export default Filter;
