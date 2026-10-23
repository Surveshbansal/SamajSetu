import React, { useState, useMemo } from 'react';
import { 
  Search, 
  UserPlus, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Briefcase, 
  Heart, 
  Building2, 
  Award, 
  Filter, 
  ShieldCheck, 
  ChevronRight,
  Handshake,
  PlusCircle,
  X
} from 'lucide-react';
import { SamajMember, ProfessionCategory, BusinessOpportunity } from '../types';
import { AddMemberModal } from './AddMemberModal';
import { MemberDetailModal } from './MemberDetailModal';

interface DirectorySectionProps {
  members: SamajMember[];
  onAddMember: (member: Omit<SamajMember, 'id' | 'joinedYear'>) => void;
  gotrasList: string[];
  opportunities: BusinessOpportunity[];
  onAddOpportunity: (opportunity: Omit<BusinessOpportunity, 'id' | 'postedDate'>) => void;
}

const categoryTabs: { label: string; value: string }[] = [
  { label: 'सभी सदस्य व व्यवसाय', value: 'all' },
  { label: 'संगठन पदाधिकारी (Leaders)', value: 'पदाधिकारी' },
  { label: 'व्यापार व उद्योग', value: 'व्यापार व उद्योग' },
  { label: 'आईटी व सॉफ्टवेयर', value: 'आईटी व सॉफ्टवेयर सेवाएं' },
  { label: 'चिकित्सा व स्वास्थ्य', value: 'चिकित्सा व स्वास्थ्य' },
  { label: 'CA व कानूनी', value: 'कानूनी व वित्तीय सेवाएं (CA/वकील)' },
  { label: 'शिक्षा व परामर्श', value: 'शिक्षा, कोचिंग व परामर्श' },
  { label: 'निर्माण व इंटीरियर', value: 'निर्माण, आर्किटेक्ट व इंटीरियर' },
  { label: 'कृषि व जैविक', value: 'कृषि व जैविक उद्यम' },
  { label: 'अन्य सेवाएं', value: 'अन्य' }
];

