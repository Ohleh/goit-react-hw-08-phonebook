import { useState } from 'react';

import { nanoid } from 'nanoid';
import { useGetContactsQuery } from 'redux/userApi';
import { useAddContactsMutation } from 'redux/userApi';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');
  const {
    data,
    // error, isLoading
  } = useGetContactsQuery();
  const [addContacts] = useAddContactsMutation();

  const handleChange = ev => {
    switch (ev.target.name) {
      case 'name':
        setName(ev.target.value);
        break;
      case 'number':
        setPhone(ev.target.value);
        break;
      default:
        return;
    }
  };

  const formSubmit = ev => {
    ev.preventDefault();

    if (
      data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      return alert(`${name} - is already exists`);
    }

    addContacts(JSON.stringify({ name, number }));
    console.log(JSON.stringify({ name, number }));

    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor={nanoid()}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor={nanoid()}>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default Form;
