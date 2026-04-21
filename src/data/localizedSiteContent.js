import { siteContent as baseSiteContent } from "./siteContent";

const localizedOverrides = {
  hi: {
    businessName: "हैदराबाद एसी सर्विसेज",
    siteTitle: "हैदराबाद की सर्वश्रेष्ठ एयर कंडीशनिंग कंपनी",
    location: "हैदराबाद, भारत",
    workingHours: "सुबह 9 बजे - रात 9 बजे",
    serviceChargeNote: "सभी सेवाएं शुल्कयोग्य हैं",
    companyDescription: [
      "हैदराबाद की अग्रणी एसी सर्विस कंपनियों में से एक के रूप में, हम घर, ऑफिस, कमर्शियल स्पेस और इंडस्ट्री के लिए उच्च गुणवत्ता वाली एयर कंडीशनिंग सेवाएं प्रदान करते हैं। हमारी प्रशिक्षित और प्रमाणित एचवीएसी टीम हर इंस्टॉलेशन और सर्विस को सटीकता के साथ पूरा करती है।",
      "चाहे आपको घर के लिए भरोसेमंद एसी तकनीशियन चाहिए हों या व्यवसाय के लिए अनुभवी एचवीएसी सपोर्ट, हैदराबाद एसी सर्विसेज पूरे शहर में पेशेवर और प्रभावी कूलिंग समाधान का विश्वसनीय साथी है।",
    ],
    contactPageDescription: [
      "हमारी एसी रिपेयर सेवाएं पेशेवर रूप से प्रशिक्षित एचवीएसी तकनीशियनों द्वारा की जाती हैं। अनुभव, सही टूल्स और नवीनतम तकनीक की मदद से हम अधिकतर समस्याएं पहली विजिट में ही हल करने की कोशिश करते हैं। हर रिपेयर सेवा लिखित आश्वासन के साथ दी जाती है।",
      "हैदराबाद एसी सर्विसेज एसी इंस्टॉलेशन, रिपेयर और मेंटेनेंस के लिए आपकी भरोसेमंद पहली पसंद है।",
    ],
    serviceOptions: [
      "एसी रिपेयर",
      "एसी सर्विस",
      "एसी इंस्टॉलेशन",
      "एसी अनइंस्टॉलेशन",
      "एएमसी",
      "एग्जॉस्ट",
      "डक्टिंग",
    ],
    highlightedServices: [
      "एसी सर्विस हैदराबाद",
      "एसी इंस्टॉलेशन हैदराबाद",
      "एसी रिपेयर हैदराबाद",
    ],
    airConditioningServices: [
      "एसी सर्विस",
      "सेंट्रलाइज़्ड एयर कंडीशनिंग",
      "कॉपर पाइप प्लानिंग",
      "डक्टिंग",
      "एसी गैस लीक",
      "एसी इंस्टॉलेशन",
      "एसी रिपेयर",
      "एसी स्क्रैप",
      "एयर कर्टेन",
    ],
    exhaustServices: [
      "एएमसी",
      "रेस्टोरेंट एग्जॉस्ट इंस्टॉलेशन",
      "बेसमेंट एग्जॉस्ट",
      "रेस्टोरेंट एग्जॉस्ट क्लीनिंग",
    ],
    faqItems: [
      {
        question: "मेरा एसी ठंडा क्यों नहीं कर रहा है?",
        answer: [
          "सबसे पहले रिमोट की सेटिंग जांचें। अक्सर एसी को सर्विस और सफाई की जरूरत होती है। गैस प्रेशर कम हो तो गैस टॉप-अप करना पड़ता है।",
          "दूसरा कारण खराब कैपेसिटर हो सकता है। कैपेसिटर खराब होने पर कंप्रेसर शुरू नहीं होता।",
          "तीसरा कारण आउटडोर यूनिट के फैन मोटर में समस्या भी हो सकता है।",
        ],
      },
      {
        question: "कितने टन का एसी चाहिए?",
        answer: [
          "एसी की क्षमता कमरे के आकार और उपयोग पर निर्भर करती है। सामान्य रिहायशी कमरे के लिए 1 टन एसी लगभग 150 वर्ग फुट तक उपयुक्त रहता है।",
          "सामान्य नियम के अनुसार 130-160 वर्ग फुट क्षेत्र के लिए 1 टन एसी लिया जाता है।",
        ],
      },
      {
        question: "एसी की सर्विस कितनी बार करवानी चाहिए?",
        answer: [
          "सामान्य घरों में हर 6 महीने में एक बार सर्विस करवाना उचित है। धूलभरे वातावरण या ज्यादा उपयोग होने पर 3-4 महीने में सर्विस बेहतर रहती है।",
          "रूटीन सर्विस में फिल्टर सफाई, कॉइल जांच, ड्रेन लाइन जांच और गैस प्रेशर जांच शामिल होती है।",
        ],
      },
      {
        question: "इंडोर यूनिट से पानी क्यों टपकता है?",
        answer: [
          "ड्रेन पाइप ब्लॉक होने, फिल्टर गंदे होने, इंस्टॉलेशन का ढलान गलत होने या कॉइल जमने की वजह से पानी लीक होता है।",
          "टेक्नीशियन ड्रेन लाइन साफ करके, इंसुलेशन और अलाइनमेंट जांचकर समस्या हल करता है।",
        ],
      },
      {
        question: "एसी में गैस रिफिल कब करनी चाहिए?",
        answer: [
          "एसी गैस नियमित रूप से खत्म होने वाली चीज नहीं है। कूलिंग कम हो और गैस लेवल कम मिले तो आमतौर पर पहले लीक को ठीक करना जरूरी होता है।",
          "संकेत: कूलिंग कमजोर होना, कॉइल पर बर्फ जमना, सीटी जैसी आवाज आना, कंप्रेसर का ज्यादा देर चलना।",
        ],
      },
      {
        question: "एएमसी क्या है और क्या यह उपयोगी है?",
        answer: [
          "एएमसी का मतलब वार्षिक मेंटेनेंस कॉन्ट्रैक्ट है। इसमें तय समय पर सर्विस और प्रिवेंटिव जांच शामिल होती है।",
          "एएमसी से प्रदर्शन बेहतर होता है, एसी की उम्र बढ़ती है और आपातकालीन रिपेयर का खर्च कम होता है।",
        ],
      },
      {
        question: "स्प्लिट एसी इंस्टॉलेशन में कितना समय लगता है?",
        answer: [
          "मानक स्प्लिट एसी इंस्टॉलेशन में सामान्यतः 2 से 4 घंटे लगते हैं, जो साइट की स्थिति पर निर्भर करता है।",
          "अतिरिक्त ड्रिलिंग, लंबी पाइपिंग या ब्रैकेट बदलाव होने पर समय बढ़ सकता है।",
        ],
      },
      {
        question: "क्या नियमित सर्विस से बिजली का बिल कम होता है?",
        answer: [
          "हां, साफ फिल्टर और सही गैस प्रेशर कंप्रेसर पर लोड कम करते हैं, जिससे बिजली की खपत घटती है।",
          "सर्विस न कराने पर एसी को ज्यादा मेहनत करनी पड़ती है और बिल बढ़ जाता है।",
        ],
      },
    ],
    blogTitles: [
      "कॉपर पाइप प्री-इंस्टॉलेशन के फायदे",
      "एसी गैस लीकेज से बचाव",
      "सही एसी इंस्टॉलेशन का महत्व",
      "नियमित एसी सर्विस का महत्व",
    ],
    blogPosts: [
      {
        title: "कॉपर पाइप प्री-इंस्टॉलेशन के फायदे",
        href: "https://hyderabadacservices.com/blog1.php",
      },
      {
        title: "एसी गैस लीकेज से बचाव",
        href: "https://hyderabadacservices.com/blog2.php",
      },
      {
        title: "सही एसी इंस्टॉलेशन का महत्व",
        href: "https://hyderabadacservices.com/blog3.php",
      },
      {
        title: "नियमित एसी सर्विस का महत्व",
        href: "https://hyderabadacservices.com/blog4.php",
      },
    ],
  },
  te: {
    companyDescription: [
      "Hyderabad lo best AC service companies lo okati ga, memu illu, office, commercial mariyu industrial spaces kosam high-quality air conditioning services istamu. Mana certified HVAC team accurate installation mariyu reliable service andistundi.",
      "Mee intiki AC contractor kavali leda business kosam HVAC support kavali ante Hyderabad AC Services city motham meeda trusted cooling partner.",
    ],
    contactPageDescription: [
      "Mana AC repair services qualified HVAC technicians dwara chestamu. Experience, tools mariyu latest technology tho first visit lone problem solve cheyyadaniki prayatnam chestamu. Mana repairs writing guarantee tho untayi.",
      "Hyderabad AC Services AC installation, service mariyu maintenance kosam trusted first choice.",
    ],
    serviceOptions: [
      "AC Repair",
      "AC Service",
      "AC Installation",
      "AC Uninstallation",
      "AMC",
      "Exhaust",
      "Ducting",
    ],
    highlightedServices: [
      "AC Service Hyderabad",
      "AC Installation Hyderabad",
      "AC Repair Hyderabad",
    ],
    airConditioningServices: [
      "AC Service",
      "Centralized Air Conditioning",
      "Copper Pipe Planning",
      "Ducting",
      "AC Gas Leak",
      "AC Installation",
      "AC Repair",
      "AC Scrap",
      "Air Curtain",
    ],
    exhaustServices: [
      "AMC",
      "Restaurant Exhaust Installation",
      "Basement Exhaust",
      "Restaurant Exhaust Cleaning",
    ],
    faqItems: [
      {
        question: "NA AC COOLING ENDUKU TAGGINDI?",
        answer: [
          "Munduga remote settings check cheyyandi. Chala saarlu AC ki service mariyu cleaning avasaram untundi. Gas pressure takkuva unte gas top-up cheyyali.",
          "Inko reason capacitor problem. Capacitor faulty ayite compressor start avadu.",
          "Outdoor unit fan motor issue valla kuda cooling taggachu.",
        ],
      },
      {
        question: "ENTHA TON AC KAVALI?",
        answer: [
          "AC ton room size mariyu usage meeda depend avuthundi. Residential 150 sq ft room kosam 1 ton AC usually saripotundi.",
          "General thumb rule prakaram 130-160 sq ft area ki 1 ton AC consider chestaru.",
        ],
      },
      {
        question: "AC SERVICE ENTHA INTERVAL LO CHEYYALI?",
        answer: [
          "Normal ga 6 months ki okasari service recommended. Dust ekkuva environment lo 3-4 months ki service better.",
          "Routine maintenance lo filter cleaning, coil inspection, drain line check mariyu gas pressure check untayi.",
        ],
      },
      {
        question: "INDOOR UNIT NUNCHI WATER LEAK ENDUKU?",
        answer: [
          "Blocked drain pipe, dirty filters, wrong installation slope leda frozen coils valla water leak avuthundi.",
          "Technician drain line clean chesi, insulation mariyu alignment correct chestadu.",
        ],
      },
      {
        question: "AC KI GAS REFILL EPPUDU AVASARAM?",
        answer: [
          "AC gas regular ga taggadu. Cooling weak ayite leak undochu; mundu leak fix chesi tarvata refill cheyyali.",
          "Signs: weak cooling, coils meeda ice, hissing sound, compressor ekkuva sepu run avadam.",
        ],
      },
      {
        question: "AMC ANTE EMI? ADI USEFUL AA?",
        answer: [
          "AMC ante Annual Maintenance Contract. Regular service mariyu preventive checks untayi.",
          "AMC tho AC performance improve avuthundi, life increase avuthundi, emergency repair costs taggutayi.",
        ],
      },
      {
        question: "SPLIT AC INSTALLATION KI ENTHA TIME?",
        answer: [
          "Standard split AC installation ki 2-4 hours padutayi, site conditions meeda depend avuthundi.",
          "Extra drilling, long piping leda bracket changes unte time inkonchem perugutundi.",
        ],
      },
      {
        question: "REGULAR SERVICE TO CURRENT BILL TAGGUTUNDA?",
        answer: [
          "Avunu. Clean filters mariyu correct gas pressure compressor load tagginchi power usage ni reduce chestayi.",
          "Service miss ayite AC hard ga work chesi electricity bill peruguthundi.",
        ],
      },
    ],
    blogTitles: [
      "Copper Pipe Pre-Installation Prayojanalu",
      "AC Gas Leakage Nivarana",
      "Sariyana AC Installation Pramukhyata",
      "Regular AC Service Pramukhyata",
    ],
    blogPosts: [
      {
        title: "Copper Pipe Pre-Installation Prayojanalu",
        href: "https://hyderabadacservices.com/blog1.php",
      },
      {
        title: "AC Gas Leakage Nivarana",
        href: "https://hyderabadacservices.com/blog2.php",
      },
      {
        title: "Sariyana AC Installation Pramukhyata",
        href: "https://hyderabadacservices.com/blog3.php",
      },
      {
        title: "Regular AC Service Pramukhyata",
        href: "https://hyderabadacservices.com/blog4.php",
      },
    ],
  },
};

function getLocalizedSiteContent(language) {
  const localizedContent = localizedOverrides[language];

  if (!localizedContent) {
    return baseSiteContent;
  }

  return {
    ...baseSiteContent,
    ...localizedContent,
  };
}

export { getLocalizedSiteContent };
