function ContactCard({ contact, onEdit, onDelete }) {
  return (
    <div className="contact-card">
      <div className="avatar">{contact.name.charAt(0).toUpperCase()}</div>

      <div className="contact-info">
        <h3>{contact.name}</h3>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>

      <div className="actions">
        <button className="edit-btn" onClick={() => onEdit(contact)}>
          Edit
        </button>

        <button className="delete-btn" onClick={() => onDelete(contact.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
