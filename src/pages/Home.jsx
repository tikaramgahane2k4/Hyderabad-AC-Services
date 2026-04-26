import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import AnimatedStats from "../components/AnimatedStats";
import HomeCard from "../components/home/HomeCard";
import HomeFaqAccordion from "../components/home/HomeFaqAccordion";
import HomeSection from "../components/home/HomeSection";
import { blogs } from "../data/blogs";
import { useAppPreferences } from "../context/AppPreferencesContext";
import { getLocalizedSiteContent } from "../data/localizedSiteContent";
import "../styles/home.css";
import "../styles/services-modern.css";

const heroBackground = "/images/wallpaper.png";

const enterpriseTrustIndicators = {
  en: ["100+ Clients Served", "5+ Years Experience", "24/7 Support"],
  hi: ["100+ क्लाइंट्स", "5+ सालों का अनुभव", "24/7 सहायता"],
  te: ["100+ Clients", "5+ Years Experience", "24/7 Support"],
  ar: ["خدمة أكثر من 100 عميل", "أكثر من 5 سنوات خبرة", "دعم على مدار الساعة"],
  kn: ["100+ ಗ್ರಾಹಕರು", "5+ ವರ್ಷಗಳ ಅನುಭವ", "24/7 ಬೆಂಬಲ"],
  ml: ["100+ ഉപഭോക്താക്കൾ", "5+ വർഷത്തെ പരിചയം", "24/7 പിന്തുണ"],
  ta: ["100+ வாடிக்கையாளர்கள்", "5+ வருட அனுபவம்", "24/7 ஆதரவு"],
};

const heroServiceTypes = {
  en: ["Commercial AC Installation", "HVAC Maintenance", "Emergency Repairs", "AMC Contracts", "Industrial Cooling"],
  hi: ["कमर्शियल एसी इंस्टॉलेशन", "एचवीएसी मेंटेनेंस", "इमरजेंसी रिपेयर", "एएमसी कॉन्ट्रैक्ट", "इंडस्ट्रियल कूलिंग"],
  te: ["Commercial AC Installation", "HVAC Maintenance", "Emergency Repairs", "AMC Contracts", "Industrial Cooling"],
  ar: ["تركيب مكيفات تجارية", "صيانة أنظمة التكييف", "إصلاحات طارئة", "عقود الصيانة السنوية", "تبريد صناعي"],
  kn: ["ವಾಣಿಜ್ಯ ಎಸಿ ಸ್ಥಾಪನೆ", "HVAC ನಿರ್ವಹಣೆ", "ತುರ್ತು ರಿಪೇರಿ", "AMC ಒಪ್ಪಂದಗಳು", "ಕೈಗಾರಿಕಾ ಕೂಲಿಂಗ್"],
  ml: ["കൊമേഴ്സ്യൽ എസി ഇൻസ്റ്റാളേഷൻ", "HVAC മെയിന്റനൻസ്", "അടിയന്തിര റിപ്പയർ", "AMC കരാറുകൾ", "ഇൻഡസ്ട്രിയൽ കൂളിംഗ്"],
  ta: ["வணிக ஏசி நிறுவல்", "HVAC பராமரிப்பு", "அவசர பழுதுபார்ப்பு", "AMC ஒப்பந்தங்கள்", "தொழில்துறை குளிர்ச்சி"],
};

const partnerBrands = [
  { name: "Voltas", logo: "/images/partners/voltas-logo.svg" },
  { name: "Blue Star", logo: "/images/partners/blue-star-logo.svg" },
  { name: "Carrier", logo: "/images/partners/carrier-logo.svg" },
  { name: "Daikin", logo: "/images/partners/daikin-logo.svg" },
];

const revealDelayClass = (index) => `home-reveal-delay-${(index % 6) + 1}`;

const serviceCardIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 8h16v6H4z" />
      <path d="M8 8V5m8 3V5M7 18h10" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 7h18v5H3z" />
      <path d="M12 12v7" strokeLinecap="round" />
      <path d="m9 16 3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 12h18M6 8h12M6 16h12" strokeLinecap="round" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
];

const blogCardDefaults = {
  category: "Tips",
  image: "/images/AC%20services.jpg",
  meta: "3 min read",
  ctaLabel: "Read More →",
};

const blogCardPresets = {
  installation: {
    category: "Installation",
    image: "/images/AC%20Service%20%26%20Maintenance.jpg",
    meta: "Expert Tip",
    ctaLabel: "Read More →",
  },
  maintenance: {
    category: "Maintenance",
    image: "/images/AC%20services.jpg",
    meta: "3 min read",
    ctaLabel: "Read More →",
  },
  repair: {
    category: "Repair",
    image: "/images/AC%20Installation.jpg",
    meta: "4 min read",
    ctaLabel: "Read More →",
  },
  copper: {
    category: "Tips",
    image: "/images/Annual%20Maintenance%20Contracts.jpg",
    meta: "Expert Guide",
    ctaLabel: "Read More →",
  },
};

const getBlogCardPreset = (post, index) => {
  const searchText = `${post?.slug ?? ""} ${post?.title ?? ""}`.toLowerCase();

  if (searchText.includes("copper")) {
    return blogCardPresets.copper;
  }

  if (searchText.includes("install")) {
    return blogCardPresets.installation;
  }

  if (searchText.includes("repair") || searchText.includes("leak")) {
    return blogCardPresets.repair;
  }

  if (searchText.includes("service") || searchText.includes("maint")) {
    return blogCardPresets.maintenance;
  }

  const fallbackByIndex = [
    blogCardPresets.installation,
    blogCardPresets.repair,
    blogCardPresets.copper,
    blogCardPresets.maintenance,
  ];

  return fallbackByIndex[index % fallbackByIndex.length] ?? blogCardDefaults;
};

const trustHighlightIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.8 1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3 4 7v6c0 4.2 3.2 7.8 8 8 4.8-.2 8-3.8 8-8V7l-8-4Z" />
      <path d="m9.2 12.2 1.8 1.8 3.8-3.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3.8 14.6 9l5.7.8-4.1 4 1 5.7L12 16.7 6.8 19.5l1-5.7-4.1-4 5.7-.8L12 3.8Z" />
    </svg>
  ),
];


const modernServiceCards = [
  {
    image: "/images/AC Service & Maintenance.jpg",
    link: "/services",
  },
  {
    image: "/images/AC Installation.jpg",
    link: "/services",
  },
  {
    image: "/images/AC repair.jpg",
    link: "/services",
  },
];

