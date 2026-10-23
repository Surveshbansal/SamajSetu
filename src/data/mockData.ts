import { 
  SamajProfile, 
  SamajPost, 
  SamajMember, 
  SevaProject, 
  SamajEvent, 
  MatrimonialProfile,
  BusinessOpportunity,
  OfficeBearer
} from '../types';

export const initialDhanukOfficeBearers: OfficeBearer[] = [
  {
    name: 'मान. डालचंद बरदेले जी',
    role: 'प्रदेश कार्यवाहक अध्यक्ष, सागर',
    phone: '+91 99070 61661',
    city: 'सागर, मध्य प्रदेश',
    isChiefGuest: true
  },
  {
    name: 'मान. सुखदेव सिंह कैथोरा जी',
    role: 'संभागीय संगठन मंत्री',
    city: 'सागर संभाग',
    isChiefGuest: false
  },
  {
    name: 'मान. टीकाराम धानुक जी',
    role: 'जिलाध्यक्ष, सागर',
    city: 'सागर, मध्य प्रदेश',
    isChiefGuest: false
  },
  {
    name: 'मान. लालजू सचिव जी',
    role: 'जिला उपाध्यक्ष, सागर',
    city: 'सागर, मध्य प्रदेश',
    isChiefGuest: false
  },
  {
    name: 'मान. रजनी बमनेले जी',
    role: 'महिला मोर्चा अध्यक्ष, जिला सागर',
    city: 'सागर, मध्य प्रदेश',
    isChiefGuest: false
  },
  {
    name: 'मान. रोशन बंसल जी',
    role: 'नगर अध्यक्ष, सागर',
    city: 'सागर नगर, मध्य प्रदेश',
    isChiefGuest: false
  },
  {
    name: 'मान. प्रवीण धानक जी',
    role: 'ब्लॉक अध्यक्ष, सागर',
    city: 'सागर ब्लॉक, मध्य प्रदेश',
    isChiefGuest: false
  },
  {
    name: 'मान. पप्पू बंसल जी',
    role: 'तहसील अध्यक्ष, सागर',
    city: 'सागर तहसील, मध्य प्रदेश',
    isChiefGuest: false
  },
  {
    name: 'मान. विनोद बंसल जी',
    role: 'ब्लॉक अध्यक्ष, मल्थोन',
    city: 'मल्थोन, सागर',
    isChiefGuest: false
  },
  {
    name: 'मान. गोविंद बंसल जी',
    role: 'ब्लॉक अध्यक्ष, बांदरी',
    city: 'बांदरी, सागर',
    isChiefGuest: false
  },
  {
    name: 'मान. दिलीप संदेला जी',
    role: 'जिला मीडिया प्रभारी, सागर',
    city: 'सागर, मध्य प्रदेश',
    isChiefGuest: false
  },
  {
    name: 'मान. अभिषेक बंसल जी',
    role: 'महामंत्री, संगठन',
    city: 'सागर, मध्य प्रदेश',
    isChiefGuest: false
  },
  {
    name: 'मान. गौतम मौर्य जी',
    role: 'संगठन मंत्री, जिला सागर',
    city: 'सागर, मध्य प्रदेश',
    isChiefGuest: false
  },
  {
    name: 'सूरज बंसल',
    role: 'सोशल मीडिया एवं डेवलपमेंट ऐप (डिजिटल समाज प्रमुख)',
    phone: '+91 9111206326',
    city: 'सागर, मध्य प्रदेश',
    isChiefGuest: false
  }
];

export const officialSocialLinks = {
  facebook: 'https://www.facebook.com/share/1Fg4rvDmKE/',
  youtube: 'https://youtube.com/shorts/FunDooV5Ig0?si=rx0_pQUy90OrPd-L',
  instagram: 'https://www.instagram.com/sama.jsetu?xtok=bXM5emdkcGF5dWxi',
  whatsapp: 'https://chat.whatsapp.com/IATXtm7so0i4dTt4O51alM?s=cl&p=a&mlu=4&ilr=4'
};

