import React from 'react';
import UserContactsRender from './UserContactsRender';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/userApi';

const Contacts = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const filter = useSelector(state => state.findContact.filter);

  const filteredContacts = filter
    ? data.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : data;

  // console.log('data', data);

  return (
    <div>
      {error && <p>Трясця, кіна не буде</p>}
      {isLoading ? (
        <p>Качаю кілобайти</p>
      ) : (
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <UserContactsRender key={id} contact={[id, name, number]} />
          ))}
        </ul>
      )}
    </div>
  );
};

Contacts.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};

export default Contacts;