const homeCopyByLanguage = {
  en: {
    heroBadge: "Google Rating 4.9",
    heroTitle: "Reliable AC Solutions for Businesses & Commercial Spaces",
    heroSummary: "End-to-end air conditioning services designed to ensure uninterrupted operations, energy efficiency, and long-term system performance.",
    heroPrimaryCta: "Get AMC Quote",
    heroSecondaryCta: "Book Service",
    leadTitle: "Get Expert Consultation",
    leadSubtitle: "Share your details and our commercial HVAC team will respond promptly.",
    leadName: "Name",
    leadNamePlaceholder: "Your name",
    leadEmail: "Email",
    leadEmailPlaceholder: "Your email",
    leadService: "Service Type",
    leadServiceSelect: "Select service type",
    leadMessage: "Message",
    leadMessagePlaceholder: "Tell us about your requirement",
    leadSubmit: "Submit Request",
    leadFooter: "Your information is safe with us.",
    trustEyebrow: "OUR STRENGTHS",
    trustTitle: "WHY CUSTOMERS CHOOSE US",
    trustSubtitle: "Dedicated to providing superior AC solutions with a focus on quality, transparency, and complete customer satisfaction.",
    trustHighlights: [
      { title: "Experienced Technicians", description: "Skilled professionals for all AC services" },
      { title: "Quick & Reliable Service", description: "Fast response times with same-day service available" },
      { title: "Enterprise Grade Support", description: "24/7 availability for your critical cooling needs" },
    ],
    statsTitle: "Trusted by Hundreds Across Hyderabad",
    statsDescription: "A quick overview of our trusted services, satisfied customers, and commitment to delivering reliable AC solutions across Hyderabad.",
    stats: [
      { value: 4.9, decimals: 1, label: "Google Rating", icon: "rating" },
      { value: 500, suffix: "+", label: "Happy Customers", icon: "customers" },
      { value: 10, suffix: "+", label: "Years Experience", icon: "experience" },
      { value: 24, suffix: "/7", label: "24/7 Support", icon: "support" },
    ],
    collaboratorsTitle: "Our Collaborators",
    collaboratorsSubtitle: "Brands We Work With",
    collaboratorsDescription: "Trusted support for leading air conditioning brands across residential and commercial spaces.",
    servicesEyebrow: "OUR SERVICES",
    servicesTitle: "Professional Cooling Services with Better Coverage",
    serviceCards: [
      {
        title: "AC Service & Maintenance",
        points: ["Regular maintenance ensures peak cooling efficiency", "Cleaning, filter replacement & gas top-up", "Prevents costly repairs with preventive care"],
        button: "Book Service"
      },
      {
        title: "AC Installation & Setup",
        points: ["Expert installation by certified technicians", "Support for all major brands and models", "Perfect placement for optimal performance"],
        button: "Get Quote"
      },
      {
        title: "AC Repair & Troubleshooting",
        points: ["Fast response to emergency AC failures", "Expert diagnosis and permanent solutions", "Same-day service availability"],
        button: "Request Service"
      }
    ],
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to common questions about our AC services and solutions.",
    blogDescription: "Learn more about AC maintenance, installation, and long-term care.",
    blogSummaries: [
      "Practical AC service guidance for homes and businesses.",
      "Maintenance tips to keep cooling systems efficient.",
      "Repair-focused advice for common AC issues.",
      "AMC and long-term care recommendations.",
    ],
  },
  hi: {
    heroBadge: "गूगल रेटिंग 4.9",
    heroTitle: "व्यवसायों और कमर्शियल स्पेस के लिए विश्वसनीय एसी समाधान",
    heroSummary: "निर्बाध संचालन, ऊर्जा दक्षता और लंबी अवधि के सिस्टम प्रदर्शन सुनिश्चित करने के लिए डिज़ाइन की गई एंड-टू-एंड एयर कंडीशनिंग सेवाएं।",
    heroPrimaryCta: "एएमसी कोट लें",
    heroSecondaryCta: "सर्विस बुक करें",
    leadTitle: "विशेषज्ञ परामर्श लें",
    leadSubtitle: "अपनी जानकारी साझा करें और हमारी कमर्शियल एचवीएसी टीम तुरंत जवाब देगी।",
    leadName: "नाम",
    leadNamePlaceholder: "आपका नाम",
    leadEmail: "ईमेल",
    leadEmailPlaceholder: "आपका ईमेल",
    leadService: "सेवा का प्रकार",
    leadServiceSelect: "सेवा का प्रकार चुनें",
    leadMessage: "संदेश",
    leadMessagePlaceholder: "अपनी आवश्यकता के बारे में बताएं",
    leadSubmit: "अनुरोध भेजें",
    leadFooter: "आपकी जानकारी हमारे पास सुरक्षित है।",
    trustEyebrow: "हमारी ताकत",
    trustTitle: "ग्राहक हमें क्यों चुनते हैं",
    trustSubtitle: "आपकी सुविधा हमारी प्राथमिकता है, आपके घर को ठंडा और तनावमुक्त रखने के लिए भरोसेमंद एसी सेवाएं।",
    trustHighlights: [
      { title: "अनुभवी तकनीशियन", description: "सभी एसी सेवाओं के लिए कुशल पेशेवर" },
      { title: "त्वरित और विश्वसनीय सेवा", description: "तेज प्रतिक्रिया समय और उसी दिन सेवा उपलब्ध" },
      { title: "एंटरप्राइज ग्रेड सपोर्ट", description: "आपकी महत्वपूर्ण कूलिंग जरूरतों के लिए 24/7 उपलब्धता" },
    ],
    statsTitle: "हैदराबाद भर में सैकड़ों लोगों द्वारा भरोसेमंद",
    statsDescription: "हैदराबाद में हमारी विश्वसनीय सेवाओं, संतुष्ट ग्राहकों और एसी समाधान प्रदान करने की प्रतिबद्धता का एक संक्षिप्त अवलोकन।",
    stats: [
      { value: 4.9, decimals: 1, label: "गूगल रेटिंग", icon: "rating" },
      { value: 500, suffix: "+", label: "संतुष्ट ग्राहक", icon: "customers" },
      { value: 10, suffix: "+", label: "सालों का अनुभव", icon: "experience" },
      { value: 24, suffix: "/7", label: "24/7 सहायता", icon: "support" },
    ],
    collaboratorsTitle: "हमारे सहयोगी",
    collaboratorsSubtitle: "ब्रांड जिनके साथ हम काम करते हैं",
    collaboratorsDescription: "रिहायशी और कमर्शियल स्पेस के लिए अग्रणी एसी ब्रांडों का भरोसेमंद सपोर्ट।",
    servicesEyebrow: "हमारी सेवाएं",
    servicesTitle: "बेहतर कवरेज के साथ पेशेवर कूलिंग सेवाएं",
    serviceCards: [
      {
        title: "एसी सर्विस और मेंटेनेंस",
        points: ["नियमित मेंटेनेंस अधिकतम कूलिंग सुनिश्चित करता है", "सफाई, फिल्टर बदलना और गैस टॉप-अप", "निवारक देखभाल के साथ महंगे रिपेयर से बचाव"],
        button: "सर्विस बुक करें"
      },
      {
        title: "एसी इंस्टॉलेशन और सेटअप",
        points: ["प्रमाणित तकनीशियनों द्वारा विशेषज्ञ इंस्टॉलेशन", "सभी प्रमुख ब्रांडों और मॉडलों के लिए सपोर्ट", "इष्टतम प्रदर्शन के लिए सही प्लेसमेंट"],
        button: "कोट लें"
      },
      {
        title: "एसी रिपेयर और समस्या निवारण",
        points: ["आपातकालीन एसी विफलताओं पर त्वरित प्रतिक्रिया", "विशेषज्ञ निदान और स्थायी समाधान", "उसी दिन सेवा उपलब्ध"],
        button: "सर्विस का अनुरोध करें"
      }
    ],
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqSubtitle: "हमारी एसी सेवाओं और समाधानों के बारे में सामान्य प्रश्नों के उत्तर पाएं।",
    blogDescription: "एसी मेंटेनेंस, इंस्टॉलेशन और दीर्घकालिक देखभाल के बारे में अधिक जानें।",
    blogSummaries: [
      "घरों और व्यवसायों के लिए व्यावहारिक एसी सेवा मार्गदर्शन।",
      "कूलिंग सिस्टम को कुशल बनाए रखने के लिए मेंटेनेंस टिप्स।",
      "सामान्य एसी समस्याओं के लिए रिपेयर-केंद्रित सलाह।",
      "एएमसी और दीर्घकालिक देखभाल की सिफारिशें।",
    ],
  },
  te: {
    heroBadge: "Google Rating 4.9",
    heroTitle: "Vyaparalu mariyu Commercial Spaces kosam Reliable AC Solutions",
    heroSummary: "Energy efficiency mariyu long-term system performance kosam end-to-end air conditioning services.",
    heroPrimaryCta: "AMC Quote Pondandi",
    heroSecondaryCta: "Service Book Cheyyandi",
    leadTitle: "Expert Consultation Pondandi",
    leadSubtitle: "Mee details share cheyyandi, maa team ventane respond avutundi.",
    leadName: "Peru",
    leadNamePlaceholder: "Mee peru",
    leadEmail: "Email",
    leadEmailPlaceholder: "Mee email",
    leadService: "Service Rakamu",
    leadServiceSelect: "Service ni ఎంచుకోండి",
    leadMessage: "Sandesham",
    leadMessagePlaceholder: "Mee avasaram gurinchi cheppandi",
    leadSubmit: "Request Pampandi",
    leadFooter: "Mee details safe ga untayi.",
    trustEyebrow: "MANA BALALU",
    trustTitle: "CUSTOMERS ENDUKU MANALNI ENCHUKUNTARU",
    trustSubtitle: "Mee comfort maa priority. Namshakyamaiana AC services tho mee illu cool ga untundi.",
    trustHighlights: [
      { title: "Experienced Technicians", description: "Professional AC services kosam trained staff" },
      { title: "Quick & Reliable Service", description: "Fast response mariyu same-day service" },
      { title: "Enterprise Grade Support", description: "Critical needs kosam 24/7 support" },
    ],
    statsTitle: "Hyderabad lo Vandala Mandi Nammakam",
    statsDescription: "Maa reliable AC solutions mariyu satisfied customers gurinchi quick overview.",
    stats: [
      { value: 4.9, decimals: 1, label: "Google Rating", icon: "rating" },
      { value: 500, suffix: "+", label: "Happy Customers", icon: "customers" },
      { value: 10, suffix: "+", label: "Years Experience", icon: "experience" },
      { value: 24, suffix: "/7", label: "24/7 Support", icon: "support" },
    ],
    collaboratorsTitle: "Mana Collaborators",
    collaboratorsSubtitle: "Memu Panichesey Brands",
    collaboratorsDescription: "Residential mariyu commercial AC brands kosam trusted support.",
    servicesEyebrow: "MANA SEVALU",
    servicesTitle: "Better Coverage tho Professional Cooling Services",
    serviceCards: [
      {
        title: "AC Service & Maintenance",
        points: ["Regular maintenance cooling ni penchutundi", "Cleaning mariyu gas top-up", "Preventive care tho repairs taggutayi"],
        button: "Service Book Cheyyandi"
      },
      {
        title: "AC Installation & Setup",
        points: ["Certified technicians tho expert installation", "Anni major brands ki support", "Optimal performance kosam perfect placement"],
        button: "Quote Pondandi"
      },
      {
        title: "AC Repair & Troubleshooting",
        points: ["Emergency failures ki fast response", "Expert diagnosis mariyu permanent solutions", "Same-day service"],
        button: "Service Request"
      }
    ],
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Maa AC services gurinchi samadhanalu telusukondi.",
    blogDescription: "AC maintenance mariyu installation gurinchi telusukondi.",
    blogSummaries: [
      "Illu mariyu business la kosam practical AC service guidance.",
      "Cooling systems efficient ga undadaniki maintenance tips.",
      "Common AC issues kosam repair-focused advice.",
      "AMC mariyu long-term care recommendations.",
    ],
  },
  ar: {
    heroBadge: "تقييم جوجل 4.9",
    heroTitle: "حلول تكييف موثوقة للأعمال والمساحات التجارية",
    heroSummary: "خدمات تكييف شاملة مصممة لضمان استمرارية العمل وكفاءة الطاقة وأداء النظام على المدى الطويل.",
    heroPrimaryCta: "احصل على عرض سعر صيانة",
    heroSecondaryCta: "احجز خدمة",
    leadTitle: "احصل على استشارة خبير",
    leadSubtitle: "شارك تفاصيلك وسيقوم فريقنا بالرد عليك فوراً.",
    leadName: "الاسم",
    leadNamePlaceholder: "اسمك",
    leadEmail: "البريد الإلكتروني",
    leadEmailPlaceholder: "بريدك الإلكتروني",
    leadService: "نوع الخدمة",
    leadServiceSelect: "اختر نوع الخدمة",
    leadMessage: "الرسالة",
    leadMessagePlaceholder: "أخبرنا عن متطلباتك",
    leadSubmit: "إرسال الطلب",
    leadFooter: "معلوماتك في أمان معنا.",
    trustEyebrow: "نقاط قوتنا",
    trustTitle: "لماذا يختارنا العملاء",
    trustSubtitle: "راحتك هي أولويتنا، مع خدمات تكييف موثوقة مصممة للحفاظ على برودة منزلك.",
    trustHighlights: [
      { title: "فنيون ذوو خبرة", description: "محترفون ماهرون لجميع خدمات التكييف" },
      { title: "خدمة سريعة وموثوقة", description: "استجابة سريعة مع توفر الخدمة في نفس اليوم" },
      { title: "دعم على مستوى المؤسسات", description: "توفر على مدار الساعة لاحتياجات التبريد الضرورية" },
    ],
    statsTitle: "موثوق بنا من قبل المئات في حيدر أباد",
    statsDescription: "نظرة سريعة على خدماتنا الموثوقة وعملائنا الراضين والتزامنا بتقديم حلول تكييف فعالة.",
    stats: [
      { value: 4.9, decimals: 1, label: "تقييم جوجل", icon: "rating" },
      { value: 500, suffix: "+", label: "عملاء سعداء", icon: "customers" },
      { value: 10, suffix: "+", label: "سنوات خبرة", icon: "experience" },
      { value: 24, suffix: "/7", label: "دعم 24/7", icon: "support" },
    ],
    collaboratorsTitle: "شركاؤنا",
    collaboratorsSubtitle: "العلامات التجارية التي نعمل معها",
    collaboratorsDescription: "دعم موثوق لعلامات التكييف الرائدة في المساحات السكنية والتجارية.",
    servicesEyebrow: "خدماتنا",
    servicesTitle: "خدمات تبريد احترافية مع تغطية أفضل",
    serviceCards: [
      {
        title: "صيانة وتنظيف المكيفات",
        points: ["الصيانة الدورية تضمن أقصى كفاءة للتبريد", "تنظيف وتغيير الفلاتر وتعبئة الغاز", "تجنب الإصلاحات المكلفة بالعناية الوقائية"],
        button: "احجز خدمة"
      },
      {
        title: "تركيب وإعداد المكيفات",
        points: ["تركيب خبير من قبل فنيين معتمدين", "دعم لجميع العلامات التجارية والموديلات", "وضع مثالي لأداء ممتاز"],
        button: "احصل على سعر"
      },
      {
        title: "إصلاح وأعطال المكيفات",
        points: ["استجابة سريعة لأعطال التكييف المفاجئة", "تشخيص خبير وحلول دائمة", "توفر الخدمة في نفس اليوم"],
        button: "اطلب خدمة"
      }
    ],
    faqTitle: "الأسئلة الشائعة",
    faqSubtitle: "اعثر على إجابات للأسئلة الشائعة حول خدماتنا.",
    blogDescription: "تعرف على المزيد حول صيانة وتركيب المكيفات.",
    blogSummaries: [
      "توجيهات عملية لخدمة المكيفات للمنازل والشركات.",
      "نصائح صيانة للحفاظ على كفاءة أنظمة التبريد.",
      "نصائح تركز على الإصلاح لمشاكل التكييف الشائعة.",
      "توصيات عقود الصيانة السنوية والرعاية طويلة الأمد.",
    ],
  },
  kn: {
    heroBadge: "ಗೂಗಲ್ ರೇಟಿಂಗ್ 4.9",
    heroTitle: "ವ್ಯವಹಾರಗಳು ಮತ್ತು ವಾಣಿಜ್ಯ ಸ್ಥಳಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಎಸಿ ಪರಿಹಾರಗಳು",
    heroSummary: "ನಿರಂತರ ಕಾರ್ಯಾಚರಣೆ ಮತ್ತು ಇಂಧನ ದಕ್ಷತೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಎಸಿ ಸೇವೆಗಳು.",
    heroPrimaryCta: "AMC ಉಲ್ಲೇಖ ಪಡೆಯಿರಿ",
    heroSecondaryCta: "ಸೇವೆ ಬುಕ್ ಮಾಡಿ",
    leadTitle: "ತಜ್ಞರ ಸಲಹೆ ಪಡೆಯಿರಿ",
    leadSubtitle: "ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ, ನಮ್ಮ ತಂಡ ಶೀಘ್ರವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ.",
    leadName: "ಹೆಸರು",
    leadNamePlaceholder: "ನಿಮ್ಮ ಹೆಸರು",
    leadEmail: "ಇಮೇಲ್",
    leadEmailPlaceholder: "ನಿಮ್ಮ ಇಮೇಲ್",
    leadService: "ಸೇವೆಯ ಪ್ರಕಾರ",
    leadServiceSelect: "ಸೇವೆಯ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    leadMessage: "ಸಂದೇಶ",
    leadMessagePlaceholder: "ನಿಮ್ಮ ಅವಶ್ಯಕತೆಯ ಬಗ್ಗೆ ತಿಳಿಸಿ",
    leadSubmit: "ವಿನಂತಿ ಸಲ್ಲಿಸಿ",
    leadFooter: "ನಿಮ್ಮ ಮಾಹಿತಿ ಸುರಕ್ಷಿತವಾಗಿದೆ.",
    trustEyebrow: "ನಮ್ಮ ಶಕ್ತಿಗಳು",
    trustTitle: "ಗ್ರಾಹಕರು ನಮ್ಮನ್ನು ಏಕೆ ಆರಿಸುತ್ತಾರೆ",
    trustSubtitle: "ನಿಮ್ಮ ಸೌಕರ್ಯವೇ ನಮ್ಮ ಆದ್ಯತೆ, ವಿಶ್ವಾಸಾರ್ಹ ಎಸಿ ಸೇವೆಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಮನೆ ತಂಪಾಗಿರುತ್ತದೆ.",
    trustHighlights: [
      { title: "ಅನುಭವಿ ತಂತ್ರಜ್ಞರು", description: "ಎಲ್ಲಾ ಎಸಿ ಸೇವೆಗಳಿಗೆ ನುರಿತ ವೃತ್ತಿಪರರು" },
      { title: "ತ್ವರಿತ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಸೇವೆ", description: "ಅದೇ ದಿನ ಸೇವೆಯ ಲಭ್ಯತೆ" },
      { title: "ಎಂಟರ್‌ಪ್ರೈಸ್ ಗ್ರೇಡ್ ಬೆಂಬಲ", description: "24/7 ಬೆಂಬಲ ಲಭ್ಯವಿದೆ" },
    ],
    statsTitle: "ಹೈದರಾಬಾದ್‌ನಾದ್ಯಂತ ನೂರಾರು ಜನರ ನಂಬಿಕೆ",
    statsDescription: "ನಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಸೇವೆಗಳು ಮತ್ತು ತೃಪ್ತ ಗ್ರಾಹಕರ ಸಂಕ್ಷಿಪ್ತ ನೋಟ.",
    stats: [
      { value: 4.9, decimals: 1, label: "ಗೂಗಲ್ ರೇಟಿಂಗ್", icon: "rating" },
      { value: 500, suffix: "+", label: "ಸಂತೋಷದ ಗ್ರಾಹಕರು", icon: "customers" },
      { value: 10, suffix: "+", label: "ವರ್ಷಗಳ ಅನುಭವ", icon: "experience" },
      { value: 24, suffix: "/7", label: "24/7 ಬೆಂಬಲ", icon: "support" },
    ],
    collaboratorsTitle: "ನಮ್ಮ ಸಹಯೋಗಿಗಳು",
    collaboratorsSubtitle: "ನಾವು ಕೆಲಸ ಮಾಡುವ ಬ್ರ್ಯಾಂಡ್ಗಳು",
    collaboratorsDescription: "ಪ್ರಮುಖ ಎಸಿ ಬ್ರ್ಯಾಂಡ್‌ಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಬೆಂಬಲ.",
    servicesEyebrow: "ನಮ್ಮ ಸೇವೆಗಳು",
    servicesTitle: "ವೃತ್ತಿಪರ ಕೂಲಿಂಗ್ ಸೇವೆಗಳು",
    serviceCards: [
      {
        title: "ಎಸಿ ಸೇವೆ ಮತ್ತು ನಿರ್ವಹಣೆ",
        points: ["ನಿಯಮಿತ ನಿರ್ವಹಣೆಯು ಉತ್ತಮ ಕೂಲಿಂಗ್ ಖಚಿತಪಡಿಸುತ್ತದೆ", "ಫಿಲ್ಟರ್ ಬದಲಾವಣೆ ಮತ್ತು ಗ್ಯಾಸ್ ಟಾಪ್-ಅಪ್", "ದುಬಾರಿ ರಿಪೇರಿ ತಡೆಯುತ್ತದೆ"],
        button: "ಸೇವೆ ಬುಕ್ ಮಾಡಿ"
      },
      {
        title: "ಎಸಿ ಸ್ಥಾಪನೆ",
        points: ["ತಜ್ಞರಿಂದ ಸ್ಥಾಪನೆ", "ಎಲ್ಲಾ ಬ್ರ್ಯಾಂಡ್‌ಗಳಿಗೆ ಬೆಂಬಲ", "ಉತ್ತಮ ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಸರಿಯಾದ ಸ್ಥಳ ಆಯ್ಕೆ"],
        button: "ಉಲ್ಲೇಖ ಪಡೆಯಿರಿ"
      },
      {
        title: "ಎಸಿ ರಿಪೇರಿ",
        points: ["ತುರ್ತು ಎಸಿ ವೈಫಲ್ಯಗಳಿಗೆ ತ್ವರಿತ ಪ್ರತಿಕ್ರಿಯೆ", "ತಜ್ಞರ ರೋಗನಿರ್ಣಯ ಮತ್ತು ಶಾಶ್ವತ ಪರಿಹಾರಗಳು", "ಅದೇ ದಿನ ಸೇವೆ"],
        button: "ಸೇವೆ ವಿನಂತಿಸಿ"
      }
    ],
    faqTitle: "ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
    faqSubtitle: "ನಮ್ಮ ಎಸಿ ಸೇವೆಗಳ ಬಗ್ಗೆ ಉತ್ತರಗಳನ್ನು ಇಲ್ಲಿ ಪಡೆಯಿರಿ.",
    blogDescription: "ಎಸಿ ನಿರ್ವಹಣೆ ಮತ್ತು ಸ್ಥಾಪನೆಯ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ.",
    blogSummaries: [
      "ಮನೆಗಳು ಮತ್ತು ವ್ಯವಹಾರಗಳಿಗೆ ಪ್ರಾಯೋಗಿಕ ಎಸಿ ಸೇವಾ ಮಾರ್ಗದರ್ಶನ.",
      "ಕೂಲಿಂಗ್ ವ್ಯವಸ್ಥೆಗಳನ್ನು ಸಮರ್ಥವಾಗಿಡಲು ನಿರ್ವಹಣಾ ಸಲಹೆಗಳು.",
      "ಸಾಮಾನ್ಯ ಎಸಿ ಸಮಸ್ಯೆಗಳಿಗೆ ರಿಪೇರಿ-ಕೇಂದ್ರಿತ ಸಲಹೆ.",
      "ಎಎಮ್‌ಸಿ ಮತ್ತು ದೀರ್ಘಕಾಲದ ಆರೈಕೆಯ ಶಿಫಾರಸುಗಳು.",
    ],
  },
  ml: {
    heroBadge: "ഗൂഗിൾ റേറ്റിംഗ് 4.9",
    heroTitle: "ബിസിനസുകൾക്കും കൊമേഴ്സ്യൽ ഇടങ്ങൾക്കും വിശ്വസനീയമായ എസി പരിഹാരങ്ങൾ",
    heroSummary: "തടസ്സമില്ലാത്ത പ്രവർത്തനം ഉറപ്പാക്കാൻ രൂപകൽപ്പന ചെയ്ത എസി സേവനങ്ങൾ.",
    heroPrimaryCta: "AMC ക്വോട്ട് നേടുക",
    heroSecondaryCta: "സർവീസ് ബുക്ക് ചെയ്യുക",
    leadTitle: "വിദഗ്ദ്ധ ഉപദേശം നേടുക",
    leadSubtitle: "നിങ്ങളുടെ വിവരങ്ങൾ പങ്കിടുക, ഞങ്ങളുടെ ടീം ഉടൻ പ്രതികരിക്കും.",
    leadName: "പേര്",
    leadNamePlaceholder: "നിങ്ങളുടെ പേര്",
    leadEmail: "ഇമെയിൽ",
    leadEmailPlaceholder: "നിങ്ങളുടെ ഇമെയിൽ",
    leadService: "സേവന തരം",
    leadServiceSelect: "സേവന തരം തിരഞ്ഞെടുക്കുക",
    leadMessage: "സന്ദേശം",
    leadMessagePlaceholder: "നിങ്ങളുടെ ആവശ്യത്തെക്കുറിച്ച് പറയുക",
    leadSubmit: "അപേക്ഷ സമർപ്പിക്കുക",
    leadFooter: "നിങ്ങളുടെ വിവരങ്ങൾ സുരക്ഷിതമാണ്.",
    trustEyebrow: "ഞങ്ങളുടെ കരുത്ത്",
    trustTitle: "എന്തുകൊണ്ട് ഉപഭോക്താക്കൾ ഞങ്ങളെ തിരഞ്ഞെടുക്കുന്നു",
    trustSubtitle: "നിങ്ങളുടെ സൗകര്യം ഞങ്ങളുടെ മുൻഗണനയാണ്.",
    trustHighlights: [
      { title: "പരിചയസമ്പന്നരായ സാങ്കേതിക വിദഗ്ധർ", description: "എല്ലാ എസി സേവനങ്ങൾക്കും വിദഗ്ദ്ധർ" },
      { title: "വേഗത്തിലുള്ള സേവനം", description: "ഒരേ ദിവസം സേവന ലഭ്യത" },
      { title: "എന്റർപ്രൈസ് ഗ്രേഡ് പിന്തുണ", description: "24/7 പിന്തുണ ലഭ്യമാണ്" },
    ],
    statsTitle: "ഹൈദരാബാദിലുടനീളം നൂറുകണക്കിന് ആളുകൾ വിശ്വസിക്കുന്നു",
    statsDescription: "ഞങ്ങളുടെ വിശ്വസനീയമായ സേവനങ്ങളെക്കുറിച്ചുള്ള ഒരു ലഘു വിവരണം.",
    stats: [
      { value: 4.9, decimals: 1, label: "ഗൂഗിൾ റേറ്റിംഗ്", icon: "rating" },
      { value: 500, suffix: "+", label: "സന്തുഷ്ടരായ ഉപഭോക്താക്കൾ", icon: "customers" },
      { value: 10, suffix: "+", label: "വർഷത്തെ പരിചയം", icon: "experience" },
      { value: 24, suffix: "/7", label: "24/7 പിന്തുണ", icon: "support" },
    ],
    collaboratorsTitle: "ഞങ്ങളുടെ സഹകാരികൾ",
    collaboratorsSubtitle: "ഞങ്ങൾ പ്രവർത്തിക്കുന്ന ബ്രാൻഡുകൾ",
    collaboratorsDescription: "പ്രമുഖ എസി ബ്രാൻഡുകൾക്ക് വിശ്വസനീയമായ പിന്തുണ.",
    servicesEyebrow: "ഞങ്ങളുടെ സേവനങ്ങൾ",
    servicesTitle: "പ്രൊഫഷണൽ കൂളിംഗ് സേവനങ്ങൾ",
    serviceCards: [
      {
        title: "എസി സർവീസ് & മെയിന്റനൻസ്",
        points: ["കൃത്യമായ മെയിന്റനൻസ് മികച്ച കൂളിംഗ് ഉറപ്പാക്കുന്നു", "ഫിൽട്ടർ മാറ്റൽ & ഗ്യാസ് ടോപ്പ്-അപ്പ്", "ചെലവേറിയ റിപ്പയർ ഒഴിവാക്കുന്നു"],
        button: "സർവീസ് ബുക്ക് ചെയ്യുക"
      },
      {
        title: "എസി ഇൻസ്റ്റാളേഷൻ",
        points: ["വിദഗ്ദ്ധ ഇൻസ്റ്റാളേഷൻ", "എല്ലാ പ്രധാന ബ്രാൻഡുകൾക്കും പിന്തുണ", "മികച്ച പ്രകടനത്തിനായി ശരിയായ സ്ഥാനം"],
        button: "ക്വോട്ട് നേടുക"
      },
      {
        title: "എസി റിപ്പയർ",
        points: ["അടിയന്തിര എസി പരാജയങ്ങൾക്ക് വേഗത്തിലുള്ള പ്രതികരണം", "വിദഗ്ദ്ധ രോഗനിർണ്ണയവും ശാശ്വത പരിഹാരങ്ങളും", "ഒരേ ദിവസം സേവനം"],
        button: "സർവീസ് അഭ്യർത്ഥിക്കുക"
      }
    ],
    faqTitle: "പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ",
    faqSubtitle: "ഞങ്ങളുടെ എസി സേവനങ്ങളെക്കുറിച്ചുള്ള ഉത്തരങ്ങൾ ഇവിടെ കണ്ടെത്തുക.",
    blogTitle: "പുതിയ ലേഖനങ്ങൾ",
    blogSubtitle: "സഹായകരമായ നുറുങ്ങുകളും വിഭവങ്ങളും",
    blogDescription: "എസി മെയിന്റനൻസിനെക്കുറിച്ച് കൂടുതൽ അറിയുക.",
    blogSummaries: [
      "വീടുകൾക്കും ബിസിനസുകൾക്കും പ്രായോഗിക എസി സർവീസ് മാർഗ്ഗനിർദ്ദേശം.",
      "കൂളിംഗ് സിസ്റ്റങ്ങൾ കാര്യക്ഷമമായി നിലനിർത്താൻ മെയിന്റനൻസ് നുറുങ്ങുകൾ.",
      "സാധാരണ എസി പ്രശ്നങ്ങൾക്കുള്ള റിപ്പയർ ഉപദേശങ്ങൾ.",
      "എഎംസി, ദീർഘകാല പരിചരണ ശുപാർശകൾ.",
    ],
  },
  ta: {
    heroBadge: "கூகிள் மதிப்பீடு 4.9",
    heroTitle: "வணிகங்கள் மற்றும் வணிக இடங்களுக்கான நம்பகமான ஏசி தீர்வுகள்",
    heroSummary: "தடையற்ற செயல்பாட்டை உறுதிப்படுத்த வடிவமைக்கப்பட்ட ஏசி சேவைகள்.",
    heroPrimaryCta: "AMC மேற்கோள் பெறவும்",
    heroSecondaryCta: "சேவை முன்பதிவு",
    leadTitle: "நிபுணர் ஆலோசனை பெறவும்",
    leadSubtitle: "உங்கள் விவரங்களைப் பகிரவும், எங்கள் குழு உடனடியாக பதிலளிக்கும்.",
    leadName: "பெயர்",
    leadNamePlaceholder: "உங்கள் பெயர்",
    leadEmail: "மின்னஞ்சல்",
    leadEmailPlaceholder: "உங்கள் மின்னஞ்சல்",
    leadService: "சேவை வகை",
    leadServiceSelect: "சேவை வகையைத் தேர்ந்தெடுக்கவும்",
    leadMessage: "செய்தி",
    leadMessagePlaceholder: "உங்கள் தேவையைப் பற்றி சொல்லுங்கள்",
    leadSubmit: "கோரிக்கையைச் சமர்ப்பிக்கவும்",
    leadFooter: "உங்கள் தகவல்கள் எங்களிடம் பாதுகாப்பாக உள்ளன.",
    trustEyebrow: "எங்கள் பலம்",
    trustTitle: "வாடிக்கையாளர்கள் ஏன் எங்களைத் தேர்ந்தெடுக்கிறார்கள்",
    trustSubtitle: "உங்கள் வசதியே எங்கள் முன்னுரிமை.",
    trustHighlights: [
      { title: "அனுபவம் வாய்ந்த தொழில்நுட்ப வல்லுநர்கள்", description: "அனைத்து ஏசி சேவைகளுக்கும் திறமையான வல்லுநர்கள்" },
      { title: "விரைவான மற்றும் நம்பகமான சேவை", description: "ஒரே நாளில் சேவை கிடைக்கும்" },
      { title: "நிறுவன தர ஆதரவு", description: "24/7 ஆதரவு கிடைக்கிறது" },
    ],
    statsTitle: "ஹைதராபாத் முழுவதும் நூற்றுக்கணக்கானோர் நம்புகிறார்கள்",
    statsDescription: "எங்கள் நம்பகமான சேவைகளைப் பற்றிய விரைவான கண்ணோட்டம்.",
    stats: [
      { value: 4.9, decimals: 1, label: "கூகிள் மதிப்பீடு", icon: "rating" },
      { value: 500, suffix: "+", label: "மகிழ்ச்சியான வாடிக்கையாளர்கள்", icon: "customers" },
      { value: 10, suffix: "+", label: "வருட அனுபவம்", icon: "experience" },
      { value: 24, suffix: "/7", label: "24/7 ஆதரவு", icon: "support" },
    ],
    collaboratorsTitle: "எங்கள் கூட்டாளர்கள்",
    collaboratorsSubtitle: "நாங்கள் பணிபுரியும் பிராண்டுகள்",
    collaboratorsDescription: "முன்னணி ஏசி பிராண்டுகளுக்கு நம்பகமான ஆதரவு.",
    servicesEyebrow: "எங்கள் சேவைகள்",
    servicesTitle: "தொழில்முறை குளிர்ச்சி சேவைகள்",
    serviceCards: [
      {
        title: "ஏசி சேவை மற்றும் பராமரிப்பு",
        points: ["வழக்கமான பராமரிப்பு சிறந்த குளிர்ச்சியை உறுதி செய்கிறது", "வடிகட்டி மாற்றுதல் & எரிவாயு நிரப்புதல்", "விலையுயர்ந்த பழுதுபார்ப்பைத் தவிர்க்கிறது"],
        button: "சேவை முன்பதிவு"
      },
      {
        title: "ஏசி நிறுவல்",
        points: ["நிபுணர் நிறுவல்", "அனைத்து பிராண்டுகளுக்கும் ஆதரவு", "சிறந்த செயல்திறனுக்கான சரியான இடம்"],
        button: "மேற்கோள் பெறவும்"
      },
      {
        title: "ஏசி பழுதுபார்ப்பு",
        points: ["ஏசி தோல்விகளுக்கு விரைவான பதில்", "நிபுணர் கண்டறிதல் மற்றும் நிரந்தர தீர்வுகள்", "ஒரே நாளில் சேவை"],
        button: "சேவையை கோருங்கள்"
      }
    ],
    faqTitle: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    faqSubtitle: "எங்கள் ஏசி சேவைகள் பற்றிய பதில்களை இங்கே காணலாம்.",
    blogDescription: "ஏசி பராமரிப்பு மற்றும் நிறுவல் பற்றி மேலும் அறிக.",
    blogSummaries: [
      "வீடுகள் மற்றும் வணிகங்களுக்கான நடைமுறை ஏசி சேவை வழிகாட்டுதல்.",
      "குளிர்ச்சி அமைப்புகளை திறமையாக வைத்திருக்க பராமரிப்பு குறிப்புகள்.",
      "பொதுவான ஏசி பிரச்சனைகளுக்கான பழுதுபார்ப்பு ஆலோசனை.",
      "ஏஎம்சி மற்றும் நீண்ட கால பராமரிப்பு பரிந்துரைகள்.",
    ],
  },
};

