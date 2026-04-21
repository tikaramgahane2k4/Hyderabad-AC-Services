import { Link } from "react-router-dom";
import { useAppPreferences } from "../context/AppPreferencesContext";
import ServiceRow from "./ServiceRow";

const services = [
  {
    key: "acRepair",
    image: "/images/AC repair.jpg",
    imageClass: "service-row-image--repair-focus",
    queryTitle: "AC Repair",
  },
  {
    key: "acInstallation",
    image: "/images/AC Installation.jpg",
    imageClass: "service-row-image--installation-focus",
    logoClass: "service-row-logo--installation-top",
    queryTitle: "AC Installation",
  },
  {
    key: "acService",
    image: "/images/AC Service & Maintenance.jpg",
    queryTitle: "AC Service",
  },
  {
    key: "hvacSystems",
    image: "/images/Exhaust Ducting.jpg",
    queryTitle: "Exhaust Ducting",
  },
];

const servicesCopy = {
  en: {
    kicker: "Our Services",
    title: "Reliable AC Solutions for Homes & Businesses",
    subtitle:
      "Expert installation, maintenance, and repair services tailored to your needs. We serve residential and commercial properties with precision and professionalism.",
    offeringsAria: "Service offerings",
    bookService: "Book This Service",
    pageCtaAria: "Book service call to action",
    pageCtaTitle: "Need Expert AC Service?",
    pageCtaButton: "Book Now",
    serviceDetails: {
      acRepair: {
        title: "AC Repair",
        description: "Rapid diagnostics and dependable repairs to minimize downtime for critical cooling infrastructure.",
        points: ["All brands supported", "Genuine spare parts", "Same-day service", "90-day warranty"],
      },
      acInstallation: {
        title: "AC Installation",
        description: "Precision installation for split, ducted, and central AC systems with optimal airflow planning.",
        points: ["Site assessment included", "Expert mounting and setup", "Leak-proof copper piping", "Performance testing"],
      },
      acService: {
        title: "AC Service & Maintenance",
        description: "Preventive maintenance that improves efficiency and extends unit lifespan for homes and businesses.",
        points: ["Deep coil and filter cleaning", "Gas pressure checks", "Drainage and airflow tuning", "Seasonal performance inspection"],
      },
      hvacSystems: {
        title: "HVAC Systems",
        description: "End-to-end HVAC planning, integration, and optimization for commercial and industrial spaces.",
        points: ["Commercial duct and airflow planning", "Zoned cooling architecture", "Energy optimization", "Long-term maintenance planning"],
      },
    },
  },
  hi: {
    kicker: "हमारी सेवाएं",
    title: "घर और व्यवसाय के लिए भरोसेमंद एसी समाधान",
    subtitle: "आपकी जरूरत के अनुसार इंस्टॉलेशन, मेंटेनेंस और रिपेयर सेवाएं। रिहायशी और कमर्शियल दोनों के लिए सहायता।",
    offeringsAria: "सेवा विकल्प",
    bookService: "यह सेवा बुक करें",
    pageCtaAria: "सेवा बुक करने का कॉल टू एक्शन",
    pageCtaTitle: "विशेषज्ञ एसी सेवा चाहिए?",
    pageCtaButton: "अभी बुक करें",
    serviceDetails: {
      acRepair: {
        title: "एसी रिपेयर",
        description: "तेज़ जांच और भरोसेमंद रिपेयर से डाउनटाइम कम होता है।",
        points: ["सभी ब्रांड सपोर्ट", "जेन्युइन स्पेयर पार्ट्स", "उसी दिन सेवा", "90 दिन वारंटी"],
      },
      acInstallation: {
        title: "एसी इंस्टॉलेशन",
        description: "स्प्लिट, डक्टेड और सेंट्रल एसी के लिए सटीक इंस्टॉलेशन।",
        points: ["साइट आकलन शामिल", "विशेषज्ञ सेटअप", "लीक-प्रूफ पाइपिंग", "प्रदर्शन परीक्षण"],
      },
      acService: {
        title: "एसी सर्विस और मेंटेनेंस",
        description: "प्रिवेंटिव मेंटेनेंस जो दक्षता बढ़ाता है और एसी की उम्र लंबी करता है।",
        points: ["डीप क्लीनिंग", "गैस प्रेशर जांच", "ड्रेनेज ट्यूनिंग", "मौसमी निरीक्षण"],
      },
      hvacSystems: {
        title: "एचवीएसी सिस्टम",
        description: "कमर्शियल और इंडस्ट्रियल स्पेस के लिए सम्पूर्ण एचवीएसी प्लानिंग।",
        points: ["डक्ट प्लानिंग", "ज़ोन आधारित कूलिंग", "ऊर्जा अनुकूलन", "दीर्घकालिक मेंटेनेंस"],
      },
    },
  },
  te: {
    kicker: "Mana Sevalu",
    title: "Homes mariyu Businesses kosam Reliable AC Solutions",
    subtitle: "Mee avasaralaki taggattu installation, maintenance mariyu repair services. Residential mariyu commercial support.",
    offeringsAria: "Service offerings",
    bookService: "Ee Service Book Cheyyandi",
    pageCtaAria: "Book service call to action",
    pageCtaTitle: "Expert AC Service Kavala?",
    pageCtaButton: "Ippude Book Cheyyandi",
    serviceDetails: {
      acRepair: {
        title: "AC Repair",
        description: "Fast diagnosis mariyu reliable repair tho downtime tagguthundi.",
        points: ["Anni brands support", "Genuine spare parts", "Same-day service", "90-day warranty"],
      },
      acInstallation: {
        title: "AC Installation",
        description: "Split, ducted mariyu central AC systems kosam precise installation.",
        points: ["Site assessment", "Expert setup", "Leak-proof piping", "Performance testing"],
      },
      acService: {
        title: "AC Service & Maintenance",
        description: "Preventive maintenance valla efficiency perigedi, unit life extend avutundi.",
        points: ["Deep cleaning", "Gas checks", "Drainage tuning", "Seasonal inspection"],
      },
      hvacSystems: {
        title: "HVAC Systems",
        description: "Commercial mariyu industrial spaces kosam complete HVAC planning.",
        points: ["Duct planning", "Zoned cooling", "Energy optimization", "Long-term maintenance"],
      },
    },
  },
};

