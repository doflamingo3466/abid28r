
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import dummyContacts from "./data/dummyContacts";
import "./App.css";

function App() {
  // Main array containing all saved contacts.
 const [contacts, setContacts] = useState([...dummyContacts]);

  // Stores the contact currently being edited.
  const [editContact, setEditContact] = useState(null);

  // Stores whatever the user types in the search box.
  const [search, setSearch] = useState("");

  // Stores the selected sorting order.
  const [sortOrder, setSortOrder] = useState("az");

  // Add a new contact or update an existing contact.
  function saveContact(contact) {
    if (editContact) {
      // Replace the old contact with the updated contact.
      const updatedContacts = contacts.map((item) =>
        item.id === editContact.id ? contact : item
      );

      setContacts(updatedContacts);
      setEditContact(null);
    } else {
      // Add a new contact to the original array.
      setContacts([...contacts, { ...contact, id: Date.now() }]);
    }
  }

  // Delete a contact by its ID.
  function deleteContact(id) {
    const updatedContacts = contacts.filter(
      (item) => item.id !== id
    );

    setContacts(updatedContacts);
  }

  // Select a contact for editing.
  function editSelectedContact(contact) {
    setEditContact(contact);
  }

  // Search contacts by name OR phone number.
  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone.includes(search)
    );
  });

  // Create a new sorted array without changing the original contacts.
  const sortedContacts = [...filteredContacts].sort((a, b) => {
    if (sortOrder === "az") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="app">


      <main className="container">

        <section className="intro">
        </section>

        <section className="content">

          <ContactForm
            onSave={saveContact}
            editContact={editContact}
            onCancel={() => setEditContact(null)}
          />

          <ContactList
            contacts={sortedContacts}
            totalContacts={contacts.length}
            search={search}
            setSearch={setSearch}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            onEdit={editSelectedContact}
            onDelete={deleteContact}
          />

        </section>

      </main>

      <footer>
        CONTACT DIRECTORY <span>© 2026</span>
      </footer>

    </div>
  );
}

export default App;