export const initialSamajProfile: SamajProfile = {
  id: 'dhanuk-samaj-mp',
  name: 'अखिल भारतीय धानुक समाज संगठन, मध्य प्रदेश',
  tagline: 'संगठित समाज, समर्थ समाज — परंपरा, एकता, स्वाभिमान एवं डिजिटल समाज निर्माण',
  motto: '🙏 जय महाराज धनक ऋषि · 🙏 जय माँ कुलदेवी · संघे शक्ति कलियुगे',
  historyText: 'धानक / धानुक समाज का इतिहास त्याग, तपस्या, धनुर्वेद (धनुर्विद्या), श्रम निष्ठा एवं राष्ट्रभक्ति की पावन सनातन वैदिक परंपरा से ओत-प्रोत है। संस्कृत व्याकरण के अनुसार "धानुक" या "धानक" शब्द की व्युत्पत्ति "धन्वी" (धनुष धारण करने वाले) और "धानुष्क" (कुशल धनुर्धर योद्धा) से हुई है। हमारे समाज के आदि प्रवर्तक परम पूज्य महाराज धनक ऋषि जी महाराज ने धर्म, स्वाभिमान, विद्या, न्याय और तपोबल का मार्ग दिखाया। रामायण व महाभारत काल से लेकर मध्यकाल में बुंदेलखंड (सागर, मल्थोन, बांदरी, राहतगढ़, गढ़ाकोटा, दमोह, छतरपुर) एवं मालवा की रियासतों में धानक समाज बंधुओं ने दुर्ग-रक्षक, सेनापति और कुशल धनुर्धरों के रूप में अतुलनीय शौर्य का परिचय दिया। 1857 के स्वाधीनता संग्राम में समाज के वीरों ने मातृभूमि हेतु सर्वोच्च बलिदान दिया। समाज के आराध्य कुलदेवता पूज्य महाराज धनक ऋषि जी, कुल की रक्षिका माँ भगवती कुलदेवी, मर्यादा पुरुषोत्तम प्रभु श्री राम, भगवान सूर्य नारायण और संत शिरोमणि कबीर साहेब की पावन शिक्षाएं हमारे जीवन की आधारशिला हैं। आज 21वीं सदी में आदरणीय पदाधिकारियों के नेतृत्व में समाज डिजिटल युग में नई ऊंचाइयों को छू रहा है।',
  originEra: 'परम पूज्य महाराज धनक ऋषि जी की पावन वैदिक परंपरा',
  kuldevi: 'माँ भगवती कुलदेवी (जय माँ)',
  kuldevta: 'परम पूज्य महाराज धनक ऋषि जी महाराज (जय महाराज धनक ऋषि)',
  mainGotras: [
    'बंसल', 'धानुक', 'धानक', 'बरदेले', 'कैथोरा', 'बमनेले', 'संदेला', 'मौर्य', 
    'कौशिक', 'भारद्वाज', 'कश्यप', 'चौहान', 'वर्मा', 'गर्ग', 'गोयल'
  ],
  pillars: [
    {
      title: 'महाराज धनक ऋषि जी के संस्कार',
      description: 'सत्य, धर्म, तपस्या और आत्मसम्मान के वैदिक संस्कारों को नई पीढ़ी के जीवन में उतारना।',
      icon: 'BookOpen'
    },
    {
      title: 'डिजिटल समाज एवं व्यक्ति-व्यक्ति का जुड़ाव',
      description: 'सोशल मीडिया और मोबाइल ऐप के माध्यम से हर पदाधिकारी व समाज बंधु को सीधे संपर्क में लाना।',
      icon: 'TrendingUp'
    },
    {
      title: 'शिक्षा, छात्रवृत्ति व युवा सशक्तिकरण',
      description: 'होनहार विद्यार्थियों को उच्च शिक्षा, तकनीकी प्रशिक्षण और प्रतियोगी परीक्षाओं में पूर्ण सहयोग।',
      icon: 'HeartHandshake'
    },
    {
      title: 'पारस्परिक सेवा व संकट निवारण',
      description: 'चिकित्सा सहायता, आपातकालीन रक्तदाता दल और किसी भी बंधु के संकट में संगठित सहयोग।',
      icon: 'ShieldCheck'
    },
    {
      title: 'सामाजिक समरसता, संगठन व सादगी',
      description: 'विवाह व उत्सवों में सादगी, नशा-मुक्ति, दहेज विरोध और समाज की संगठनात्मक शक्ति को मजबूत करना।',
      icon: 'Scale'
    }
  ],
  codeOfConduct: [
    {
      rule: 'संगठन एवं पदाधिकारियों के दिशा-निर्देशों का सम्मान',
      explanation: 'समाज के सभी कार्यक्रमों एवं बैठकों में समय पर उपस्थित होकर एकता और अनुशासन का परिचय दें।'
    },
    {
      rule: 'समाज को डिजिटल बनाने में सक्रिय योगदान',
      explanation: 'स्वयं का प्रोफाइल निर्देशिका में दर्ज करें और अपने क्षेत्र के प्रत्येक बंधु को ऐप से जोड़ें।'
    },
    {
      rule: 'विवाह एवं मांगलिक कार्यों में सादगी',
      explanation: 'दिखावे और अनावश्यक फिजूलखर्ची से बचें; उस धन का उपयोग बच्चों की शिक्षा अथवा सामाजिक सेवा में करें।'
    },
    {
      rule: 'बेटियों को समान अधिकार व उच्च शिक्षा',
      explanation: 'बालिकाओं को आत्मनिर्भर बनाने हेतु तकनीकी, चिकित्सा व उच्चतर शिक्षा में पूर्ण प्रोत्साहन दें।'
    },
    {
      rule: 'पारस्परिक सहयोग व बंधुत्व भाव',
      explanation: 'समाज के किसी भी व्यक्ति को आर्थिक या स्वास्थ्य संकट में अकेला न छोड़ें, हरसंभव सहायता करें।'
    }
  ],
  totalMembersCount: 18450,
  activeChaptersCount: 92,
  scholarshipsGiven: 510,
  officeBearers: initialDhanukOfficeBearers,
  socialLinks: officialSocialLinks
};

