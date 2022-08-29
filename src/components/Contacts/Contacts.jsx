import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import UserContacts from '../Contacts/UserContacts';

export const Contacts = () => {
  return (
    <div>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <UserContacts />
    </div>
  );
};
