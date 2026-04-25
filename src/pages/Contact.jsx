import { FiClock, FiMapPin, FiPhoneCall } from "react-icons/fi";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { useAppPreferences } from "../context/AppPreferencesContext";
import { getLocalizedSiteContent } from "../data/localizedSiteContent";
import "./Contact.css";

const contactPageCopy = {
  en: {
    eyebrow: "CONTACT US",
    title: "Send an inquiry and get a quick response from Hyderabad AC Services",
    description: "Share your requirement and our team will connect with you to discuss installation, maintenance, or repair support.",
    inquiryBadge: "Quick Inquiry",
    inquiryTitle: "Tell us what you need",
    inquiryDescription: "Use the form below for a fast callback from our support team.",
    businessBadge: "Business Info",
    businessTitle: "Hyderabad AC Services",
    businessDescription: "Trusted AC installation, maintenance, and repair services in Hyderabad.",
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
    inquiryBadge: "त्वरित पूछताछ",
    inquiryTitle: "बताएं आपको क्या चाहिए",
    inquiryDescription: "तेज़ कॉल-बैक के लिए नीचे दिया गया फॉर्म भरें।",
    businessBadge: "व्यवसाय जानकारी",
    businessTitle: "हैदराबाद एसी सर्विसेज",
    businessDescription: "हैदराबाद में भरोसेमंद एसी इंस्टॉलेशन, मेंटेनेंस और रिपेयर सेवाएं।",
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
    inquiryBadge: "Quick Inquiry",
    inquiryTitle: "Mee avasaram emito cheppandi",
    inquiryDescription: "Fast callback kosam kinda form fill cheyyandi.",
    businessBadge: "Business Info",
    businessTitle: "Hyderabad AC Services",
    businessDescription: "Hyderabad lo trusted AC installation, maintenance mariyu repair services.",
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
  const businessDescription = siteContent.companyDescription?.[0] ?? copy.businessDescription;

  return (
    <div className="contact-page contact-page--clean">
      <section className="contact-hero contact-hero--clean">
        <span className="contact-hero__eyebrow">{copy.eyebrow}</span>
        <h1 className="contact-hero__title">{copy.title}</h1>
        <p className="contact-hero__description">{copy.description}</p>
      </section>

      <section className="contact-section contact-section--page contact-section--clean">
        <div className="contact-grid contact-grid--clean">
          <section className="contact-card contact-card--form">
            <div className="contact-card-header">
              <div className="contact-badge">{copy.inquiryBadge}</div>
              <h3>{copy.inquiryTitle}</h3>
              <p>{copy.inquiryDescription}</p>
            </div>

            <ContactForm />
          </section>

          <aside className="contact-card contact-card--info" aria-label="Contact information">
            <div className="contact-card-header">
              <div className="contact-badge contact-badge--alt">{copy.businessBadge}</div>
              <h3>{copy.businessTitle}</h3>
              <p>{businessDescription}</p>
            </div>

            <div className="contact-info-list contact-info-list--clean">
              <div className="contact-info-item contact-info-item--clean">
                <span className="contact-info-icon" aria-hidden="true"><FiPhoneCall /></span>
                <div>
                  <span>PHONE</span>
                  <strong><a href={siteContent.phoneLink}>{siteContent.phoneDisplay}</a></strong>
                </div>
              </div>

              <div className="contact-info-item contact-info-item--clean">
                <span className="contact-info-icon" aria-hidden="true"><FiMapPin /></span>
                <div>
                  <span>LOCATION</span>
                  <strong>{siteContent.location}</strong>
                </div>
              </div>

              <div className="contact-info-item contact-info-item--clean">
                <span className="contact-info-icon" aria-hidden="true"><FiClock /></span>
                <div>
                  <span>WORKING HOURS</span>
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