export const initialMembers: SamajMember[] = [
  {
    id: 'mem-dalchand',
    name: 'मान. डालचंद बरदेले जी',
    gotra: 'बरदेले',
    city: 'सागर',
    state: 'मध्य प्रदेश',
    occupation: 'वरिष्ठ समाजसेवी एवं प्रदेश कार्यवाहक अध्यक्ष',
    businessName: 'अखिल भारतीय धानुक समाज संगठन',
    servicesOffered: 'सामाजिक नेतृत्व, संगठन विस्तार, परामर्श एवं जनसमस्या निवारण।',
    specialOfferForSamaj: 'प्रदेश स्तर पर समाज बंधुओं की समस्याओं हेतु 24x7 उपलब्ध।',
    professionCategory: 'सरकारी सेवा व प्रशासन',
    phone: '+91 99070 61661',
    whatsapp: '919907061661',
    address: 'जिला कार्यालय, सागर, मध्य प्रदेश',
    bloodGroup: 'B+',
    isBloodDonor: true,
    joinedYear: 2008,
    bio: 'अखिल भारतीय धानुक समाज संगठन के प्रदेश कार्यवाहक अध्यक्ष एवं मुख्य अतिथि।',
    isVerified: true,
    organizationRole: 'प्रदेश कार्यवाहक अध्यक्ष, सागर',
    isOfficeBearer: true
  },
  {
    id: 'mem-suraj',
    name: 'सूरज बंसल (Suraj Bansal)',
    gotra: 'बंसल',
    city: 'सागर',
    state: 'मध्य प्रदेश (भारतीय)',
    occupation: 'डिजिटल मीडिया एवं ऐप डेवलपमेंट प्रमुख',
    businessName: 'धानुक समाज डिजिटल डेवलपमेंट सेल (भारतीय)',
    servicesOffered: 'समाज को डिजिटल बनाने हेतु ऐप डेवलपमेंट, सोशल मीडिया प्रचार, वेब सेवाएं व तकनीकी प्रशिक्षण।',
    specialOfferForSamaj: 'समाज के सभी बंधुओं हेतु निःशुल्क डिजिटल प्रोफाइल पंजीकरण व तकनीकी सहायता।',
    professionCategory: 'आईटी व सॉफ्टवेयर सेवाएं',
    phone: '+91 9111206326',
    whatsapp: '919111206326',
    address: 'सिविल लाइन्स, सागर, मध्य प्रदेश',
    bloodGroup: 'O+',
    isBloodDonor: true,
    joinedYear: 2020,
    bio: 'सोशल मीडिया और डेवलपमेंट ऐप के माध्यम से समाज को पूर्णतः डिजिटल बनाने हेतु समर्पित। जय महाराज धनक ऋषि। भारतीय।',
    isVerified: true,
    organizationRole: 'सोशल मीडिया एवं ऐप डेवलपमेंट प्रमुख',
    isOfficeBearer: true
  },
  {
    id: 'mem-sukhdev',
    name: 'मान. सुखदेव सिंह कैथोरा जी',
    gotra: 'कैथोरा',
    city: 'सागर संभाग',
    state: 'मध्य प्रदेश',
    occupation: 'संभागीय संगठन मंत्री',
    professionCategory: 'सरकारी सेवा व प्रशासन',
    phone: '+91 94251 12345',
    bloodGroup: 'A+',
    isBloodDonor: true,
    joinedYear: 2012,
    bio: 'संभागीय स्तर पर संगठन की मजबूती एवं युवा जाग्रति अभियान।',
    isVerified: true,
    organizationRole: 'संभागीय संगठन मंत्री',
    isOfficeBearer: true
  },
  {
    id: 'mem-tikaram',
    name: 'मान. टीकाराम धानुक जी',
    gotra: 'धानुक',
    city: 'सागर',
    state: 'मध्य प्रदेश',
    occupation: 'जिलाध्यक्ष, सागर',
    professionCategory: 'व्यापार व उद्योग',
    phone: '+91 9111206326',
    whatsapp: '919111206326',
    address: 'कटरा बाजार, सागर',
    bloodGroup: 'B+',
    isBloodDonor: true,
    joinedYear: 2010,
    bio: 'सागर जिले में समाज के सर्वांगीण विकास व एकता के सूत्रधार। संपर्क: सूरज बंसल (+91 9111206326)',
    isVerified: true,
    organizationRole: 'जिलाध्यक्ष, सागर',
    isOfficeBearer: true
  },
  {
    id: 'mem-lalju',
    name: 'मान. लालजू सचिव जी',
    gotra: 'धानुक',
    city: 'सागर',
    state: 'मध्य प्रदेश',
    occupation: 'जिला उपाध्यक्ष, सागर',
    professionCategory: 'व्यापार व उद्योग',
    phone: '+91 94244 34567',
    bloodGroup: 'O+',
    isBloodDonor: false,
    joinedYear: 2014,
    bio: 'सामाजिक समन्वय एवं जिला कार्यकारिणी के प्रशासनिक दायित्व।',
    isVerified: true,
    organizationRole: 'जिला उपाध्यक्ष, सागर',
    isOfficeBearer: true
  },
  {
    id: 'mem-rajni',
    name: 'मान. रजनी बमनेले जी',
    gotra: 'बमनेले',
    city: 'सागर',
    state: 'मध्य प्रदेश',
    occupation: 'महिला मोर्चा अध्यक्ष, जिला सागर',
    professionCategory: 'शिक्षा, कोचिंग व परामर्श',
    phone: '+91 97530 45678',
    bloodGroup: 'A-',
    isBloodDonor: true,
    joinedYear: 2017,
    bio: 'महिला सशक्तिकरण, बालिका शिक्षा और पारिवारिक समरसता की प्रणेता।',
    isVerified: true,
    organizationRole: 'महिला मोर्चा अध्यक्ष, जिला सागर',
    isOfficeBearer: true
  },
  {
    id: 'mem-roshan',
    name: 'मान. रोशन बंसल जी',
    gotra: 'बंसल',
    city: 'सागर नगर',
    state: 'मध्य प्रदेश',
    occupation: 'नगर अध्यक्ष, सागर',
    professionCategory: 'व्यापार व उद्योग',
    phone: '+91 98261 56789',
    bloodGroup: 'AB+',
    isBloodDonor: true,
    joinedYear: 2015,
    bio: 'सागर नगर में समाज बंधुओं की व्यापारिक व सामाजिक सहभागिता।',
    isVerified: true,
    organizationRole: 'नगर अध्यक्ष, सागर',
    isOfficeBearer: true
  },
  {
    id: 'mem-pravin',
    name: 'मान. प्रवीण धानक जी',
    gotra: 'धानक',
    city: 'सागर ब्लॉक',
    state: 'मध्य प्रदेश',
    occupation: 'ब्लॉक अध्यक्ष, सागर',
    professionCategory: 'कृषि व जैविक उद्यम',
    phone: '+91 99262 67890',
    bloodGroup: 'B+',
    isBloodDonor: true,
    joinedYear: 2018,
    bio: 'ग्रामीण व ब्लॉक स्तर पर धानुक समाज बंधुओं का संगठन।',
    isVerified: true,
    organizationRole: 'ब्लॉक अध्यक्ष, सागर',
    isOfficeBearer: true
  },
  {
    id: 'mem-pappu',
    name: 'मान. पप्पू बंसल जी',
    gotra: 'बंसल',
    city: 'सागर तहसील',
    state: 'मध्य प्रदेश',
    occupation: 'तहसील अध्यक्ष, सागर',
    professionCategory: 'व्यापार व उद्योग',
    phone: '+91 98930 78901',
    bloodGroup: 'O+',
    isBloodDonor: true,
    joinedYear: 2016,
    bio: 'तहसील स्तर पर सामाजिक कार्यक्रमों व बैठकों का आयोजन।',
    isVerified: true,
    organizationRole: 'तहसील अध्यक्ष, सागर',
    isOfficeBearer: true
  },
  {
    id: 'mem-vinod',
    name: 'मान. विनोद बंसल जी',
    gotra: 'बंसल',
    city: 'मल्थोन',
    state: 'मध्य प्रदेश (सागर)',
    occupation: 'ब्लॉक अध्यक्ष, मल्थोन',
    professionCategory: 'व्यापार व उद्योग',
    phone: '+91 97520 89012',
    address: 'मुख्य बाजार, मल्थोन, जिला सागर',
    bloodGroup: 'B-',
    isBloodDonor: true,
    joinedYear: 2016,
    bio: 'मल्थोन क्षेत्र में धानुक समाज का सुदृढ़ संगठन एवं जनसेवा।',
    isVerified: true,
    organizationRole: 'ब्लॉक अध्यक्ष, मल्थोन',
    isOfficeBearer: true
  },
  {
    id: 'mem-govind',
    name: 'मान. गोविंद बंसल जी',
    gotra: 'बंसल',
    city: 'बांदरी',
    state: 'मध्य प्रदेश (सागर)',
    occupation: 'ब्लॉक अध्यक्ष, बांदरी',
    professionCategory: 'व्यापार व उद्योग',
    phone: '+91 99770 90123',
    address: 'बांदरी चौराहा, जिला सागर',
    bloodGroup: 'A+',
    isBloodDonor: true,
    joinedYear: 2017,
    bio: 'बांदरी ब्लॉक में समाज बंधुओं की सक्रियता एवं रक्तदान शिविर।',
    isVerified: true,
    organizationRole: 'ब्लॉक अध्यक्ष, बांदरी',
    isOfficeBearer: true
  },
  {
    id: 'mem-dilip',
    name: 'मान. दिलीप संदेला जी',
    gotra: 'संदेला',
    city: 'सागर',
    state: 'मध्य प्रदेश',
    occupation: 'जिला मीडिया प्रभारी, सागर',
    businessName: 'संदेला मीडिया व जनसंचार',
    servicesOffered: 'प्रेस विज्ञप्ति, मीडिया कवरेज, सामाजिक संदेश प्रसार।',
    professionCategory: 'आईटी व सॉफ्टवेयर सेवाएं',
    phone: '+91 94254 01234',
    bloodGroup: 'O-',
    isBloodDonor: true,
    joinedYear: 2019,
    bio: 'प्रिंट एवं डिजिटल मीडिया में धानुक समाज की उपलब्धियों का प्रचार-प्रसार।',
    isVerified: true,
    organizationRole: 'जिला मीडिया प्रभारी, सागर',
    isOfficeBearer: true
  },
  {
    id: 'mem-abhishek',
    name: 'मान. अभिषेक बंसल जी',
    gotra: 'बंसल',
    city: 'सागर',
    state: 'मध्य प्रदेश',
    occupation: 'महामंत्री, संगठन',
    professionCategory: 'कानूनी व वित्तीय सेवाएं (CA/वकील)',
    phone: '+91 98270 11223',
    bloodGroup: 'B+',
    isBloodDonor: true,
    joinedYear: 2018,
    bio: 'संगठनात्मक कार्यप्रणाली, बैठक समन्वय व सदस्यता अभियान।',
    isVerified: true,
    organizationRole: 'महामंत्री',
    isOfficeBearer: true
  },
  {
    id: 'mem-gautam',
    name: 'मान. गौतम मौर्य जी',
    gotra: 'मौर्य',
    city: 'सागर',
    state: 'मध्य प्रदेश',
    occupation: 'संगठन मंत्री, जिला सागर',
    professionCategory: 'शिक्षा, कोचिंग व परामर्श',
    phone: '+91 99071 22334',
    bloodGroup: 'AB+',
    isBloodDonor: true,
    joinedYear: 2019,
    bio: 'जिला सागर में संगठन विस्तार एवं युवा प्रकोष्ठ का मार्गदर्शन।',
    isVerified: true,
    organizationRole: 'संगठन मंत्री, जिला सागर',
    isOfficeBearer: true
  }
];