const utilitySocialIcons = {
  Facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H16.7V4.6c-.3-.04-1.33-.12-2.53-.12-2.5 0-4.22 1.53-4.22 4.35v2.01H7.1V14h2.84v8h3.56Z" fill="currentColor" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm8.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="currentColor" />
    </svg>
  ),
  WhatsApp: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.4A10 10 0 1 0 12 2Zm5.8 14.2c-.24.68-1.2 1.25-1.98 1.41-.53.11-1.23.2-3.58-.77-3.01-1.25-4.95-4.32-5.1-4.52-.15-.2-1.22-1.62-1.22-3.09s.77-2.19 1.04-2.49c.27-.3.6-.38.8-.38h.58c.19 0 .45-.08.7.52.26.62.89 2.14.97 2.3.08.16.13.35.03.56-.1.2-.15.32-.29.5-.14.18-.3.39-.43.52-.14.14-.29.29-.12.59.17.3.74 1.22 1.6 1.98 1.11.99 2.04 1.29 2.34 1.44.3.15.48.13.66-.08.18-.21.77-.89.98-1.19.21-.3.41-.25.69-.15.28.1 1.77.84 2.08 1 .31.16.51.24.59.38.08.14.08.82-.16 1.5Z" fill="currentColor" />
    </svg>
  ),
};

