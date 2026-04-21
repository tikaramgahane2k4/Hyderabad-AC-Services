import Footer from "../components/Footer";
import { useAppPreferences } from "../context/AppPreferencesContext";
import { getLocalizedSiteContent } from "../data/localizedSiteContent";
import "../styles/About.css";

const aboutCopyByLanguage = {
  en: {
    heroEyebrow: "About Us",
    heroTitleLines: ["Complete AC & HVAC", "Services", "Across Hyderabad."],
    heroDescription:
      "At Hyderabad AC Services, we provide complete Air Conditioning and HVAC services in Hyderabad. With years of experience, we specialize in AC installation, repair, maintenance, ducting, centralized cooling, restaurant kitchen exhaust installation, and annual maintenance for both residential and commercial clients.",
    mission: "Our mission: keep every customer cool and comfortable with reliable, affordable, and professional AC services.",
    freeConsultation: "Get a Free Consultation",
    callPrefix: "Call",
    statsBadge: "TRUSTED HVAC PARTNER",
    statsText:
      "From split and window ACs to centralized ducting and VRF/VRV systems, we deliver end-to-end cooling solutions for homes, offices, restaurants, hospitals, and more.",
    stats: [
      { value: "10+", label: "Years of Experience" },
      { value: "500+", label: "Happy Clients" },
      { value: "1000+", label: "Projects Completed" },
      { value: "24/7", label: "Support Availability" },
    ],
    ratingSuffix: "/ 5 average rating across 500+ clients",
    whoEyebrow: "Who We Are",
    whoTitleLines: ["Certified HVAC professionals", "committed to quality work."],
    whoParagraphs: [
      "Hyderabad AC Services is a team of certified HVAC engineers and professionals dedicated to delivering top-quality cooling solutions. From split and window ACs to centralized ducting and VRF/VRV systems, we provide end-to-end services tailored to your specific needs.",
      "Whether it is a home, office, restaurant, hospital, retail showroom, or industrial facility, we ensure every project is executed with precision, safety, and efficiency.",
      "Whether you are installing a new system, upgrading to centralized cooling, or just need seasonal maintenance, we are here to keep you cool, comfortable, and worry-free.",
    ],
    whyEyebrow: "Why Choose Us",
    whyTitleLines: ["Six reasons customers trust us", "with their AC"],
    whyChooseUs: [
      {
        num: "01",
        title: "Experienced Engineers & Certified Technicians",
        text: "Our team is fully certified and trained in HVAC systems for all residential and commercial needs.",
      },
      {
        num: "02",
        title: "Serving All Areas of Hyderabad",
        text: "From Banjara Hills to HiTech City, we cover every part of Hyderabad and surrounding areas.",
      },
      {
        num: "03",
        title: "Transparent Pricing, No Hidden Charges",
        text: "You will know the full cost before we start. No surprises and no fine print.",
      },
      {
        num: "04",
        title: "Fast Response & Same-Day Service",
        text: "AC emergency? We offer same-day service so you are never left waiting.",
      },
      {
        num: "05",
        title: "Eco-Friendly Practices & Responsible Recycling",
        text: "We follow responsible refrigerant handling and eco-safe disposal practices on every job.",
      },
      {
        num: "06",
        title: "Customer Satisfaction Guaranteed",
        text: "We do not consider a job done until you are completely happy with the result.",
      },
    ],
    servicesEyebrow: "What We Do",
    servicesTitle: "Everything HVAC. Under one roof.",
    servicesSubtitle:
      "Whether it is a simple repair or a complex centralized system, we are certified for it and ready for it.",
    services: [
      { title: "AC Installation", text: "Split, window, and centralized cooling systems installed with precision and care." },
      { title: "AC Repair", text: "Fast diagnosis and reliable fixes for every brand and every problem." },
      { title: "Preventive Maintenance", text: "Annual and seasonal AMC plans that keep your AC running like new." },
      { title: "Ducting Systems", text: "Efficient air duct layout for better flow, lower energy bills, and cleaner air." },
      { title: "Kitchen Exhaust", text: "Restaurant-grade exhaust systems built for heat, grease, and heavy daily use." },
      { title: "VRF / VRV Systems", text: "Smart multi-zone cooling for large offices, hotels, and commercial buildings." },
    ],
    processEyebrow: "How It Works",
    processTitle: "Four steps. Zero stress.",
    processSubtitle: "We have made the whole experience simple from the first call to the final check.",
    steps: [
      {
        num: "01",
        title: "You Call. We Listen.",
        text: "Tell us your situation. We ask the right questions so we show up fully prepared.",
      },
      {
        num: "02",
        title: "We Assess. You Decide.",
        text: "A certified engineer visits, evaluates your space, and gives you a clear quote with no pressure.",
      },
      {
        num: "03",
        title: "We Work. You Relax.",
        text: "Our team handles everything on time, safely, and with a clean finish.",
      },
      {
        num: "04",
        title: "Done. But Not Gone.",
        text: "We follow up and remain available if anything feels off.",
      },
    ],
    testimonialsEyebrow: "REAL WORDS. REAL CLIENTS.",
    testimonialsTitle: "Do not take our word for it",
    testimonials: [
      {
        text: "My AC went out over the weekend. They showed up within two hours and fixed everything. Professional and punctual.",
        name: "Sangita",
        role: "Chartered Accountant",
        initials: "SG",
      },
      {
        text: "Friendly, professional, and honest. They explained all options clearly with fair prices and quality work.",
        name: "Aijaz Khan",
        role: "Software Engineer",
        initials: "AK",
      },
      {
        text: "Within two hours they were at my door. They worked quickly and fixed it for a reasonable price.",
        name: "Raju",
        role: "Doctor",
        initials: "RJ",
      },
    ],
    serveEyebrow: "WHERE WE SERVE",
    serveTitle: "Every kind of space. Every kind of need.",
    servingAreas: [
      "Homes & Apartments",
      "Corporate Offices",
      "Restaurants & Kitchens",
      "Hospitals & Clinics",
      "Retail Showrooms",
      "Warehouses",
      "Industrial Facilities",
      "Commercial Buildings",
    ],
    finalEyebrow: "LET'S TALK",
    finalTitleLines: ["Ready to get your AC", "sorted?"],
    finalText:
      "No long waits. Call or drop us a message and we will connect you with expert support quickly.",
    finalBook: "Book a Free Visit",
  },
  hi: {
    heroEyebrow: "हमारे बारे में",
    heroTitleLines: ["सम्पूर्ण एसी और एचवीएसी", "सेवाएं", "पूरे हैदराबाद में"],
    heroDescription:
      "हैदराबाद एसी सर्विसेज में हम सम्पूर्ण एसी और एचवीएसी सेवाएं प्रदान करते हैं। इंस्टॉलेशन, रिपेयर, मेंटेनेंस, डक्टिंग, सेंट्रलाइज़्ड कूलिंग और वार्षिक रखरखाव में हमारी विशेषज्ञ टीम का लंबा अनुभव है।",
    mission: "हमारा मिशन: हर ग्राहक को भरोसेमंद, किफायती और पेशेवर एसी सेवा के साथ आरामदायक रखना।",
    freeConsultation: "फ्री कंसल्टेशन लें",
    callPrefix: "कॉल",
    statsBadge: "विश्वसनीय एचवीएसी पार्टनर",
    statsText:
      "स्प्लिट और विंडो एसी से लेकर सेंट्रलाइज़्ड डक्टिंग और VRF/VRV सिस्टम तक, हम एंड-टू-एंड कूलिंग समाधान प्रदान करते हैं।",
    stats: [
      { value: "10+", label: "साल का अनुभव" },
      { value: "500+", label: "संतुष्ट क्लाइंट" },
      { value: "1000+", label: "पूर्ण प्रोजेक्ट" },
      { value: "24/7", label: "सपोर्ट उपलब्ध" },
    ],
    ratingSuffix: "/ 5 औसत रेटिंग (500+ ग्राहकों में)",
    whoEyebrow: "हम कौन हैं",
    whoTitleLines: ["प्रमाणित एचवीएसी प्रोफेशनल", "गुणवत्तापूर्ण काम के लिए प्रतिबद्ध"],
    whoParagraphs: [
      "हैदराबाद एसी सर्विसेज प्रमाणित एचवीएसी इंजीनियरों की टीम है, जो उच्च गुणवत्ता वाले कूलिंग समाधान प्रदान करती है।",
      "घर, ऑफिस, रेस्टोरेंट, हॉस्पिटल या इंडस्ट्रियल सुविधा - हर प्रोजेक्ट में सटीकता और सुरक्षा सुनिश्चित की जाती है।",
      "नया सिस्टम इंस्टॉल करना हो या मौसमी मेंटेनेंस चाहिए हो, हम हमेशा आपके साथ हैं।",
    ],
    whyEyebrow: "हमें क्यों चुनें",
    whyTitleLines: ["वे 6 कारण जिनसे ग्राहक हम पर भरोसा करते हैं", "अपने एसी के लिए"],
    whyChooseUs: [
      {
        num: "01",
        title: "अनुभवी इंजीनियर और प्रमाणित तकनीशियन",
        text: "हमारी टीम रिहायशी और कमर्शियल एचवीएसी जरूरतों के लिए प्रशिक्षित है।",
      },
      {
        num: "02",
        title: "हैदराबाद के सभी क्षेत्रों में सेवा",
        text: "बंजारा हिल्स से हाईटेक सिटी तक हम पूरे हैदराबाद को कवर करते हैं।",
      },
      {
        num: "03",
        title: "पारदर्शी मूल्य, बिना छुपे शुल्क",
        text: "काम शुरू होने से पहले स्पष्ट लागत बताई जाती है।",
      },
      {
        num: "04",
        title: "तेज़ प्रतिक्रिया और उसी दिन सेवा",
        text: "इमरजेंसी में हमारी प्राथमिकता उसी दिन प्रतिक्रिया देना है।",
      },
      {
        num: "05",
        title: "पर्यावरण-अनुकूल कार्यप्रणाली और जिम्मेदार रीसाइक्लिंग",
        text: "हर प्रोजेक्ट में सुरक्षित रेफ्रिजरेंट हैंडलिंग और पर्यावरण मानकों का पालन किया जाता है।",
      },
      {
        num: "06",
        title: "ग्राहक संतुष्टि की गारंटी",
        text: "जब तक आप पूरी तरह संतुष्ट न हों, हम काम पूरा नहीं मानते।",
      },
    ],
    servicesEyebrow: "हम क्या करते हैं",
    servicesTitle: "हर एचवीएसी समाधान, एक ही छत के नीचे",
    servicesSubtitle: "साधारण रिपेयर हो या जटिल सेंट्रलाइज़्ड सिस्टम, हम पूरी तरह तैयार हैं।",
    services: [
      { title: "एसी इंस्टॉलेशन", text: "स्प्लिट, विंडो और सेंट्रलाइज़्ड सिस्टम का सटीक इंस्टॉलेशन।" },
      { title: "एसी रिपेयर", text: "हर ब्रांड के लिए तेज़ जांच और भरोसेमंद रिपेयर।" },
      { title: "प्रिवेंटिव मेंटेनेंस", text: "वार्षिक और मौसमी एएमसी प्लान जो एसी को दक्ष बनाए रखें।" },
      { title: "डक्टिंग सिस्टम", text: "बेहतर एयरफ्लो और दक्षता के लिए स्मार्ट डक्ट लेआउट।" },
      { title: "किचन एग्जॉस्ट", text: "भारी दैनिक उपयोग के लिए रेस्टोरेंट-ग्रेड एग्जॉस्ट सिस्टम।" },
      { title: "VRF / VRV सिस्टम", text: "बड़े ऑफिस और कमर्शियल स्पेस के लिए मल्टी-ज़ोन कूलिंग।" },
    ],
    processEyebrow: "यह कैसे काम करता है",
    processTitle: "4 चरण, बिना तनाव",
    processSubtitle: "पहली कॉल से अंतिम जांच तक पूरी प्रक्रिया सरल रखी गई है।",
    steps: [
      { num: "01", title: "आप कॉल करें, हम सुनते हैं", text: "आपकी जरूरत समझकर हमारी टीम पूरी तैयारी के साथ आती है।" },
      { num: "02", title: "हम आकलन करते हैं, आप निर्णय लें", text: "साइट विजिट के बाद स्पष्ट और पारदर्शी कोटेशन दिया जाता है।" },
      { num: "03", title: "हम काम करते हैं, आप निश्चिंत रहें", text: "समय पर, सुरक्षित और साफ-सुथरा निष्पादन सुनिश्चित किया जाता है।" },
      { num: "04", title: "काम पूरा, सपोर्ट जारी", text: "काम के बाद भी फॉलो-अप और सहायता उपलब्ध रहती है।" },
    ],
    testimonialsEyebrow: "असली शब्द, असली ग्राहक",
    testimonialsTitle: "सिर्फ हमारी बात पर भरोसा न करें",
    testimonials: [
      {
        text: "वीकेंड में एसी खराब हो गया था। 2 घंटे के भीतर आकर समस्या हल कर दी।",
        name: "संगीता",
        role: "चार्टर्ड अकाउंटेंट",
        initials: "सं",
      },
      {
        text: "टीम मित्रवत और प्रोफेशनल थी। सभी विकल्प साफ तरीके से समझाए गए।",
        name: "ऐजाज़ खान",
        role: "सॉफ्टवेयर इंजीनियर",
        initials: "ऐख",
      },
      {
        text: "बहुत तेज़ प्रतिक्रिया और उचित कीमत। मैं जरूर अनुशंसा करूंगा।",
        name: "राजू",
        role: "डॉक्टर",
        initials: "रा",
      },
    ],
    serveEyebrow: "जहां हम सेवा देते हैं",
    serveTitle: "हर तरह की जगह, हर तरह की जरूरत",
    servingAreas: [
      "घर और अपार्टमेंट",
      "कॉर्पोरेट ऑफिस",
      "रेस्टोरेंट और किचन",
      "हॉस्पिटल और क्लिनिक",
      "रिटेल शोरूम",
      "वेयरहाउस",
      "औद्योगिक इकाइयां",
      "कमर्शियल बिल्डिंग",
    ],
    finalEyebrow: "चलिए बात करते हैं",
    finalTitleLines: ["क्या आपका एसी मुद्दा", "आज ही सुलझाएं?"],
    finalText: "कॉल या संदेश करें। हमारी टीम आपसे जल्द संपर्क करेगी।",
    finalBook: "फ्री विजिट बुक करें",
  },
  te: {
    heroEyebrow: "Maa Gurinchi",
    heroTitleLines: ["Complete AC & HVAC", "Services", "Hyderabad Anthata."],
    heroDescription:
      "Hyderabad AC Services lo memu complete AC mariyu HVAC services andistamu. Installation, repair, maintenance, ducting, centralized cooling mariyu AMC support lo anubhavam unna team.",
    mission: "Maa mission: prathi customer ni reliable mariyu affordable AC service tho comfortable ga unchadam.",
    freeConsultation: "Free Consultation Pondandi",
    callPrefix: "Call",
    statsBadge: "TRUSTED HVAC PARTNER",
    statsText:
      "Split mariyu window AC nundi centralized ducting mariyu VRF/VRV systems varaku complete cooling solutions andistamu.",
    stats: [
      { value: "10+", label: "Years Experience" },
      { value: "500+", label: "Happy Clients" },
      { value: "1000+", label: "Projects Completed" },
      { value: "24/7", label: "Support Available" },
    ],
    ratingSuffix: "/ 5 average rating across 500+ clients",
    whoEyebrow: "Memu Evaram",
    whoTitleLines: ["Certified HVAC professionals", "quality work ki committed."],
    whoParagraphs: [
      "Hyderabad AC Services certified HVAC engineers team, high-quality cooling solutions andistundi.",
      "Home, office, restaurant, hospital leka industrial facility aina prathi project ni precision tho complete chestamu.",
      "Kotha system install chesina, centralized cooling upgrade chesina, seasonal maintenance kavalsina memu meetho untamu.",
    ],
    whyEyebrow: "Mammalni Enduku Enchukovali",
    whyTitleLines: ["Customers nammakam petti enchukune 6 karanalu", "vari AC kosam"],
    whyChooseUs: [
      {
        num: "01",
        title: "Experienced Engineers & Certified Technicians",
        text: "Residential mariyu commercial HVAC needs kosam trained team.",
      },
      {
        num: "02",
        title: "Serving All Areas of Hyderabad",
        text: "Banjara Hills nundi HiTech City varaku Hyderabad motham cover chestamu.",
      },
      {
        num: "03",
        title: "Transparent Pricing, No Hidden Charges",
        text: "Pani modalu pettadaniki mundu clear pricing istamu.",
      },
      {
        num: "04",
        title: "Fast Response & Same-Day Service",
        text: "Emergency situations lo same-day response ki priority isthamu.",
      },
      {
        num: "05",
        title: "Eco-Friendly Practices & Responsible Recycling",
        text: "Prathi job lo responsible refrigerant handling follow chestamu.",
      },
      {
        num: "06",
        title: "Customer Satisfaction Guaranteed",
        text: "Meeru santoshanga unteyne maaku work complete aina feeling.",
      },
    ],
    servicesEyebrow: "Memu Emi Chestam",
    servicesTitle: "Everything HVAC. Oka chotane.",
    servicesSubtitle: "Simple repair nundi complex centralized system varaku memu ready.",
    services: [
      { title: "AC Installation", text: "Split, window mariyu centralized systems precise ga install chestamu." },
      { title: "AC Repair", text: "Prathi brand ki fast diagnosis mariyu reliable repair." },
      { title: "Preventive Maintenance", text: "AC efficiency maintain chese annual mariyu seasonal AMC plans." },
      { title: "Ducting Systems", text: "Better airflow mariyu efficiency kosam smart duct layout." },
      { title: "Kitchen Exhaust", text: "Heavy use kosam restaurant-grade exhaust systems." },
      { title: "VRF / VRV Systems", text: "Large offices mariyu commercial buildings kosam multi-zone cooling." },
    ],
    processEyebrow: "Ela Panichestundi",
    processTitle: "4 steps. Zero stress.",
    processSubtitle: "First call nundi final check varaku process simple ga untundi.",
    steps: [
      { num: "01", title: "Meeru Call Cheyyandi. Memu Vinutam.", text: "Requirement ardham chesukoni prepared ga vastamu." },
      { num: "02", title: "Memu Assess Chestam. Meeru Decide Avvandi.", text: "Site visit tarvata clear quote isthamu." },
      { num: "03", title: "Memu Work Chestam. Meeru Relax Avvandi.", text: "Time ki safe ga clean ga execution chestamu." },
      { num: "04", title: "Done. Kani Support Continues.", text: "Work tarvata follow-up mariyu support andistamu." },
    ],
    testimonialsEyebrow: "REAL WORDS. REAL CLIENTS.",
    testimonialsTitle: "Maa maata matrame nammakandi",
    testimonials: [
      {
        text: "Weekend lo AC issue ochindi. 2 gantallo vachi fix chesaru.",
        name: "Sangita",
        role: "Chartered Accountant",
        initials: "SG",
      },
      {
        text: "Friendly mariyu professional team. Clear ga options explain chesaru.",
        name: "Aijaz Khan",
        role: "Software Engineer",
        initials: "AK",
      },
      {
        text: "Fast response mariyu reasonable pricing. Nenu tappakunda recommend chestanu.",
        name: "Raju",
        role: "Doctor",
        initials: "RJ",
      },
    ],
    serveEyebrow: "MEMU SERVICE ICHCHE PRANTHALU",
    serveTitle: "Prathi rakamaina space. Prathi rakamaina need.",
    servingAreas: [
      "Homes & Apartments",
      "Corporate Offices",
      "Restaurants & Kitchens",
      "Hospitals & Clinics",
      "Retail Showrooms",
      "Warehouses",
      "Industrial Facilities",
      "Commercial Buildings",
    ],
    finalEyebrow: "MATLADUKUNDAM",
    finalTitleLines: ["Mee AC issue ni", "ippude solve cheddama?"],
    finalText: "Call leka message cheyyandi. Maa team tondaraga meetho connect avutundi.",
    finalBook: "Free Visit Book Cheyyandi",
  },
};