export const initialPosts: SamajPost[] = [
  {
    id: 'post-appeal-1',
    title: 'सभी पदाधिकारी एवं समाज बन्धुओं से विनम्र आग्रह — निर्धारित समय पर उपस्थित हों (जय महाराज धनक ऋषि)',
    content: `अखिल भारतीय धानुक समाज संगठन, मध्य प्रदेश

मुख्य अतिथि:
मान. डालचंद बरदेले जी (+91 99070 61661) - प्रदेश कार्यवाहक अध्यक्ष, सागर

विशिष्ट अतिथि एवं सम्मानीय पदाधिकारी गण:
• मान. सुखदेव सिंह कैथोरा जी, संभागीय संगठन मंत्री
• मान. टीकाराम धानुक जी, जिलाध्यक्ष सागर 
• मान. लालजू सचिव जी, जिला उपाध्यक्ष सागर
• मान. रजनी बमनेले जी, महिला मोर्चा अध्यक्ष जिला सागर
• मान. रोशन बंसल जी, नगर अध्यक्ष सागर
• मान. प्रवीण धानक जी, ब्लॉक अध्यक्ष सागर
• मान. पप्पू बंसल जी, तहसील अध्यक्ष सागर 
• मान. विनोद बंसल जी, ब्लॉक अध्यक्ष मल्थोन
• मान. गोविंद बंसल जी, ब्लॉक अध्यक्ष बांदरी 
• मान. दिलीप संदेला जी, जिला मीडिया प्रभारी सागर 
• मान. अभिषेक बंसल जी, महामंत्री
• मान. गौतम मौर्य जी, संगठन मंत्री जिला सागर

सभी पदाधिकारी एवं समाज बन्धुओं से करबद्ध आग्रह है कि निर्धारित समय पर उपस्थित होकर कार्यक्रम को सफल बनाएं।

📱 समाज के आधिकारिक सोशल मीडिया मंच:
• व्हाट्सएप्प ग्रुप: https://chat.whatsapp.com/IATXtm7so0i4dTt4O51alM?s=cl&p=a&mlu=4&ilr=4
• इंस्टाग्राम: https://www.instagram.com/sama.jsetu?xtok=bXM5emdkcGF5dWxi (@sama.jsetu)
• यूट्यूब: https://youtube.com/shorts/FunDooV5Ig0?si=rx0_pQUy90OrPd-L
• फेसबुक: https://www.facebook.com/share/1Fg4rvDmKE/

सोशल मीडिया और डेवलपमेंट ऐप के माध्यम से समाज को डिजिटल बनाने हेतु संपर्क करें:
सूरज बंसल (+91 9111206326)

🙏 जय महाराज धनक ऋषि 🙏
🙏 जय माँ कुलदेवी 🙏`,
    authorName: 'सूरज बंसल',
    authorGotra: 'बंसल',
    authorCity: 'सागर, मध्य प्रदेश',
    authorRole: 'डिजिटल ऐप प्रमुख (+91 9111206326)',
    category: 'सामाजिक सुधार',
    createdAt: 'आज',
    likes: 342,
    blessings: 289,
    isPinned: true,
    comments: [
      {
        id: 'c-dalchand',
        authorName: 'मान. डालचंद बरदेले जी',
        authorGotra: 'बरदेले',
        authorCity: 'सागर',
        content: 'जय महाराज धनक ऋषि! सभी सम्मानित पदाधिकारी एवं समाज बंधु समय पर पधारकर समाज की एकता और डिजिटल सशक्तिकरण को नई दिशा प्रदान करें।',
        createdAt: '1 घंटे पूर्व'
      },
      {
        id: 'c-tikaram',
        authorName: 'मान. टीकाराम धानुक जी',
        authorGotra: 'धानुक',
        authorCity: 'सागर',
        content: 'सागर जिले के प्रत्येक ब्लॉक, तहसील व गांव से बंधु अवश्य जुड़ें। सूरज बंसल जी की डिजिटल पहल अति सराहनीय है।',
        createdAt: '30 मिनट पूर्व'
      }
    ]
  },
  {
    id: 'post-dhanak-heritage',
    title: 'परम पूज्य महाराज धनक ऋषि जी की पावन परंपरा — हमारे गौरव और स्वाभिमान का प्रतीक',
    content: 'महाराज धनक ऋषि जी ने समाज को धर्म, त्याग, पराक्रम और आत्मसम्मान का संदेश दिया। आज जब हम आधुनिक युग में प्रवेश कर चुके हैं, तो हमारा परम कर्तव्य है कि हम उनकी शिक्षाओं को आत्मसात करें। समाज के प्रत्येक बच्चे को उच्च शिक्षा दिलाएं, नशा मुक्ति और सादगीपूर्ण जीवनशैली अपनाएं।',
    authorName: 'मान. डालचंद बरदेले जी',
    authorGotra: 'बरदेले',
    authorCity: 'सागर, मध्य प्रदेश',
    authorRole: 'प्रदेश कार्यवाहक अध्यक्ष (+91 99070 61661)',
    category: 'वरिष्ठ जन मार्गदर्शन',
    createdAt: '23 अक्टूबर 2026',
    likes: 410,
    blessings: 350,
    isPinned: true,
    comments: []
  },
  {
    id: 'post-digital-mission',
    title: 'धानुक समाज डिजिटल निर्देशिका अभियान: हर व्यक्ति को जोड़ें, हर व्यवसाय को आगे बढ़ाएं',
    content: 'हमारे सागर जिले एवं संपूर्ण मध्य प्रदेश में धानुक समाज के बंधु विभिन्न व्यवसायों, सरकारी सेवाओं, कृषि, चिकित्सा एवं शिक्षा क्षेत्र में कार्यरत हैं। यह ऐप हम सभी को सीधे संपर्क में लाएगा। सभी बंधु अपनी जानकारी व व्यवसाय निर्देशिका में दर्ज करें। किसी भी सहायता हेतु मुझसे +91 9111206326 पर संपर्क करें।',
    authorName: 'सूरज बंसल',
    authorGotra: 'बंसल',
    authorCity: 'सागर',
    authorRole: 'सोशल मीडिया एवं ऐप डेवलपमेंट',
    category: 'व्यापार व नेटवर्किंग',
    createdAt: '22 अक्टूबर 2026',
    likes: 295,
    blessings: 215,
    comments: []
  }
];

