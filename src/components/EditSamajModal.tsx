import React, { useState } from 'react';
import { X, Save, Edit3, Sparkles } from 'lucide-react';
import { SamajProfile } from '../types';

interface EditSamajModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: SamajProfile;
  onSave: (updated: SamajProfile) => void;
}

export const EditSamajModal: React.FC<EditSamajModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave
}) => {
  const [formData, setFormData] = useState({
    name: profile.name,
    tagline: profile.tagline,
    motto: profile.motto,
    historyText: profile.historyText,
    originEra: profile.originEra,
    kuldevi: profile.kuldevi,
    kuldevta: profile.kuldevta,
    gotrasInput: profile.mainGotras.join(', '),
    whatsapp: profile.socialLinks?.whatsapp || 'https://chat.whatsapp.com/IATXtm7so0i4dTt4O51alM?s=cl&p=a&mlu=4&ilr=4',
    instagram: profile.socialLinks?.instagram || 'https://www.instagram.com/sama.jsetu?xtok=bXM5emdkcGF5dWxi',
    youtube: profile.socialLinks?.youtube || 'https://youtube.com/shorts/FunDooV5Ig0?si=rx0_pQUy90OrPd-L',
    facebook: profile.socialLinks?.facebook || 'https://www.facebook.com/share/1Fg4rvDmKE/'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const gotras = formData.gotrasInput
      .split(',')
      .map((g) => g.trim())
      .filter((g) => g.length > 0);

    onSave({
      ...profile,
      name: formData.name.trim(),
      tagline: formData.tagline.trim(),
      motto: formData.motto.trim(),
      historyText: formData.historyText.trim(),
      originEra: formData.originEra.trim(),
      kuldevi: formData.kuldevi.trim(),
      kuldevta: formData.kuldevta.trim(),
      mainGotras: gotras.length > 0 ? gotras : profile.mainGotras,
      socialLinks: {
        whatsapp: formData.whatsapp.trim(),
        instagram: formData.instagram.trim(),
        youtube: formData.youtube.trim(),
        facebook: formData.facebook.trim()
      }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FCFAF6] rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heritage text-stone-900">
                समाज का विवरण व स्वरूप अनुकूलित करें
              </h3>
              <p className="text-xs text-stone-600">
                आप संगठन के विवरण, ध्येय वाक्य, कुल परंपरा और गोत्र सूची को आवश्यकतानुसार अनुकूलित कर सकते हैं
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 max-h-[75vh] overflow-y-auto space-y-4">
          
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              समाज / संगठन का नाम *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="उदा. अखिल भारतीय धानुक समाज संगठन, मध्य प्रदेश"
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:ring-2 focus:ring-amber-500/20"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                ध्येय वाक्य (Motto)
              </label>
              <input
                type="text"
                value={formData.motto}
                onChange={(e) => setFormData({ ...formData, motto: e.target.value })}
                placeholder="उदा. संघे शक्ति कलियुगे"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                उत्पत्ति काल / ऐतिहासिक कालखंड
              </label>
              <input
                type="text"
                value={formData.originEra}
                onChange={(e) => setFormData({ ...formData, originEra: e.target.value })}
                placeholder="उदा. द्वापर युग से अविरल सांस्कृतिक यात्रा"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              टैगलाइन (संक्षिप्त परिचय वाक्य)
            </label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              placeholder="उदा. एक सूत्र में बंधा सशक्त समाज — परंपरा, प्रगति और परस्पर सहयोग"
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:ring-2 focus:ring-amber-500/20"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                कुलदेवी
              </label>
              <input
                type="text"
                value={formData.kuldevi}
                onChange={(e) => setFormData({ ...formData, kuldevi: e.target.value })}
                placeholder="उदा. माँ भगवती महालक्ष्मी / माँ जगदम्बा"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                कुलदेवता / इष्टदेव
              </label>
              <input
                type="text"
                value={formData.kuldevta}
                onChange={(e) => setFormData({ ...formData, kuldevta: e.target.value })}
                placeholder="उदा. परम पूज्य महाराज धनक ऋषि जी महाराज"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              समाज का वर्णन व गौरवशाली इतिहास (History Narrative) *
            </label>
            <textarea
              rows={4}
              required
              value={formData.historyText}
              onChange={(e) => setFormData({ ...formData, historyText: e.target.value })}
              placeholder="अपने समाज के पूर्वजों का इतिहास, गौरव गाथा, त्याग और सामाजिक योगदान लिखें..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:ring-2 focus:ring-amber-500/20 resize-none leading-relaxed"
            />
          </div>

          <div className="pt-2 border-t border-stone-200">
            <h4 className="text-xs font-bold text-stone-900 mb-2 uppercase tracking-wider">
              आधिकारिक सोशल मीडिया लिंक्स (Social Media IDs)
            </h4>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-emerald-800 mb-1">
                  व्हाट्सएप ग्रुप लिंक (WhatsApp Group URL)
                </label>
                <input
                  type="url"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="https://chat.whatsapp.com/..."
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-emerald-500/20 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-pink-700 mb-1">
                  इंस्टाग्राम लिंक (Instagram Profile URL)
                </label>
                <input
                  type="url"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  placeholder="https://www.instagram.com/sama.jsetu..."
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-pink-500/20 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-red-700 mb-1">
                  यूट्यूब लिंक (YouTube Channel / Video URL)
                </label>
                <input
                  type="url"
                  value={formData.youtube}
                  onChange={(e) => setFormData({ ...formData, youtube: e.target.value })}
                  placeholder="https://youtube.com/..."
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-red-500/20 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-blue-700 mb-1">
                  फेसबुक लिंक (Facebook Page / Group URL)
                </label>
                <input
                  type="url"
                  value={formData.facebook}
                  onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                  placeholder="https://www.facebook.com/..."
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-blue-500/20 font-mono"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              प्रमुख गोत्र व शाखाएं (कॉमा से अलग करें)
            </label>
            <textarea
              rows={2}
              value={formData.gotrasInput}
              onChange={(e) => setFormData({ ...formData, gotrasInput: e.target.value })}
              placeholder="बंसल, धानुक, धानक, बरदेले, कैथोरा, बमनेले, संदेला, मौर्य, कौशिक..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:ring-2 focus:ring-amber-500/20 resize-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-stone-300 text-stone-700 text-xs font-medium"
            >
              रद्द करें
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-amber-800 text-white text-xs font-medium hover:bg-amber-900 flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>विवरण सहेजें</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
