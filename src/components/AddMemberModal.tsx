import React, { useState } from 'react';
import { X, UserPlus, Phone, MapPin, Briefcase, Heart, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { SamajMember, ProfessionCategory } from '../types';

interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMember: (member: Omit<SamajMember, 'id' | 'joinedYear'>) => void;
  gotrasList: string[];
}

const professionCategories: ProfessionCategory[] = [
  'व्यापार व उद्योग',
  'आईटी व सॉफ्टवेयर सेवाएं',
  'चिकित्सा व स्वास्थ्य',
  'कानूनी व वित्तीय सेवाएं (CA/वकील)',
  'शिक्षा, कोचिंग व परामर्श',
  'निर्माण, आर्किटेक्ट व इंटीरियर',
  'गृह सेवाएं, कारीगर व खानपान',
  'सरकारी सेवा व प्रशासन',
  'कृषि व जैविक उद्यम',
  'अन्य स्वरोजगार'
];

export const AddMemberModal: React.FC<AddMemberModalProps> = ({
  isOpen,
  onClose,
  onAddMember,
  gotrasList
}) => {
  const [formData, setFormData] = useState({
    name: '',
    gotra: gotrasList[0] || 'बंसल',
    customGotra: '',
    city: '',
    state: '',
    occupation: '',
    businessName: '',
    servicesOffered: '',
    specialOfferForSamaj: '',
    professionCategory: professionCategories[0],
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    bloodGroup: 'B+' as SamajMember['bloodGroup'],
    isBloodDonor: true,
    familyHeadName: '',
    bio: ''
  });

  const [useCustomGotra, setUseCustomGotra] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.city.trim() || !formData.phone.trim() || !formData.occupation.trim()) {
      alert('कृपया नाम, शहर, मोबाइल नंबर और व्यवसाय अवश्य भरें।');
      return;
    }

    const finalGotra = useCustomGotra && formData.customGotra.trim() 
      ? formData.customGotra.trim() 
      : formData.gotra;

    onAddMember({
      name: formData.name.trim(),
      gotra: finalGotra,
      city: formData.city.trim(),
      state: formData.state.trim() || 'भारत',
      occupation: formData.occupation.trim(),
      businessName: formData.businessName.trim() || undefined,
      servicesOffered: formData.servicesOffered.trim() || undefined,
      specialOfferForSamaj: formData.specialOfferForSamaj.trim() || undefined,
      professionCategory: formData.professionCategory,
      phone: formData.phone.trim(),
      whatsapp: formData.whatsapp.trim() || formData.phone.trim().replace(/\D/g, ''),
      email: formData.email.trim() || undefined,
      address: formData.address.trim() || undefined,
      bloodGroup: formData.bloodGroup,
      isBloodDonor: formData.isBloodDonor,
      familyHeadName: formData.familyHeadName.trim() || undefined,
      bio: formData.bio.trim() || undefined,
      isVerified: true
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FCFAF6] rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heritage text-stone-900">
                समाज निर्देशिका से जुड़ें
              </h3>
              <p className="text-xs text-stone-600">
                अपनी संपर्क जानकारी, व्यवसाय अथवा सेवाएं जोड़कर समाज से सीधे जुड़ें
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-12 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold font-heritage text-stone-900 mb-2">
              समाज परिवार में आपका हार्दिक स्वागत है!
            </h4>
            <p className="text-stone-600 text-sm max-w-md">
              आपकी जानकारी समाज निर्देशिका में सफलता पूर्वक जोड़ दी गई है। अब समाज का हर व्यक्ति आपसे संपर्क और व्यावसायिक सहयोग कर सकेगा।
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
            
            {/* Section 1: Basic Identity */}
            <div className="space-y-4">
              <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                <span>01. व्यक्तिगत व पारिवारिक परिचय</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    पूरा नाम <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="उदा. राजेश कुमार बंसल"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-medium text-stone-700">
                      गोत्र / उपजाति <span className="text-red-500">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setUseCustomGotra(!useCustomGotra)}
                      className="text-[11px] text-amber-700 hover:underline"
                    >
                      {useCustomGotra ? 'सूची से चुनें' : 'अन्य गोत्र लिखें'}
                    </button>
                  </div>
                  {useCustomGotra ? (
                    <input
                      type="text"
                      value={formData.customGotra}
                      onChange={(e) => setFormData({ ...formData, customGotra: e.target.value })}
                      placeholder="अपना गोत्र लिखें"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                    />
                  ) : (
                    <select
                      value={formData.gotra}
                      onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                    >
                      {gotrasList.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    वर्तमान नगर / शहर <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="उदा. जयपुर, इंदौर, दिल्ली, आदि"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    राज्य
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="उदा. राजस्थान, उत्तर प्रदेश, आदि"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    मूल निवास / परिवार के मुखिया का नाम (ऐच्छिक)
                  </label>
                  <input
                    type="text"
                    value={formData.familyHeadName}
                    onChange={(e) => setFormData({ ...formData, familyHeadName: e.target.value })}
                    placeholder="उदा. सुपुत्र/सुपुत्री श्री रामरतन जी बंसल (मूल ग्राम: फतेहपुर)"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Profession, Business & Services */}
            <div className="space-y-4 pt-2 border-t border-stone-200">
              <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                <span>02. व्यवसाय, आजीविका व सेवाएं (नेटवर्किंग हेतु)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    कार्य क्षेत्र (Category) <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.professionCategory}
                    onChange={(e) => setFormData({ ...formData, professionCategory: e.target.value as ProfessionCategory })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                  >
                    {professionCategories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    पेशा / पद / व्यवसाय का प्रकार <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    placeholder="उदा. चार्टर्ड एकाउंटेंट / वस्त्र विक्रेता / सॉफ्टवेयर डेवलपर"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    फर्म / दुकान / कंपनी का नाम (यदि लागू हो)
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="उदा. बंसल टेक्सटाइल्स प्राइवेट लिमिटेड / श्री गणेश हार्डवेयर"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    प्रदान की जाने वाली सेवाएं या उत्पाद (Services & Products)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.servicesOffered}
                    onChange={(e) => setFormData({ ...formData, servicesOffered: e.target.value })}
                    placeholder="उदा. जीएसटी व आयकर रिटर्न, लोन प्रोजेक्ट रिपोर्ट, थोक वस्त्र आपूर्ति, भवन नक्शा व इंटीरियर..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 resize-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    समाज बंधुओं हेतु विशेष सुविधा या छूट (Special Privilege for Samaj)
                  </label>
                  <input
                    type="text"
                    value={formData.specialOfferForSamaj}
                    onChange={(e) => setFormData({ ...formData, specialOfferForSamaj: e.target.value })}
                    placeholder="उदा. समाज के नए उद्यमियों को प्रथम निःशुल्क परामर्श / 10% विशेष छूट"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-amber-300 bg-amber-50/50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Contact & Blood Group */}
            <div className="space-y-4 pt-2 border-t border-stone-200">
              <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                <span>03. संपर्क सूत्र व रक्त समूह</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    मोबाइल नंबर (कॉलिंग) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98290 XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    व्हाट्सएप नंबर (यदि भिन्न हो)
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+91 98290 XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    ईमेल पता (ऐच्छिक)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    रक्त समूह (Blood Group) <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.bloodGroup}
                    onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value as SamajMember['bloodGroup'] })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 font-mono"
                  >
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

                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    कार्यालय / दुकान या निवास का पूरा पता
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="उदा. दुकान नं. 14, मेन मार्केट, जोहरी बाजार"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                  />
                </div>

                <div className="md:col-span-2 bg-rose-50/60 p-3.5 rounded-xl border border-rose-100 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="bloodDonorCheck"
                    checked={formData.isBloodDonor}
                    onChange={(e) => setFormData({ ...formData, isBloodDonor: e.target.checked })}
                    className="w-4 h-4 text-rose-600 rounded border-stone-300 focus:ring-rose-500 cursor-pointer"
                  />
                  <label htmlFor="bloodDonorCheck" className="text-xs text-stone-800 cursor-pointer">
                    <span className="font-semibold text-rose-800">जीवन रक्षक रक्तदाता:</span> क्या आप आपातकाल में किसी समाज बंधु अथवा जरूरतमंद को रक्तदान करने के इच्छुक हैं?
                  </label>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-200">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors"
              >
                रद्द करें
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-amber-800 hover:bg-amber-900 text-white text-sm font-medium shadow-xs transition-colors flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>निर्देशिका में जोड़ें</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