export const initialOpportunities: BusinessOpportunity[] = [
  {
    id: 'opp-1',
    title: 'सागर एवं मल्थोन में धानुक समाज डिजिटल सेवा केंद्र प्रारंभ',
    type: 'सेवा पेशकश (Offering)',
    category: 'डिजिटल सेवाएं',
    description: 'समाज के सभी परिवारों के बच्चों के ऑनलाइन फॉर्म, स्कॉलरशिप, पैन/आधार और डायरेक्टरी रजिस्ट्रेशन में निःशुल्क तकनीकी सहायता।',
    contactPerson: 'सूरज बंसल',
    phone: '+91 9111206326',
    city: 'सागर, मध्य प्रदेश',
    postedDate: 'आज'
  },
  {
    id: 'opp-2',
    title: 'बांदरी एवं सागर ब्लॉक में युवाओं हेतु रोजगार मार्गदर्शन शिविर',
    type: 'सेवा पेशकश (Offering)',
    category: 'रोजगार व करियर',
    description: 'प्रतियोगी परीक्षाओं, पुलिस, आर्मी एवं तकनीकी डिप्लोमा हेतु विशेष मार्गदर्शन कक्षाएं।',
    contactPerson: 'मान. गोविंद बंसल जी',
    phone: '+91 99770 90123',
    city: 'बांदरी (सागर)',
    postedDate: '22 अक्टूबर 2026'
  }
];