function ServicesSection({ showPageCta = false }) {
  const { language } = useAppPreferences();
  const copy = servicesCopy[language] ?? servicesCopy.en;

  return (
    <section className="services-section" id="services">
      <div className="services-content">
        <div className="services-header">
          <p className="services-kicker">{copy.kicker}</p>
          <h2 className="services-title">{copy.title}</h2>
          <div className="services-divider" aria-hidden="true" />
          <p className="services-subtitle">{copy.subtitle}</p>
        </div>

        <div className="services-bands" aria-label={copy.offeringsAria}>
          {services.map((service) => {
            const details = copy.serviceDetails[service.key] ?? servicesCopy.en.serviceDetails[service.key];

            return (
              <ServiceRow
                key={service.key}
                service={{
                  title: details.title,
                  image: service.image,
                  imageClass: service.imageClass,
                  logoClass: service.logoClass,
                  description: details.description,
                  points: details.points,
                  queryTitle: service.queryTitle,
                  bookLabel: copy.bookService,
                }}
              />
            );
          })}
        </div>

        {showPageCta && (
          <section className="services-bottom-cta" aria-label={copy.pageCtaAria}>
            <h3>{copy.pageCtaTitle}</h3>
            <Link className="services-bottom-cta-button" to="/book-service">
              {copy.pageCtaButton}
            </Link>
          </section>
        )}

      </div>
    </section>
  );
}

export default ServicesSection;
