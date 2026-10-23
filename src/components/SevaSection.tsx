import React, { useState } from 'react';
import { HeartHandshake, ShieldCheck, Phone, CheckCircle2, Heart, Plus, X } from 'lucide-react';
import { SevaProject } from '../types';

interface SevaSectionProps {
  projects: SevaProject[];
  onContribute: (projectId: string, amount: number) => void;
  onRequestAid: (aid: { title: string; category: SevaProject['category']; description: string; contactNumber: string }) => void;
}

export const SevaSection: React.FC<SevaSectionProps> = ({ projects, onContribute, onRequestAid }) => {
  const [pledgeModalProject, setPledgeModalProject] = useState<SevaProject | null>(null);
  const [pledgeAmount, setPledgeAmount] = useState('5100');
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');

  const [isAidModalOpen, setIsAidModalOpen] = useState(false);
  const [aidForm, setAidForm] = useState({
    title: '',
    category: 'शिक्षा छात्रवृत्ति' as SevaProject['category'],
    description: '',
    contactNumber: ''
  });

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pledgeModalProject) return;
    const amt = parseInt(pledgeAmount, 10);
    if (isNaN(amt) || amt <= 0) return;

    onContribute(pledgeModalProject.id, amt);
    alert(`कृतज्ञता! श्री ${donorName || 'समाज बंधु'} जी, आपका ₹${amt.toLocaleString('hi-IN')} का सहयोग संकल्प स्वीकार किया गया।`);
    setPledgeModalProject(null);
    setDonorName('');
    setDonorPhone('');
  };

  const handleAidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aidForm.title || !aidForm.contactNumber) {
      alert('कृपया विवरण एवं संपर्क नंबर अवश्य भरें।');
      return;
    }
    onRequestAid(aidForm);
    alert('आपकी सहायता का अनुरोध समाज कल्याण समिति को प्रेषित कर दिया गया है। समिति शीघ्र संपर्क करेगी।');
    setIsAidModalOpen(false);
    setAidForm({
      title: '',
      category: 'शिक्षा छात्रवृत्ति',
      description: '',
      contactNumber: ''
    });
  };

  return (
    <section id="seva" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <span>परोपकाराय पुण्याय</span>
            <span aria-hidden="true">·</span>
            <span>जनकल्याण एवं सेवा</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-heritage text-stone-900 tracking-tight">
            पारस्परिक सेवा व सहयोग मंच
          </h2>
          <p className="mt-2 text-base text-stone-600 max-w-2xl leading-relaxed">
            समाज का कोई भी बंधु असहाय न रहे। शिक्षा छात्रवृत्ति, आपातकालीन चिकित्सा सहायता और सामूहिक जनकल्याणकारी परियोजनाएं।
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAidModalOpen(true)}
            className="px-4 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-medium transition-colors"
          >
            सहायता का अनुरोध करें
          </button>
        </div>
      </div>

      {/* Hero Seva Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-stone-200">
        <div className="lg:col-span-5 rounded-2xl overflow-hidden min-h-[260px] border border-stone-200">
          <img
            src="/src/assets/images/social_welfare_seva_1792772957325.jpg"
            alt="सामुदायिक सेवा एवं छात्र प्रोत्साहन"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold text-amber-900 uppercase tracking-widest">
            पारदर्शिता एवं सामाजिक उत्तरदायित्व
          </span>
          <h3 className="text-2xl font-bold font-heritage text-stone-900">
            "जब समाज एक साथ खड़ा होता है, तो कोई परिवार अकेला नहीं रहता"
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-justify">
            समाज की कल्याण निधि 100% पारदर्शी है। एकत्रित प्रत्येक पाई का उपयोग प्रत्यक्ष रूप से छात्रवृत्ति, चिकित्सा एवं निर्धन परिवारों के पुनर्वास में किया जाता है। नियमित वित्तीय विवरण समाज की आम सभा में सार्वजनिक रूप से प्रस्तुत किया जाता है।
          </p>
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-amber-200/50">
              <p className="text-xs text-stone-500">लाभान्वित छात्र</p>
              <p className="text-lg font-bold text-stone-900 font-mono tabular-nums">420+</p>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-amber-200/50">
              <p className="text-xs text-stone-500">चिकित्सा सहायता</p>
              <p className="text-lg font-bold text-stone-900 font-mono tabular-nums">115 परिवार</p>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-amber-200/50">
              <p className="text-xs text-stone-500">सामूहिक कन्यादान</p>
              <p className="text-lg font-bold text-stone-900 font-mono tabular-nums">54 कन्याएं</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj) => {
          const percent = Math.min(100, Math.round((proj.raisedAmount / proj.targetAmount) * 100));

          return (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-amber-900">{proj.category}</span>
                  <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                    proj.status === 'पूर्ण' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-800'
                  }`}>
                    {proj.status}
                  </span>
                </div>

                <h4 className="text-lg font-bold font-heritage text-stone-900 leading-snug">
                  {proj.title}
                </h4>

                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {proj.description}
                </p>

                {/* Progress */}
                <div className="mt-5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500">संकल्प राशि:</span>
                    <span className="font-bold text-stone-900 font-mono tabular-nums">
                      ₹{proj.raisedAmount.toLocaleString('hi-IN')} / ₹{proj.targetAmount.toLocaleString('hi-IN')}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
                    <div
                      className="h-full bg-amber-800 rounded-full transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-stone-500">
                    <span>{percent}% पूर्ण</span>
                    <span>{proj.beneficiaryCount} लाभार्थी</span>
                  </div>
                </div>
              </div>

              {/* Coordinator & Action */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
                <div className="text-[11px] text-stone-500">
                  <p className="font-medium text-stone-800">संयोजक: {proj.coordinator}</p>
                  <p>{proj.contactNumber}</p>
                </div>

                {proj.status !== 'पूर्ण' && (
                  <button
                    onClick={() => setPledgeModalProject(proj)}
                    className="px-4 py-2 rounded-lg bg-amber-800 hover:bg-amber-900 text-white text-xs font-medium transition-colors"
                  >
                    सहयोग दें
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pledge Contribution Modal */}
      {pledgeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-[#FCFAF6] rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-white">
              <h3 className="text-base font-bold font-heritage text-stone-900">
                सहयोग संकल्प (Pledge Contribution)
              </h3>
              <button
                onClick={() => setPledgeModalProject(null)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handlePledgeSubmit} className="p-6 space-y-4">
              <p className="text-xs text-stone-600">
                परियोजना: <span className="font-bold text-stone-900">{pledgeModalProject.title}</span>
              </p>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">सहयोग राशि (₹) *</label>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {['2100', '5100', '11000'].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setPledgeAmount(amt)}
                      className={`py-1.5 rounded-lg text-xs font-mono font-bold border transition-colors ${
                        pledgeAmount === amt ? 'bg-amber-800 text-white border-amber-800' : 'bg-white border-stone-200 text-stone-700'
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  required
                  value={pledgeAmount}
                  onChange={(e) => setPledgeAmount(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">आपका नाम *</label>
                <input
                  type="text"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="उदा. रमेश चंद्र बंसल"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">मोबाइल नंबर</label>
                <input
                  type="tel"
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  placeholder="+91 98290 XXXXX"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setPledgeModalProject(null)}
                  className="px-4 py-2 rounded-lg border border-stone-300 text-stone-700 text-xs font-medium"
                >
                  रद्द करें
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-amber-800 text-white text-xs font-medium hover:bg-amber-900"
                >
                  सहयोग संकल्प स्वीकारें
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Aid Request Modal */}
      {isAidModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-[#FCFAF6] rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-white">
              <h3 className="text-base font-bold font-heritage text-stone-900">
                सामाजिक सहायता का अनुरोध
              </h3>
              <button
                onClick={() => setIsAidModalOpen(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAidSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">सहायता की श्रेणी *</label>
                <select
                  value={aidForm.category}
                  onChange={(e) => setAidForm({ ...aidForm, category: e.target.value as SevaProject['category'] })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs"
                >
                  <option value="शिक्षा छात्रवृत्ति">शिक्षा छात्रवृत्ति व पुस्तक सहायता</option>
                  <option value="चिकित्सा सहायता">आपातकालीन चिकित्सा सहायता</option>
                  <option value="कन्यादान सहयोग">कन्यादान / विवाह सहयोग</option>
                  <option value="आपातकालीन राहत">आकस्मिक संकट / आपदा राहत</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">विषय / आवश्यकता का शीर्षक *</label>
                <input
                  type="text"
                  required
                  value={aidForm.title}
                  onChange={(e) => setAidForm({ ...aidForm, title: e.target.value })}
                  placeholder="उदा. इंजीनियरिंग द्वितीय वर्ष हेतु शिक्षण शुल्क सहायता"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">विस्तृत परिस्थिति व विवरण *</label>
                <textarea
                  rows={3}
                  required
                  value={aidForm.description}
                  onChange={(e) => setAidForm({ ...aidForm, description: e.target.value })}
                  placeholder="पारिवारिक स्थिति, आवश्यकता की गंभीरता एवं आवश्यक राशि..."
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">संपर्क मोबाइल नंबर *</label>
                <input
                  type="tel"
                  required
                  value={aidForm.contactNumber}
                  onChange={(e) => setAidForm({ ...aidForm, contactNumber: e.target.value })}
                  placeholder="+91 98290 XXXXX"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setIsAidModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-stone-300 text-stone-700 text-xs font-medium"
                >
                  रद्द करें
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-amber-800 text-white text-xs font-medium hover:bg-amber-900"
                >
                  अनुरोध भेजें
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
