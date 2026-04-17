import { useState } from "react";
import { FiUser, FiPhone, FiEdit2 } from "react-icons/fi";

const initialFormState = { name: "", phone: "", message: "" };

function ContactForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const nextErrors = {};
    const digitsOnlyPhone = formState.phone.replace(/\D/g, "");
    if (!formState.name.trim()) nextErrors.name = "Name is required.";
    if (!formState.phone.trim()) nextErrors.phone = "Phone number is required.";
    else if (digitsOnlyPhone.length !== 10) nextErrors.phone = "Enter a valid 10-digit phone number.";
    if (!formState.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: undefined }));
    setSuccessMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) return setErrors(nextErrors);
    setErrors({});
    setFormState(initialFormState);
    setSuccessMessage("Thanks — we received your message. We'll be in touch shortly.");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label>
        <span>Full Name</span>
        <div className="input-with-icon">
          <FiUser />
          <input type="text" name="name" value={formState.name} onChange={handleChange} placeholder="Full name" aria-invalid={Boolean(errors.name)} />
        </div>
        {errors.name && <small className="field-error">{errors.name}</small>}
      </label>

      <label>
        <span>Phone Number</span>
        <div className="input-with-icon">
          <FiPhone />
          <input type="tel" name="phone" value={formState.phone} onChange={handleChange} placeholder="10-digit mobile" inputMode="numeric" aria-invalid={Boolean(errors.phone)} />
        </div>
        {errors.phone && <small className="field-error">{errors.phone}</small>}
      </label>

      <label>
        <span>Message</span>
        <div className="input-with-icon textarea-icon">
          <FiEdit2 />
          <textarea name="message" value={formState.message} onChange={handleChange} placeholder="Briefly describe your requirement" rows="5" aria-invalid={Boolean(errors.message)} />
        </div>
        {errors.message && <small className="field-error">{errors.message}</small>}
      </label>

      <button type="submit" className="contact-submit-button">Send Message</button>

      {successMessage && <div className="contact-success" role="status" aria-live="polite">{successMessage}</div>}
    </form>
  );
}

export default ContactForm;