function About() {
  const { language } = useAppPreferences();
  const siteContent = getLocalizedSiteContent(language);
  const copy = aboutCopyByLanguage[language] ?? aboutCopyByLanguage.en;

  return (
    <div className="about-page">
      <div className="about-container">
        <section className="hero-split">
          <div className="hero-content">
            <span className="section-eyebrow">{copy.heroEyebrow}</span>
            <h1 className="hero-title">
              <span>{copy.heroTitleLines[0]}</span>
              <span>{copy.heroTitleLines[1]}</span>
              <span>{copy.heroTitleLines[2]}</span>
            </h1>
            <p className="hero-description">{copy.heroDescription}</p>
            <div className="mission-box">
              <p>{copy.mission}</p>
            </div>
            <div className="hero-actions">
              <a href="/contact" className="btn-primary">
                {copy.freeConsultation}
              </a>
              <a href={siteContent.phoneLink} className="btn-secondary">
                {copy.callPrefix} {siteContent.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="stats-card">
            <span className="stats-card-badge">{copy.statsBadge}</span>
            <p className="stats-card-text">{copy.statsText}</p>
            <div className="stats-grid">
              {copy.stats.map((item) => (
                <div className="stat-item" key={item.label}>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
            <div className="rating-line">
              4.9 <span>{copy.ratingSuffix}</span>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-header">
            <span className="section-eyebrow">{copy.whoEyebrow}</span>
          </div>
          <div className="info-body">
            <h2 className="info-title">
              <span>{copy.whoTitleLines[0]}</span>
              <span>{copy.whoTitleLines[1]}</span>
            </h2>
            {copy.whoParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="grid-section grid-section--why">
          <span className="section-eyebrow">{copy.whyEyebrow}</span>
          <h2 className="grid-title grid-title--why">
            <span>{copy.whyTitleLines[0]}</span>
            <span>{copy.whyTitleLines[1]}</span>
          </h2>
          <div className="cards-grid">
            {copy.whyChooseUs.map((item) => (
              <div key={item.num} className="card-item">
                <span className="card-num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid-section grid-section--services">
          <div className="services-intro">
            <span className="section-eyebrow">{copy.servicesEyebrow}</span>
            <h2 className="grid-title grid-title--services">{copy.servicesTitle}</h2>
            <p className="services-intro-text">{copy.servicesSubtitle}</p>
          </div>
          <div className="cards-grid">
            {copy.services.map((service) => (
              <div key={service.title} className="card-item">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="process-section process-section--primary">
          <div className="process-header">
            <span className="section-eyebrow section-eyebrow--light">{copy.processEyebrow}</span>
            <h2>{copy.processTitle}</h2>
            <p>{copy.processSubtitle}</p>
          </div>
          <div className="process-grid">
            {copy.steps.map((step) => (
              <div key={step.num} className="process-card">
                <span className="card-num card-num--light">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid-section grid-section--testimonials">
          <span className="section-eyebrow">{copy.testimonialsEyebrow}</span>
          <h2 className="grid-title">{copy.testimonialsTitle}</h2>
          <div className="cards-grid">
            {copy.testimonials.map((testimonial) => (
              <div key={`${testimonial.name}-${testimonial.initials}`} className="card-item testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">{testimonial.initials}</div>
                  <div className="testimonial-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid-section">
          <span className="section-eyebrow">{copy.serveEyebrow}</span>
          <h2 className="grid-title">{copy.serveTitle}</h2>
          <div className="serving-grid">
            {copy.servingAreas.map((area) => (
              <div key={area} className="serving-item">
                {area}
              </div>
            ))}
          </div>
        </section>

        <section className="process-section process-section--cta">
          <div className="process-header process-header--compact">
            <span className="section-eyebrow section-eyebrow--light">{copy.finalEyebrow}</span>
            <h2 className="process-cta-title">
              <span>{copy.finalTitleLines[0]}</span>
              <span>{copy.finalTitleLines[1]}</span>
            </h2>
            <p className="process-cta-text">{copy.finalText}</p>
          </div>
          <div className="hero-actions">
            <a href="/contact" className="btn-primary btn-primary--white">
              {copy.finalBook}
            </a>
            <a href={siteContent.phoneLink} className="btn-secondary btn-secondary--outline-light">
              {copy.callPrefix} {siteContent.phoneDisplay}
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