export const DirectorySection: React.FC<DirectorySectionProps> = ({
  members,
  onAddMember,
  gotrasList,
  opportunities,
  onAddOpportunity
}) => {
  const [activeTab, setActiveTab] = useState<'members' | 'opportunities'>('members');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('all');
  const [onlyDonors, setOnlyDonors] = useState(false);
  const [onlySpecialOffers, setOnlySpecialOffers] = useState(false);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<SamajMember | null>(null);

  // New Opportunity Modal State
  const [isOppModalOpen, setIsOppModalOpen] = useState(false);
  const [oppForm, setOppForm] = useState({
    title: '',
    type: 'आवश्यकता (Requirement)' as BusinessOpportunity['type'],
    category: 'रोजगार अवसर',
    description: '',
    contactPerson: '',
    phone: '',
    city: ''
  });

  // Extract unique cities
  const uniqueCities = useMemo(() => {
    const set = new Set<string>();
    members.forEach((m) => {
      if (m.city) set.add(m.city.trim());
    });
    return Array.from(set).sort();
  }, [members]);

  // Filtered members
  const filteredMembers = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return members.filter((member) => {
      // Search
      const matchesSearch = 
        !q ||
        member.name.toLowerCase().includes(q) ||
        member.gotra.toLowerCase().includes(q) ||
        member.city.toLowerCase().includes(q) ||
        member.occupation.toLowerCase().includes(q) ||
        (member.businessName && member.businessName.toLowerCase().includes(q)) ||
        (member.servicesOffered && member.servicesOffered.toLowerCase().includes(q)) ||
        member.phone.includes(q);

      if (!matchesSearch) return false;

      // Category filter
      if (selectedCategory === 'पदाधिकारी') {
        if (!member.isOfficeBearer && !member.organizationRole) {
          return false;
        }
      } else if (selectedCategory !== 'all') {
        if (selectedCategory === 'अन्य') {
          if (
            member.professionCategory === 'व्यापार व उद्योग' ||
            member.professionCategory === 'आईटी व सॉफ्टवेयर सेवाएं' ||
            member.professionCategory === 'चिकित्सा व स्वास्थ्य' ||
            member.professionCategory === 'कानूनी व वित्तीय सेवाएं (CA/वकील)' ||
            member.professionCategory === 'शिक्षा, कोचिंग व परामर्श' ||
            member.professionCategory === 'निर्माण, आर्किटेक्ट व इंटीरियर' ||
            member.professionCategory === 'कृषि व जैविक उद्यम'
          ) {
            return false;
          }
        } else if (member.professionCategory !== selectedCategory) {
          return false;
        }
      }

      // City filter
      if (selectedCity !== 'all' && member.city !== selectedCity) {
        return false;
      }

      // Blood group filter
      if (selectedBloodGroup !== 'all' && member.bloodGroup !== selectedBloodGroup) {
        return false;
      }

      // Donor toggle
      if (onlyDonors && !member.isBloodDonor) {
        return false;
      }

      // Special offer toggle
      if (onlySpecialOffers && !member.specialOfferForSamaj) {
        return false;
      }

      return true;
    });
  }, [members, searchQuery, selectedCategory, selectedCity, selectedBloodGroup, onlyDonors, onlySpecialOffers]);

  const donorCount = useMemo(() => members.filter((m) => m.isBloodDonor).length, [members]);
  const businessCount = useMemo(() => members.filter((m) => m.businessName || m.servicesOffered).length, [members]);

  const handleOppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!oppForm.title || !oppForm.contactPerson || !oppForm.phone) {
      alert('कृपया शीर्षक, संपर्क सूत्र एवं नाम अवश्य भरें।');
      return;
    }
    onAddOpportunity(oppForm);
    setOppForm({
      title: '',
      type: 'आवश्यकता (Requirement)',
      category: 'रोजगार अवसर',
      description: '',
      contactPerson: '',
      phone: '',
      city: ''
    });
    setIsOppModalOpen(false);
  };

  return (
    <section id="directory" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Top Banner & Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <span>अखिल भारतीय संपर्क सूत्र</span>
            <span aria-hidden="true">·</span>
            <span>व्यापारिक एवं व्यक्तिगत नेटवर्किंग</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-heritage text-stone-900 tracking-tight">
            समाज निर्देशिका
          </h2>
          <p className="mt-2 text-base text-stone-600 max-w-2xl leading-relaxed">
            हर व्यक्ति को समाज से जोड़ने और परस्पर व्यापार, सेवाओं व रोजगार को बढ़ावा देने का सशक्त मंच। यहां समाज का कोई भी व्यक्ति अपनी जानकारी दर्ज कर सकता है।
          </p>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-medium text-sm shadow-xs transition-colors"
          >
            <UserPlus className="w-4 h-4" />
            <span>स्वयं को निर्देशिका से जोड़ें</span>
          </button>
        </div>
      </div>

      {/* Directory Stats Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-white p-5 rounded-xl border border-stone-200">
          <p className="text-xs text-stone-500 font-medium">कुल पंजीकृत सदस्य</p>
          <p className="text-2xl lg:text-3xl font-bold text-stone-900 font-mono tabular-nums mt-1">
            {members.length.toLocaleString('hi-IN')}
          </p>
          <p className="text-[11px] text-stone-500 mt-1">निरंतर बढ़ रहा परिवार</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200">
          <p className="text-xs text-stone-500 font-medium">पंजीकृत व्यवसाय व सेवाएं</p>
          <p className="text-2xl lg:text-3xl font-bold text-amber-800 font-mono tabular-nums mt-1">
            {businessCount.toLocaleString('hi-IN')}
          </p>
          <p className="text-[11px] text-stone-500 mt-1">आपसी व्यापार को प्राथमिकता</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200">
          <p className="text-xs text-stone-500 font-medium">सक्रिय नगर व क्षेत्र</p>
          <p className="text-2xl lg:text-3xl font-bold text-stone-900 font-mono tabular-nums mt-1">
            {uniqueCities.length}
          </p>
          <p className="text-[11px] text-stone-500 mt-1">देश व विदेश से जुड़े बंधु</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200">
          <p className="text-xs text-stone-500 font-medium">जीवन रक्षक रक्तदाता दल</p>
          <p className="text-2xl lg:text-3xl font-bold text-rose-700 font-mono tabular-nums mt-1">
            {donorCount}
          </p>
          <p className="text-[11px] text-stone-500 mt-1">24 घंटे आपातकालीन सेवा</p>
        </div>
      </div>

      {/* Main Mode Tabs: Members vs Business Exchange */}
      <div className="flex items-center gap-2 border-b border-stone-200 mb-6">
        <button
          onClick={() => setActiveTab('members')}
          className={`pb-3 text-sm font-semibold transition-colors border-b-2 ${
            activeTab === 'members'
              ? 'border-amber-800 text-amber-900'
              : 'border-transparent text-stone-600 hover:text-stone-900'
          }`}
        >
          सदस्य व सेवा निर्देशिका ({filteredMembers.length})
        </button>
        <button
          onClick={() => setActiveTab('opportunities')}
          className={`pb-3 text-sm font-semibold transition-colors border-b-2 flex items-center gap-1.5 ${
            activeTab === 'opportunities'
              ? 'border-amber-800 text-amber-900'
              : 'border-transparent text-stone-600 hover:text-stone-900'
          }`}
        >
          <Handshake className="w-4 h-4" />
          <span>व्यापारिक अवसर व आवश्यकताएं ({opportunities.length})</span>
        </button>
      </div>

      {activeTab === 'members' ? (
        <>
          {/* Search & Filter Controls */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs mb-8 space-y-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="नाम, व्यवसाय, सेवाएं, दुकान का नाम, गोत्र या शहर से खोजें..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all placeholder:text-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  हटाएं
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedCategory(tab.value)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === tab.value
                      ? 'bg-amber-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Secondary Dropdown & Toggle Filters */}
            <div className="flex items-center justify-between gap-4 flex-wrap pt-2 border-t border-stone-100 text-xs">
              <div className="flex items-center gap-3 flex-wrap">
                {/* City select */}
                <div className="flex items-center gap-1.5">
                  <span className="text-stone-500">शहर:</span>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="py-1 px-2.5 rounded-lg border border-stone-200 bg-stone-50 text-stone-800 text-xs focus:outline-none focus:border-amber-600"
                  >
                    <option value="all">सभी नगर</option>
                    {uniqueCities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* Blood Group select */}
                <div className="flex items-center gap-1.5">
                  <span className="text-stone-500">रक्त समूह:</span>
                  <select
                    value={selectedBloodGroup}
                    onChange={(e) => setSelectedBloodGroup(e.target.value)}
                    className="py-1 px-2.5 rounded-lg border border-stone-200 bg-stone-50 text-stone-800 text-xs font-mono focus:outline-none focus:border-amber-600"
                  >
                    <option value="all">सभी ग्रुप</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>

              {/* Toggles */}
              <div className="flex items-center gap-4 flex-wrap">
                <label className="flex items-center gap-1.5 cursor-pointer text-stone-700 hover:text-stone-900 select-none">
                  <input
                    type="checkbox"
                    checked={onlyDonors}
                    onChange={(e) => setOnlyDonors(e.target.checked)}
                    className="w-3.5 h-3.5 text-rose-600 rounded border-stone-300 focus:ring-rose-500"
                  />
                  <span>केवल रक्तदाता</span>
                </label>

                <label className="flex items-center gap-1.5 cursor-pointer text-stone-700 hover:text-stone-900 select-none">
                  <input
                    type="checkbox"
                    checked={onlySpecialOffers}
                    onChange={(e) => setOnlySpecialOffers(e.target.checked)}
                    className="w-3.5 h-3.5 text-amber-700 rounded border-stone-300 focus:ring-amber-500"
                  />
                  <span>समाज बंधु विशेष छूट</span>
                </label>
              </div>
            </div>

          </div>

          {/* Members List Grid */}
          {filteredMembers.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 max-w-lg mx-auto">
              <p className="text-base font-bold text-stone-800 mb-1">
                कोई सदस्य या व्यवसाय नहीं मिला
              </p>
              <p className="text-xs text-stone-500 mb-6">
                कृपया अन्य खोज शब्द का प्रयास करें अथवा स्वयं अपना प्रोफाइल जोड़ें।
              </p>
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="px-5 py-2.5 rounded-lg bg-amber-800 text-white text-xs font-medium hover:bg-amber-900 transition-colors"
              >
                + अपना प्रोफाइल दर्ज करें
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl border border-stone-200 p-5 flex flex-col justify-between hover:shadow-md transition-shadow relative group"
                >
                  <div>
                    {/* Top Member Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold font-heritage text-lg flex items-center justify-center shrink-0">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <h3 className="font-bold text-stone-900 text-base font-heritage group-hover:text-amber-900 transition-colors">
                              {member.name}
                            </h3>
                            {member.isVerified && (
                              <span title="सत्यापित सदस्य">
                                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                              </span>
                            )}
                          </div>
                          
                          <div className="text-xs text-stone-500 flex items-center gap-2 mt-0.5">
                            <span className="text-amber-800 font-medium">गोत्र: {member.gotra}</span>
                            <span aria-hidden="true">·</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-stone-400" />
                              {member.city}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Blood Group */}
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 shrink-0" title={`रक्त समूह: ${member.bloodGroup}`}>
                        {member.bloodGroup}
                      </span>
                    </div>

                    {/* Profession & Business */}
                    <div className="mt-4 pt-3 border-t border-stone-100">
                      {member.organizationRole && (
                        <div className="mb-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-900 text-amber-100 text-[11px] font-bold shadow-2xs">
                          <Award className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                          <span>{member.organizationRole}</span>
                        </div>
                      )}

                      <p className="text-sm font-semibold text-stone-900">
                        {member.occupation}
                      </p>

                      {member.businessName && (
                        <p className="text-xs font-medium text-amber-900 flex items-center gap-1 mt-0.5">
                          <Building2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                          <span className="truncate">{member.businessName}</span>
                        </p>
                      )}

                      {/* Services Snippet */}
                      {member.servicesOffered && (
                        <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed bg-stone-50 p-2 rounded-lg border border-stone-100">
                          <span className="font-medium text-stone-800">सेवाएं: </span>
                          {member.servicesOffered}
                        </p>
                      )}

                      {/* Samaj Special Offer */}
                      {member.specialOfferForSamaj && (
                        <div className="mt-2.5 p-2 rounded-lg bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-1.5">
                          <Award className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                          <span className="line-clamp-2 font-medium">
                            {member.specialOfferForSamaj}
                          </span>
                        </div>
                      )}

                      {/* Blood Donor Notice */}
                      {member.isBloodDonor && (
                        <div className="mt-2 flex items-center gap-1 text-[11px] text-rose-700 font-medium">
                          <Heart className="w-3 h-3 fill-rose-600 text-rose-600" />
                          <span>आपातकालीन रक्तदाता उपलब्ध ({member.bloodGroup})</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Contact Buttons Footer */}
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <a
                        href={`tel:${member.phone}`}
                        className="p-2 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors"
                        title="सीधा कॉल करें"
                      >
                        <Phone className="w-4 h-4" />
                      </a>

                      {member.whatsapp && (
                        <a
                          href={`https://wa.me/${member.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`नमस्ते ${member.name} जी, मैंने समाज निर्देशिका ऐप पर आपका विवरण देखा।`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                          title="व्हाट्सएप पर संदेश भेजें"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedMember(member)}
                      className="text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1 py-1.5 px-3 rounded-lg hover:bg-amber-50 transition-colors"
                    >
                      <span>विवरण देखें</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        /* Business Opportunities / Exchange Board */
        <div className="space-y-6">
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold font-heritage text-stone-900">
                समाज व्यापार एवं रोजगार विनिमय पट्टिका
              </h3>
              <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
                क्या आपको अपने प्रतिष्ठान हेतु योग्य कर्मचारी, सप्लायर या कोई विशेष सेवा चाहिए? अथवा क्या आप समाज बंधुओं के लिए कोई विशेष अवसर प्रस्तुत करना चाहते हैं?
              </p>
            </div>
            <button
              onClick={() => setIsOppModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-medium shrink-0 transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span>+ आवश्यकता / अवसर जोड़ें</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {opportunities.map((opp) => (
              <div
                key={opp.id}
                className="bg-white rounded-2xl border border-stone-200 p-5 flex flex-col justify-between space-y-4 hover:shadow-xs transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                      opp.type.includes('Requirement') 
                        ? 'bg-rose-50 text-rose-800 border border-rose-200' 
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}>
                      {opp.type}
                    </span>
                    <span className="text-[11px] text-stone-400 font-mono">
                      {opp.postedDate}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-stone-900 font-heritage">
                    {opp.title}
                  </h4>

                  <p className="text-xs text-stone-600 mt-2 leading-relaxed bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                    {opp.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                  <div className="text-xs text-stone-500">
                    <p className="font-semibold text-stone-800">{opp.contactPerson}</p>
                    <p>{opp.city}</p>
                  </div>
                  <a
                    href={`tel:${opp.phone}`}
                    className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>संपर्क करें</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Member Modal */}
      <AddMemberModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddMember={onAddMember}
        gotrasList={gotrasList}
      />

      {/* Member Details Modal */}
      <MemberDetailModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      {/* Add Business Opportunity Modal */}
      {isOppModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg bg-[#FCFAF6] rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-white">
              <h3 className="text-lg font-bold font-heritage text-stone-900">
                नया व्यापारिक अवसर या आवश्यकता दर्ज करें
              </h3>
              <button
                onClick={() => setIsOppModalOpen(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleOppSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">प्रकार</label>
                <select
                  value={oppForm.type}
                  onChange={(e) => setOppForm({ ...oppForm, type: e.target.value as BusinessOpportunity['type'] })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-amber-500/20"
                >
                  <option value="आवश्यकता (Requirement)">आवश्यकता (Requirement - कर्मचारी/सप्लायर/सामग्री चाहिए)</option>
                  <option value="सेवा पेशकश (Offering)">सेवा पेशकश (Offering - समाज को सेवा या उत्पाद देना चाहते हैं)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">शीर्षक (Title) *</label>
                <input
                  type="text"
                  required
                  value={oppForm.title}
                  onChange={(e) => setOppForm({ ...oppForm, title: e.target.value })}
                  placeholder="उदा. शोरूम हेतु बिलिंग ऑपरेटर चाहिए"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">विस्तृत विवरण *</label>
                <textarea
                  rows={3}
                  required
                  value={oppForm.description}
                  onChange={(e) => setOppForm({ ...oppForm, description: e.target.value })}
                  placeholder="आवश्यक योग्यता, कार्य विवरण, वेतन या नियम लिखें..."
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-amber-500/20 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">संपर्क व्यक्ति *</label>
                  <input
                    type="text"
                    required
                    value={oppForm.contactPerson}
                    onChange={(e) => setOppForm({ ...oppForm, contactPerson: e.target.value })}
                    placeholder="उदा. रमेश बंसल"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">मोबाइल नंबर *</label>
                  <input
                    type="tel"
                    required
                    value={oppForm.phone}
                    onChange={(e) => setOppForm({ ...oppForm, phone: e.target.value })}
                    placeholder="+91 98290 XXXXX"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">शहर व राज्य</label>
                <input
                  type="text"
                  value={oppForm.city}
                  onChange={(e) => setOppForm({ ...oppForm, city: e.target.value })}
                  placeholder="उदा. जयपुर, राजस्थान"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setIsOppModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-stone-300 text-stone-700 text-xs font-medium hover:bg-stone-100"
                >
                  रद्द करें
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-amber-800 text-white text-xs font-medium hover:bg-amber-900"
                >
                  पट्टिका पर प्रकाशित करें
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
