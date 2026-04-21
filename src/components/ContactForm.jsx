import { useState } from "react";
import { useAppPreferences } from "../context/AppPreferencesContext";

const initialFormState = {
  name: "",
  phone: "",
  service: "",
  message: "",
};

const contactFormCopy = {
  en: {
    name: "Name",
    phone: "Phone",
    message: "Message",
    namePlaceholder: "Your full name",
    phonePlaceholder: "10-digit phone number",
    messagePlaceholder: "Briefly describe your AC requirement",
    submit: "Send Message",
    success: "Thanks for reaching out. Our team will contact you shortly.",
    errors: {
      nameRequired: "Name is required.",
      phoneRequired: "Phone number is required.",
      phoneInvalid: "Enter a valid 10-digit phone number.",
      messageRequired: "Message is required.",
    },
  },
  hi: {
    name: "नाम",
    phone: "फ़ोन",
    message: "संदेश",
    namePlaceholder: "अपना पूरा नाम लिखें",
    phonePlaceholder: "10 अंकों का फ़ोन नंबर",
    messagePlaceholder: "अपनी एसी आवश्यकता संक्षेप में बताएं",
    submit: "संदेश भेजें",
    success: "धन्यवाद! हमारी टीम जल्द आपसे संपर्क करेगी।",
    errors: {
      nameRequired: "नाम आवश्यक है।",
      phoneRequired: "फ़ोन नंबर आवश्यक है।",
      phoneInvalid: "सही 10 अंकों का फ़ोन नंबर दर्ज करें।",
      messageRequired: "संदेश आवश्यक है।",
    },
  },
  te: {
    name: "Peru",
    phone: "Phone",
    message: "Message",
    namePlaceholder: "Mee poorthi peru",
    phonePlaceholder: "10-digit phone number",
    messagePlaceholder: "Mee AC requirement gurinchi short ga rayandi",
    submit: "Message Pampandi",
    success: "Dhanyavadalu! Maa team tondaralo mimmalni contact chestundi.",
    errors: {
      nameRequired: "Peru avasaram.",
      phoneRequired: "Phone number avasaram.",
      phoneInvalid: "Sariyana 10-digit phone number ivvandi.",
      messageRequired: "Message avasaram.",
    },
  },
};

function ContactForm() {
  const { language } = useAppPreferences();
  const copy = contactFormCopy[language] ?? contactFormCopy.en;

  const [formState, setFormState] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const nextErrors = {};
    const digitsOnlyPhone = formState.phone.replace(/\D/g, "");

    if (!formState.name.trim()) {
      nextErrors.name = copy.errors.nameRequired;
    }

    if (!formState.phone.trim()) {
      nextErrors.phone = copy.errors.phoneRequired;
    } else if (digitsOnlyPhone.length !== 10) {
      nextErrors.phone = copy.errors.phoneInvalid;
    }

    if (!formState.service) {
      nextErrors.service = "Please select a service option.";
    }

    if (!formState.message.trim()) {
      nextErrors.message = copy.errors.messageRequired;
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
    setSuccessMessage(copy.success);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label>
        <span>{copy.name}</span>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder={copy.namePlaceholder}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <small className="field-error">{errors.name}</small>}
      </label>

      <label>
        <span>{copy.phone}</span>
        <input
          type="tel"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          placeholder={copy.phonePlaceholder}
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
        <span>{copy.message}</span>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder={copy.messagePlaceholder}
          rows="5"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <small className="field-error">{errors.message}</small>}
      </label>

      <button type="submit" className="contact-submit-button">
        {copy.submit}
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