function Home() {
  const { language } = useAppPreferences();
  const siteContent = getLocalizedSiteContent(language);
  const copy = homeCopyByLanguage[language] ?? homeCopyByLanguage.en;

  const statsLocaleByLanguage = {
    en: "en-IN",
    hi: "hi-IN",
    te: "te-IN",
    ar: "ar-EG",
    kn: "kn-IN",
    ml: "ml-IN",
    ta: "ta-IN",
  };

  const localizedServiceCards = copy.serviceCards.map((card, index) => {
    const original = modernServiceCards[index];
    return {
      ...original,
      ...card,
    };
  });

  const localizedTrustIndicators = enterpriseTrustIndicators[language] ?? enterpriseTrustIndicators.en;
  const localizedServiceTypes = heroServiceTypes[language] ?? heroServiceTypes.en;

  const trustHighlights = copy.trustHighlights.map((item, index) => ({
    ...item,
    icon: trustHighlightIcons[index] ?? trustHighlightIcons[0],
  }));

  const blogPosts =
    Array.isArray(siteContent.blogPosts) && siteContent.blogPosts.length
      ? siteContent.blogPosts
      : siteContent.blogTitles.map((title) => ({ title, href: null }));

  const blogImageOverrides = [
    null,
    "/images/AC Service & Maintenance.jpg",
    "/images/AC services.jpg",
    "/images/AC repair.jpg",
  ];

  const blogLinks = blogPosts
    .filter((post) => typeof post?.title === "string" && post.title.trim().length > 0)
    .map((post, index) => {
      const matchedBlog = blogs[index] ?? null;
      const slug = matchedBlog?.slug ?? null;
      const cardPreset = getBlogCardPreset({ ...post, slug }, index);

      return {
        ...post,
        slug,
        ...blogCardDefaults,
        ...cardPreset,
        image: blogImageOverrides[index] ?? cardPreset.image ?? blogCardDefaults.image,
      };
    });

  const resourceCardMedia = [
    {
      image: "/images/AC%20services.jpg",
      imagePosition: "center",
      summary: copy.blogSummaries?.[0] ?? "Practical AC service guidance for homes and businesses.",
    },
    {
      image: "/images/AC%20Service%20%26%20Maintenance.jpg",
      imagePosition: "center",
      summary: copy.blogSummaries?.[1] ?? "Maintenance tips to keep cooling systems efficient.",
    },
    {
      image: "/images/AC%20repair.jpg",
      imagePosition: "center",
      summary: copy.blogSummaries?.[2] ?? "Repair-focused advice for common AC issues.",
    },
    {
      image: "/images/Annual%20Maintenance%20Contracts.jpg",
      imagePosition: "center",
      summary: copy.blogSummaries?.[3] ?? "AMC and long-term care recommendations.",
    },
  ];

  const resourceCards = Array.from({ length: 4 }, (_, index) => {
    const post = blogLinks[index] ?? blogs[index] ?? null;

    if (!post) {
      return null;
    }

    const media = resourceCardMedia[index % resourceCardMedia.length];

    return {
      ...post,
      image: media.image,
      imagePosition: media.imagePosition,
      summary: media.summary,
    };
  }).filter(Boolean);

  return (
    <>
      <div className="home-page home-page--modern">
      <section
        className="home-modern-hero home-modern-hero--split"
        style={{
          backgroundImage: `url("${heroBackground}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="home-modern-hero__left">

          <div className="home-modern-hero__content">
            <p className="home-modern-hero__badge">{copy.heroBadge}</p>
            <h1 className="home-modern-hero__title">{copy.heroTitle}</h1>

            <p className="home-modern-hero__summary">
              {copy.heroSummary}
            </p>

            <div className="home-modern-hero__actions">
              <Link className="home-modern-button home-modern-button--primary" to="/contact">
                {copy.heroPrimaryCta}
              </Link>
              <Link className="home-modern-button home-modern-button--secondary" to="/book-service">
                {copy.heroSecondaryCta}
              </Link>
            </div>

            <ul className="home-modern-hero__trust-indicators" aria-label="Business trust indicators">
              {localizedTrustIndicators.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>

        <div className="home-modern-hero__right">
          <form className="home-lead-card" onSubmit={(event) => event.preventDefault()}>
            <div className="home-lead-card__header">
              <h2>{copy.leadTitle}</h2>
              <p>{copy.leadSubtitle}</p>
            </div>

            <div className="home-lead-card__grid">
              <label>
                {copy.leadName}
                <input type="text" name="name" placeholder={copy.leadNamePlaceholder} required />
              </label>

              <label>
                {copy.leadEmail}
                <input type="email" name="email" placeholder={copy.leadEmailPlaceholder} required />
              </label>

              <label className="home-lead-card__full">
                {copy.leadService}
                <select name="serviceType" defaultValue="" required>
                  <option value="" disabled>
                    {copy.leadServiceSelect}
                  </option>
                  {localizedServiceTypes.map((serviceType) => (
                    <option key={serviceType} value={serviceType}>
                      {serviceType}
                    </option>
                  ))}
                </select>
              </label>

              <label className="home-lead-card__full">
                {copy.leadMessage}
                <textarea name="message" rows="4" placeholder={copy.leadMessagePlaceholder} />
              </label>
            </div>

            <button type="submit">{copy.leadSubmit}</button>
            <small>{copy.leadFooter}</small>
          </form>
        </div>
      </section>

      <section className="home-trust-section home-reveal home-reveal-delay-1" data-reveal>
        <header className="home-trust-section__header">
          <p className="home-trust-section__eyebrow">{copy.trustEyebrow}</p>
          <h2 className="home-trust-section__title">{copy.trustTitle}</h2>
          {copy.trustSubtitle ? <p className="home-trust-section__subtitle">{copy.trustSubtitle}</p> : null}
        </header>

        <div className="home-trust-grid">
          {trustHighlights.map((item, index) => (
            <article key={item.title} className="home-trust-card">
              <span className="home-trust-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>

              {index === 2 ? (
                <p className="home-trust-card__stars" aria-label={copy.starAria}>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </p>
              ) : null}

              <p>{item.description}</p>
            </article>
          ))}
        </div>

      </section>

      <AnimatedStats
        eyebrow={copy.statsEyebrow}
        title={copy.statsTitle}
        description={copy.statsDescription}
        stats={copy.stats}
        locale={statsLocaleByLanguage[language] ?? "en-IN"}
      />

      <HomeSection
        className="home-modern-section--collaborators"
        revealClass="home-reveal-delay-1"
      >
        <header className="home-collaborators__header">
          <h2 className="home-collaborators__heading">{copy.collaboratorsTitle}</h2>
          <p className="home-collaborators__subheading">{copy.collaboratorsSubtitle}</p>
          <p className="home-collaborators__description">{copy.collaboratorsDescription}</p>
        </header>

        <div className="home-trusted-by__layout">
          <div className="home-trusted-by__left">
            <div className="home-trusted-by__logos" aria-label={copy.collaboratorsTitle}>
              {partnerBrands.map((brand, index) => (
                <HomeCard
                  key={brand.name}
                  className="home-modern-logo-card home-trusted-by__logo-card"
                  revealClass={revealDelayClass(index + 1)}
                >
                  <img className="home-modern-logo-card__image" src={brand.logo} alt={`${brand.name} logo`} loading="lazy" />
                </HomeCard>
              ))}
            </div>
          </div>

          <div className="home-trusted-by__media">
            <img src="/images/AC%20services.jpg" alt="Technician servicing an AC system" loading="lazy" />
          </div>
        </div>
      </HomeSection>

      <HomeSection
        id="services"
        eyebrow={copy.servicesEyebrow}
        title={copy.servicesTitle}
        revealClass="home-reveal-delay-1"
      >
        <div className="services-grid services-grid--modern">
          {localizedServiceCards.map((service, index) => (
            <article key={service.title} className={`service-card service-card--modern home-reveal ${revealDelayClass(index + 1)}`} data-reveal>
              <div className="service-card__image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-card__image"
                  style={{ objectPosition: service.imagePosition ?? "center" }}
                  loading="lazy"
                />
                <div className="service-card__image-overlay"></div>
              </div>
              
              <div className="service-card__content">
                <h3 className="service-card__title">{service.title}</h3>
                
                <ul className="service-card__points">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="service-card__point">
                      <span className="service-card__point-icon">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                
                <Link to={service.link} className="service-card__button">
                  {service.button}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </HomeSection>

      <div className="home-modern-block home-reveal home-reveal-delay-1" data-reveal>
        <Testimonials />
      </div>

      <HomeSection
        className="home-modern-section--articles"
        eyebrow={copy.blogTitle}
        title={copy.blogSubtitle}
        description={copy.blogDescription}
        revealClass="home-reveal-delay-1"
      >
        <div className="home-modern-grid home-modern-grid--blog">
          {blogLinks.map((post, index) => (
            <HomeCard key={post.title} className="home-modern-blog-card" revealClass={revealDelayClass(index + 1)}>
              <div className="home-modern-blog-card__media">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>

              <div className="home-modern-blog-card__content">
                <span className="home-modern-blog-tag">{post.category}</span>
                <h3>{post.title}</h3>
                <p className="home-modern-blog-meta">{post.meta}</p>

                <Link className="home-modern-blog-link" to={post.slug ? `/blog/${post.slug}` : "/blog"}>
                  {post.ctaLabel}
                </Link>
              </div>
            </HomeCard>
          ))}
        </div>

      </HomeSection>

      <HomeFaqAccordion
        items={siteContent.faqItems}
        eyebrow={copy.faqEyebrow}
        title={copy.faqTitle}
        subtitle={copy.faqSubtitle}
      />

            </div>
      <Footer />
    </>
  );
}

export default Home;
  