import { useState } from "react";

const initialFormState = {
  name: "",
  phone: "",
  service: "",
  message: "",
};

function ContactForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const nextErrors = {};
    const digitsOnlyPhone = formState.phone.replace(/\D/g, "");

    if (!formState.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!formState.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (digitsOnlyPhone.length !== 10) {
      nextErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formState.service) {
      nextErrors.service = "Please select a service option.";
    }

    if (!formState.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((currentState) => ({
      ...currentState,
      [name]: value,
    }));
    setSuccessMessage("");
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSuccessMessage("");
      return;
    }

    setErrors({});
    setFormState(initialFormState);
    setSuccessMessage("Thanks for reaching out. Our team will contact you shortly.");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Your full name"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <small className="field-error">{errors.name}</small>}
      </label>

      <label>
        <span>Phone</span>
        <input
          type="tel"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          placeholder="10-digit phone number"
          inputMode="numeric"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone && <small className="field-error">{errors.phone}</small>}
      </label>

      <label>
        <span>Select one option</span>
        <select
          name="service"
          value={formState.service}
          onChange={handleChange}
          aria-invalid={Boolean(errors.service)}
        >
          <option value="">Select one option</option>
          <option value="Ac Repair">Ac Repair</option>
          <option value="Ac Services">Ac Services</option>
          <option value="Ac Installation">Ac Installation</option>
          <option value="Ac Uninstallation">Ac Uninstallation</option>
          <option value="Amc's">Amc's</option>
          <option value="Exhaust Ducting">Exhaust Ducting</option>
        </select>
        {errors.service && <small className="field-error">{errors.service}</small>}
      </label>

      <label className="contact-form-message">
        <span>Message</span>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Briefly describe your AC requirement"
          rows="5"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <small className="field-error">{errors.message}</small>}
      </label>

      <button type="submit" className="contact-submit-button">
        Send Message
      </button>

      {successMessage && (
        <div className="contact-success" role="status" aria-live="polite">
          {successMessage}
        </div>
      )}
    </form>
  );
}

export default ContactForm;