export const initialSevaProjects: SevaProject[] = [
  {
    id: 'seva-dhanuk-edu',
    title: 'महाराज धनक ऋषि मेधावी उच्च शिक्षा छात्रवृत्ति कोष 2026',
    category: 'शिक्षा छात्रवृत्ति',
    targetAmount: 500000,
    raisedAmount: 395000,
    description: 'धानुक समाज के प्रतिभाशाली किंतु आर्थिक रूप से कमजोर बालक-बालिकाओं की कॉलेज, मेडिकल, इंजीनियरिंग व कोचिंग फीस सहायता।',
    beneficiaryCount: 52,
    coordinator: 'मान. डालचंद बरदेले जी',
    contactNumber: '+91 99070 61661',
    status: 'सक्रिय'
  },
  {
    id: 'seva-sagar-medical',
    title: 'सागर जिला आपातकालीन चिकित्सा व स्वास्थ्य सहायता कोष',
    category: 'चिकित्सा सहायता',
    targetAmount: 300000,
    raisedAmount: 260000,
    description: 'गंभीर रोग से पीड़ित समाज बंधुओं के उपचार हेतु सीधी सहायता व रक्तदान समन्वय।',
    beneficiaryCount: 24,
    coordinator: 'सूरज बंसल (Suraj Bansal - भारतीय)',
    contactNumber: '+91 9111206326',
    status: 'सक्रिय'
  },
  {
    id: 'seva-kanyadan',
    title: 'सामुदायिक कन्यादान व सामूहिक विवाह सम्मेलन',
    category: 'कन्यादान सहयोग',
    targetAmount: 400000,
    raisedAmount: 400000,
    description: 'दहेज रहित, सादगीपूर्ण सामूहिक विवाह में 15 कन्याओं को गृहस्थी उपहार एवं आशीर्वाद।',
    beneficiaryCount: 15,
    coordinator: 'मान. रजनी बमनेले जी',
    contactNumber: '+91 97530 45678',
    status: 'पूर्ण'
  }
];

