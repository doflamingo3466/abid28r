
import ContactCard from "./ContactCard";

function ContactList({
  contacts,
  totalContacts,
  search,
  setSearch,
  sortOrder,
  setSortOrder,
  onEdit,
  onDelete
}) {
  return (
    <div className="list-box">

      <div className="section-title">
        <h2>Saved Contacts</h2>
      </div>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name or phone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Sorting dropdown */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="sort-select"
      >
        <option value="az">Name (A–Z)</option>
        <option value="za">Name (Z–A)</option>
      </select>

      {/* Show total number of saved contacts */}
      <p className="total-text">
        Total contacts: {totalContacts}
      </p>

      {/* Display contacts or an empty message */}
      {contacts.length === 0 ? (

        <div className="empty">
          {totalContacts === 0 ? (
            <>
              <p>No contacts added yet.</p>
              <span>Add your first contact using the form.</span>
            </>
          ) : (
            <>
              <p>No matching contacts.</p>
              <span>Try a different name or phone number.</span>
            </>
          )}
        </div>

      ) : (

        <div className="contact-list">

          {/* Display each contact card */}
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}

        </div>

      )}

    </div>
  );
}

export default ContactList;
