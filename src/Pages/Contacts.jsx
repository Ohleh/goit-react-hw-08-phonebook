import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import UserContacts from '../components/Contacts/UserContacts';
import { UserMenu } from '../components/UserMenu/UserMenu';

export const Contacts = () => {
  return (
    <>
      <UserMenu />
      <div>
        <h2>Phonebook</h2>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <UserContacts />
      </div>
    </>
  );
};
