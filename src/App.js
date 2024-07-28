import './App.css';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const handleAddOrUpdateContact = () => {
    if (!name || !phone) return;

    const newContact = { name, phone };
    if (editIndex !== null) {
      const updatedContacts = contacts.map((contact, index) =>
        index === editIndex ? newContact : contact
      );
      setContacts(updatedContacts);
      setEditIndex(null);
    } else {
      setContacts([...contacts, newContact]);
    }
    setName('');
    setPhone('');
  };

  const handleEditContact = (index) => {
    const contact = contacts[index];
    setName(contact.name);
    setPhone(contact.phone);
    setEditIndex(index);
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1 className='contact-manager'>Contact management</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={handleAddOrUpdateContact}>
          {editIndex !== null ? 'Save' : 'add'}
        </button>
      </div>
      <div className="contact-list">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-item">
            <span>{contact.name} - {contact.phone}</span>
            <button onClick={() => handleEditContact(index)}>Редактироват</button>
            <button onClick={() => handleDeleteContact(index)}>Удалит</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