export const initialEvents: SamajEvent[] = [
  {
    id: 'event-dhanuk-sagar',
    title: 'अखिल भारतीय धानुक समाज संगठन महाधिवेशन एवं डिजिटल समाज लोकार्पण',
    date: 'निर्धारित तिथि (आगामी)',
    time: 'प्रातः 10:00 बजे से सायं 4:00 बजे',
    venue: 'सामुदायिक सभागार, सागर',
    city: 'सागर, मध्य प्रदेश',
    description: 'मुख्य अतिथि: मान. डालचंद बरदेले जी (+91 99070 61661) प्रदेश कार्यवाहक अध्यक्ष। समस्त जिलाध्यक्ष, ब्लॉक अध्यक्ष (मल्थोन, बांदरी, सागर) व पदाधिकारी गणों की गरिमामयी उपस्थिति। डिजिटल ऐप का लोकार्पण एवं समाज एकता संकल्प।',
    organizer: 'जिला कार्यकारिणी, सागर',
    contactNumber: '+91 99070 61661',
    attendeesCount: 850,
    hasRsvpd: true
  },
  {
    id: 'event-malthon-meet',
    title: 'मल्थोन व बांदरी ब्लॉक धानुक समाज बंधु स्नेह मिलन',
    date: 'आगामी रविवार',
    time: 'दोपहर 1:00 बजे से सायं 5:00 बजे',
    venue: 'धानुक समाज भवन परिसर, मल्थोन',
    city: 'मल्थोन, जिला सागर',
    description: 'युवा रोजगार, डायरेक्टरी में शत-प्रतिशत पंजीयन एवं सामाजिक विकास पर विचार विमर्श।',
    organizer: 'मान. विनोद बंसल जी एवं मान. गोविंद बंसल जी',
    contactNumber: '+91 97520 89012',
    attendeesCount: 320,
    hasRsvpd: false
  }
];

