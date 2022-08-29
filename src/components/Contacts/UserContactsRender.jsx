import { useRemoveContactsMutation } from 'redux/phoneApi';

const ContactsRender = ({ contact: [id, name, number] }) => {
  const [removeContacts, { isLoading }] = useRemoveContactsMutation();

  return (
    <li key={id}>
      {name}: {number}
      <button
        type="button"
        onClick={() => removeContacts(id)}
        disabled={isLoading}
      >
        dell
      </button>
    </li>
  );
};

export default ContactsRender;
