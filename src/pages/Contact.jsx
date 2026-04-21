import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { useAppPreferences } from "../context/AppPreferencesContext";
import { getLocalizedSiteContent } from "../data/localizedSiteContent";

const contactPageCopy = {
  en: {
    eyebrow: "Contact Us",
    title: "Send an inquiry and get a quick response from Hyderabad AC Services",
    description:
      "Share your requirement and our team will connect with you to discuss installation, maintenance, or repair support.",
    quickInquiryBadge: "Quick Inquiry",
    quickInquiryTitle: "Tell us what you need",
    quickInquiryDescription: "Use the form below for a fast callback from our support team.",
    businessInfoAria: "Business information",
    businessInfoBadge: "Business Info",
    businessName: "Hyderabad AC Services",
    businessDescription: "Trusted AC installation, maintenance, and repair services in Hyderabad.",
    phoneLabel: "Phone",
    locationLabel: "Location",
    workingHoursLabel: "Working Hours",
    trustTitle: "Why customers call us",
    trustPoints: [
      "Prompt response for residential and commercial requests",
      "Professional service with clear communication",
      "Flexible support for maintenance and emergency repairs",
    ],
  },
  hi: {
    eyebrow: "संपर्क करें",
    title: "अपनी पूछताछ भेजें और हैदराबाद एसी सर्विसेज से जल्दी जवाब पाएं",
    description: "अपनी आवश्यकता साझा करें। इंस्टॉलेशन, मेंटेनेंस और रिपेयर सहायता के लिए हमारी टीम आपसे संपर्क करेगी।",
    quickInquiryBadge: "त्वरित पूछताछ",
    quickInquiryTitle: "बताएं आपको क्या चाहिए",
    quickInquiryDescription: "तेज़ कॉल-बैक के लिए नीचे दिया गया फॉर्म भरें।",
    businessInfoAria: "व्यवसाय जानकारी",
    businessInfoBadge: "व्यवसाय जानकारी",
    businessName: "हैदराबाद एसी सर्विसेज",
    businessDescription: "हैदराबाद में भरोसेमंद एसी इंस्टॉलेशन, मेंटेनेंस और रिपेयर सेवाएं।",
    phoneLabel: "फ़ोन",
    locationLabel: "स्थान",
    workingHoursLabel: "कार्य समय",
    trustTitle: "ग्राहक हमें क्यों कॉल करते हैं",
    trustPoints: [
      "रिहायशी और कमर्शियल रिक्वेस्ट पर तेज़ प्रतिक्रिया",
      "पेशेवर सेवा और स्पष्ट संवाद",
      "मेंटेनेंस और इमरजेंसी रिपेयर के लिए लचीला समर्थन",
    ],
  },
  te: {
    eyebrow: "Sampradinchandi",
    title: "Inquiry pampandi, Hyderabad AC Services nundi tondaraga response pondandi",
    description: "Mee requirement share cheyyandi. Installation, maintenance leka repair support kosam maa team meetho connect avutundi.",
    quickInquiryBadge: "Quick Inquiry",
    quickInquiryTitle: "Mee avasaram emito cheppandi",
    quickInquiryDescription: "Fast callback kosam kinda form fill cheyyandi.",
    businessInfoAria: "Business information",
    businessInfoBadge: "Business Info",
    businessName: "Hyderabad AC Services",
    businessDescription: "Hyderabad lo trusted AC installation, maintenance mariyu repair services.",
    phoneLabel: "Phone",
    locationLabel: "Sthanam",
    workingHoursLabel: "Working Hours",
    trustTitle: "Customers enduku maaku call chestaru",
    trustPoints: [
      "Residential mariyu commercial requests ki prompt response",
      "Professional service mariyu clear communication",
      "Maintenance mariyu emergency repairs ki flexible support",
    ],
  },
};

function ContactPage() {
  const { language } = useAppPreferences();
  const siteContent = getLocalizedSiteContent(language);
  const copy = contactPageCopy[language] ?? contactPageCopy.en;

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
      </section>

      <section className="contact-section contact-section--page">
        <div className="contact-grid">
          <div className="contact-card contact-card--form">
            <div className="contact-card-header">
              <div className="contact-badge">{copy.quickInquiryBadge}</div>
              <h3>{copy.quickInquiryTitle}</h3>
              <p>{copy.quickInquiryDescription}</p>
            </div>

            <ContactForm />
          </div>

          <aside className="contact-card contact-card--info" aria-label={copy.businessInfoAria}>
            <div className="contact-card-header">
              <div className="contact-badge contact-badge--alt">{copy.businessInfoBadge}</div>
              <h3>{copy.businessName}</h3>
              <p>{copy.businessDescription}</p>
            </div>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.02-.24c1.1.37 2.29.57 3.52.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1c0 1.23.2 2.42.57 3.52a1 1 0 0 1-.24 1.02L6.6 10.8Z" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <span>{copy.phoneLabel}</span>
                  <strong>{siteContent.phoneDisplay}</strong>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.3A2.3 2.3 0 1 1 12 6.7a2.3 2.3 0 0 1 0 4.6Z" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <span>{copy.locationLabel}</span>
                  <strong>{siteContent.location}</strong>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 2h2v2H7V2Zm8 0h2v2h-2V2ZM5 6h14a1 1 0 0 1 1 1v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a1 1 0 0 1 1-1Zm0 4h14V8H5v2Zm0 3v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6H5Z" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <span>{copy.workingHoursLabel}</span>
                  <strong>{siteContent.workingHours}</strong>
                </div>
              </div>
            </div>

            <div className="contact-trust-box">
              <h4>{copy.trustTitle}</h4>
              <ul>
                {copy.trustPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;