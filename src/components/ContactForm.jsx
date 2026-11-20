import { useEffect, useState } from "react";

function ContactForm({ onSave, editContact, onCancel }) {
  // Form fields are managed together in one object.
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // When editing, fill the form with the selected contact.
  useEffect(() => {
    if (editContact) {
      setForm({
        name: editContact.name,
        phone: editContact.phone,
        email: editContact.email,
      });
    } else {
      setForm({
        name: "",
        phone: "",
        email: "",
      });
    }
  }, [editContact]);

  // Update the correct field whenever the user types.
  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  // Submit the form to the main App component.
  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      ...form,
      id: editContact ? editContact.id : undefined,
    });

    // Clear the form after submitting.
    setForm({
      name: "",
      phone: "",
      email: "",
    });
  }

  return (
    <div className="form-box">
      <div className="section-title">
        <h2>{editContact ? "Edit Contact" : "New Contact"}</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name here"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={form.phone}
          onChange={handleChange}
          pattern="[0-9+ -]{7,20}"
          title="Enter a valid phone number using digits, spaces, + or -."
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <button type="submit" className="save-btn">
          {editContact ? "Update Contact" : "Add Contact"}
        </button>

        {editContact && (
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel Editing
          </button>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