export const initialMatrimonial: MatrimonialProfile[] = [
  {
    id: 'mat-dhanuk-1',
    fullName: 'इंजी. मयंक बंसल',
    gender: 'वर (Groom)',
    birthYear: 1996,
    height: "5'9\"",
    education: 'B.Tech (CSE), RGPV Bhopal',
    occupation: 'सीनियर सॉफ्टवेयर इंजीनियर (MNC, इंदौर)',
    monthlyIncome: '₹ 1,30,000 / माह',
    gotra: 'बंसल',
    maternalGotra: 'बरदेले',
    city: 'सागर / इंदौर',
    state: 'मध्य प्रदेश',
    fatherName: 'श्री रामसेवक बंसल (व्यवसायी)',
    fatherOccupation: 'कृषि एवं व्यापार',
    contactPerson: 'रामसेवक बंसल (पिताजी)',
    contactPhone: '+91 99070 61661'
  },
  {
    id: 'mat-dhanuk-2',
    fullName: 'कु. श्वेता धानुक',
    gender: 'वधू (Bride)',
    birthYear: 1998,
    height: "5'4\"",
    education: 'M.Sc (Biotech), B.Ed',
    occupation: 'शासकीय उच्चतर माध्यमिक शिक्षिका',
    monthlyIncome: '₹ 55,000 / माह',
    gotra: 'धानुक',
    maternalGotra: 'कैथोरा',
    city: 'सागर',
    state: 'मध्य प्रदेश',
    fatherName: 'श्री कैलाश धानुक',
    fatherOccupation: 'सेवा निवृत्त शासकीय कर्मचारी',
    contactPerson: 'सूरज बंसल (Suraj Bansal - भारतीय)',
    contactPhone: '+91 9111206326'
  }
];
