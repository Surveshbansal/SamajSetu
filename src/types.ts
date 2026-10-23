export interface SocialLinks {
  facebook: string;
  youtube: string;
  instagram: string;
  whatsapp: string;
}

export interface SamajProfile {
  id: string;
  name: string;
  tagline: string;
  motto: string;
  historyText: string;
  originEra: string;
  kuldevi: string;
  kuldevta: string;
  mainGotras: string[];
  pillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  codeOfConduct: {
    rule: string;
    explanation: string;
  }[];
  totalMembersCount: number;
  activeChaptersCount: number;
  scholarshipsGiven: number;
  officeBearers?: OfficeBearer[];
  socialLinks?: SocialLinks;
}

export type PostCategory = 
  | 'सामाजिक सुधार' 
  | 'शिक्षा व संस्कार' 
  | 'युवा व रोजगार' 
  | 'महिला सशक्तिकरण' 
  | 'पर्व व परंपरा' 
  | 'वरिष्ठ जन मार्गदर्शन'
  | 'व्यापार व नेटवर्किंग'
  | 'सामान्य विचार';

export interface Comment {
  id: string;
  authorName: string;
  authorGotra?: string;
  authorCity?: string;
  content: string;
  createdAt: string;
}

export interface SamajPost {
  id: string;
  title: string;
  content: string;
  authorName: string;
  authorGotra: string;
  authorCity: string;
  authorRole?: string;
  category: PostCategory;
  createdAt: string;
  likes: number;
  blessings: number;
  comments: Comment[];
  isPinned?: boolean;
  isLiked?: boolean;
  isBlessed?: boolean;
}

export type ProfessionCategory =
  | 'व्यापार व उद्योग'
  | 'आईटी व सॉफ्टवेयर सेवाएं'
  | 'चिकित्सा व स्वास्थ्य'
  | 'कानूनी व वित्तीय सेवाएं (CA/वकील)'
  | 'शिक्षा, कोचिंग व परामर्श'
  | 'निर्माण, आर्किटेक्ट व इंटीरियर'
  | 'गृह सेवाएं, कारीगर व खानपान'
  | 'सरकारी सेवा व प्रशासन'
  | 'कृषि व जैविक उद्यम'
  | 'अन्य स्वरोजगार';

export interface OfficeBearer {
  name: string;
  role: string;
  phone?: string;
  city?: string;
  isChiefGuest?: boolean;
  division?: string;
}

export interface SamajMember {
  id: string;
  name: string;
  gotra: string;
  city: string;
  state: string;
  occupation: string;
  businessName?: string;
  servicesOffered?: string; // प्रदान की जाने वाली सेवाएं या व्यापार
  specialOfferForSamaj?: string; // समाज बंधुओं हेतु विशेष छूट/सुविधा
  professionCategory: ProfessionCategory;
  phone: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  isBloodDonor: boolean;
  familyHeadName?: string;
  joinedYear: number;
  bio?: string;
  isVerified?: boolean;
  organizationRole?: string; // संगठन पद (जैसे प्रदेश कार्यवाहक अध्यक्ष, जिलाध्यक्ष, आदि)
  isOfficeBearer?: boolean;
}

export interface SevaProject {
  id: string;
  title: string;
  category: 'शिक्षा छात्रवृत्ति' | 'चिकित्सा सहायता' | 'कन्यादान सहयोग' | 'आपातकालीन राहत' | 'सामुदायिक भवन';
  targetAmount: number;
  raisedAmount: number;
  description: string;
  beneficiaryCount: number;
  coordinator: string;
  contactNumber: string;
  status: 'सक्रिय' | 'पूर्ण';
}

export interface SamajEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  description: string;
  organizer: string;
  contactNumber: string;
  attendeesCount: number;
  hasRsvpd?: boolean;
}

export interface MatrimonialProfile {
  id: string;
  fullName: string;
  gender: 'वर (Groom)' | 'वधू (Bride)';
  birthYear: number;
  height: string;
  education: string;
  occupation: string;
  monthlyIncome?: string;
  gotra: string;
  maternalGotra: string;
  city: string;
  state: string;
  fatherName: string;
  fatherOccupation: string;
  contactPerson: string;
  contactPhone: string;
}

export interface BusinessOpportunity {
  id: string;
  title: string;
  type: 'आवश्यकता (Requirement)' | 'सेवा पेशकश (Offering)';
  category: string;
  description: string;
  contactPerson: string;
  phone: string;
  city: string;
  postedDate: string;
}
