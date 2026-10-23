import React, { useState } from 'react';
import { Heart, Search, Phone, UserPlus, Filter, X, ShieldCheck } from 'lucide-react';
import { MatrimonialProfile } from '../types';

interface MatrimonialSectionProps {
  profiles: MatrimonialProfile[];
  onAddProfile: (profile: Omit<MatrimonialProfile, 'id'>) => void;
  gotrasList: string[];
}

export const MatrimonialSection: React.FC<MatrimonialSectionProps> = ({
  profiles,
  onAddProfile,
  gotrasList
}) => {
  const [genderFilter, setGenderFilter] = useState<'all' | 'वर (Groom)' | 'वधू (Bride)'>('all');
  const [searchGotra, setSearchGotra] = useState('');
  const [isAddOpen, setIsAddOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    gender: 'वर (Groom)' as MatrimonialProfile['gender'],
    birthYear: 1997,
    height: "5'8\"",
    education: '',
    occupation: '',
    monthlyIncome: '',
    gotra: gotrasList[0] || 'बंसल',
    maternalGotra: gotrasList[1] || 'गोयल',
    city: '',
    state: '',
    fatherName: '',
    fatherOccupation: '',
    contactPerson: '',
    contactPhone: ''
  });

  const filteredProfiles = profiles.filter((p) => {
    if (genderFilter !== 'all' && p.gender !== genderFilter) return false;
    if (searchGotra && !p.gotra.toLowerCase().includes(searchGotra.toLowerCase().trim())) return false;
    return true;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.education || !formData.occupation || !formData.contactPhone) {
      alert('कृपया नाम, शिक्षा, व्यवसाय व संपर्क नंबर अवश्य भरें।');
      return;
    }
    onAddProfile(formData);
    setIsAddOpen(false);
  };

  return (
    <section id="matrimonial" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <span>युवा एवं पारिवारिक संगम</span>
            <span aria-hidden="true">·</span>
            <span>संस्कारवान वैवाहिक परिचय</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-heritage text-stone-900 tracking-tight">
            समाज वैवाहिक निर्देशिका
          </h2>
          <p className="mt-2 text-base text-stone-600 max-w-2xl leading-relaxed">
            समाज के सुशिक्षित, सुसंस्कृत एवं योग्य युवक-युवतियों का शालीन पारिवारिक परिचय मंच। गोत्र व ननिहाल मर्यादा का पूर्ण सम्मान।
          </p>
        </div>

        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-medium text-sm shadow-xs transition-colors shrink-0"
        >
          <UserPlus className="w-4 h-4" />
          <span>+ वैवाहिक विवरणिका जोड़ें</span>
        </button>
      </div>

      {/* Hero Visual Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FCFAF6] rounded-3xl p-6 sm:p-8 border border-stone-200">
        <div className="lg:col-span-5 rounded-2xl overflow-hidden min-h-[220px] border border-stone-200">
          <img
            src="/src/assets/images/community_youth_dialogue_1792772956923.jpg"
            alt="समाज युवा संवाद"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-7 space-y-3">
          <span className="text-xs font-bold text-amber-900 uppercase tracking-widest">
            पारिवारिक संस्कार एवं मर्यादा
          </span>
          <h3 className="text-2xl font-bold font-heritage text-stone-900">
            दहेज-मुक्त, सादगीपूर्ण एवं आदर्श विवाह संकल्प
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            हमारा समाज दिखावे और अनावश्यक आडंबर से दूर होकर सुयोग्य वर-वधू के चयन में पारिवारिक मूल्यों, शिक्षा एवं स्वभाव को सर्वोच्च प्राथमिकता देता है। अभिभावक सीधे एक-दूसरे से संवाद स्थापित कर सकते हैं।
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl">
          <button
            onClick={() => setGenderFilter('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              genderFilter === 'all' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            सभी विवरण ({profiles.length})
          </button>
          <button
            onClick={() => setGenderFilter('वर (Groom)')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              genderFilter === 'वर (Groom)' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            वर परिचय (Grooms)
          </button>
          <button
            onClick={() => setGenderFilter('वधू (Bride)')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              genderFilter === 'वधू (Bride)' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            वधू परिचय (Brides)
          </button>
        </div>

        <input
          type="text"
          value={searchGotra}
          onChange={(e) => setSearchGotra(e.target.value)}
          placeholder="गोत्र द्वारा खोजें..."
          className="px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-xs text-stone-900 focus:outline-none focus:border-amber-600"
        />
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProfiles.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between space-y-4 hover:shadow-xs transition-shadow"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                    p.gender.includes('वर') ? 'bg-blue-50 text-blue-800' : 'bg-pink-50 text-pink-800'
                  }`}>
                    {p.gender}
                  </span>
                  <h4 className="text-xl font-bold font-heritage text-stone-900 mt-1">
                    {p.fullName}
                  </h4>
                  <p className="text-xs text-stone-500">
                    जन्म: {p.birthYear} ({new Date().getFullYear() - p.birthYear} वर्ष) · कद: {p.height}
                  </p>
                </div>

                <div className="text-right text-xs">
                  <p className="font-bold text-amber-900 font-heritage">स्वगोत्र: {p.gotra}</p>
                  <p className="text-stone-500 text-[11px]">ननिहाल: {p.maternalGotra}</p>
                </div>
              </div>

              {/* Education & Occupation */}
              <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5 text-xs">
                <div>
                  <span className="text-stone-500">शिक्षा: </span>
                  <span className="font-semibold text-stone-900">{p.education}</span>
                </div>
                <div>
                  <span className="text-stone-500">पेशा/कार्य: </span>
                  <span className="font-semibold text-stone-900">{p.occupation}</span>
                </div>
                {p.monthlyIncome && (
                  <div>
                    <span className="text-stone-500">मासिक आय: </span>
                    <span className="font-mono font-medium text-stone-800">{p.monthlyIncome}</span>
                  </div>
                )}
                <div>
                  <span className="text-stone-500">स्थान: </span>
                  <span className="text-stone-800">{p.city}, {p.state}</span>
                </div>
              </div>

              {/* Family details */}
              <div className="mt-3 bg-[#FAF7F2] p-3 rounded-xl border border-amber-200/50 text-xs space-y-0.5">
                <p className="text-stone-700">
                  <span className="font-semibold">पिताजी: </span>{p.fatherName} ({p.fatherOccupation})
                </p>
                <p className="text-stone-500 text-[11px]">
                  संपर्क सूत्र: {p.contactPerson}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${p.contactPhone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>अभिभावक से संपर्क करें ({p.contactPhone})</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Add Profile Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-lg bg-[#FCFAF6] rounded-2xl shadow-2xl border border-stone-200 p-6 space-y-4 my-8 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="text-lg font-bold font-heritage text-stone-900">
                सुयोग्य वैवाहिक विवरण दर्ज करें
              </h3>
              <button onClick={() => setIsAddOpen(false)} className="p-1 rounded-lg text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">प्रकार *</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value as MatrimonialProfile['gender'] })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs"
                  >
                    <option value="वर (Groom)">वर (Groom)</option>
                    <option value="वधू (Bride)">वधू (Bride)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">पूरा नाम *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="उदा. रोहन बंसल"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">जन्म वर्ष *</label>
                  <input
                    type="number"
                    required
                    value={formData.birthYear}
                    onChange={(e) => setFormData({ ...formData, birthYear: parseInt(e.target.value, 10) })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">कद (Height)</label>
                  <input
                    type="text"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    placeholder="उदा. 5'9''"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">स्वगोत्र *</label>
                  <input
                    type="text"
                    required
                    value={formData.gotra}
                    onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">ननिहाल गोत्र *</label>
                  <input
                    type="text"
                    required
                    value={formData.maternalGotra}
                    onChange={(e) => setFormData({ ...formData, maternalGotra: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">शैक्षणिक योग्यता *</label>
                <input
                  type="text"
                  required
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  placeholder="उदा. B.Tech, MBA, MBBS, CA"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">पेशा / पद / कंपनी *</label>
                <input
                  type="text"
                  required
                  value={formData.occupation}
                  onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                  placeholder="उदा. सॉफ्टवेयर इंजीनियर (MNC) / व्यवसायी"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">पिताजी का नाम</label>
                  <input
                    type="text"
                    value={formData.fatherName}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    placeholder="उदा. श्री दिनेश बंसल"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">पिताजी का व्यवसाय</label>
                  <input
                    type="text"
                    value={formData.fatherOccupation}
                    onChange={(e) => setFormData({ ...formData, fatherOccupation: e.target.value })}
                    placeholder="उदा. व्यापारी / सेवा निवृत्त"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">संपर्क व्यक्ति</label>
                  <input
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="उदा. दिनेश बंसल (पिताजी)"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">संपर्क मोबाइल नंबर *</label>
                  <input
                    type="tel"
                    required
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    placeholder="+91 98290 XXXXX"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setIsAddOpen(false)}
                  className="px-4 py-2 rounded-lg border border-stone-300 text-stone-700 text-xs font-medium"
                >
                  रद्द करें
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-amber-800 text-white text-xs font-medium hover:bg-amber-900"
                >
                  निर्देशिका में जोड़ें
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
