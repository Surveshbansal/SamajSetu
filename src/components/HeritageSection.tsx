import React, { useState } from 'react';
import { 
  BookOpen, 
  HeartHandshake, 
  TrendingUp, 
  ShieldCheck, 
  Scale, 
  Search, 
  Edit3, 
  Sparkles, 
  CheckCircle2, 
  Phone,
  MessageSquare,
  Award,
  Users,
  Smartphone,
  ExternalLink,
  ScrollText
} from 'lucide-react';
import { 
  WhatsAppIcon, 
  InstagramIcon, 
  YouTubeIcon, 
  FacebookIcon 
} from './SocialIcons';
import { DhanakHistoryDeepDive } from './DhanakHistoryDeepDive';
import { SamajProfile } from '../types';

interface HeritageSectionProps {
  profile: SamajProfile;
  onEditProfileClick: () => void;
}

export const HeritageSection: React.FC<HeritageSectionProps> = ({ profile, onEditProfileClick }) => {
  const [gotraSearch, setGotraSearch] = useState('');

  const filteredGotras = profile.mainGotras.filter((g) =>
    g.toLowerCase().includes(gotraSearch.toLowerCase().trim())
  );

  return (
    <section id="heritage" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Hero Marquee / Focal Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-stone-200 bg-stone-900 shadow-xl">
        <div className="relative min-h-[480px] lg:min-h-[540px] flex items-end">
          <img
            src="/src/assets/images/maharaj_dhanak_rishi_1792774810608.jpg"
            alt="परम पूज्य महाराज धनक ऋषि जी"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/65 to-transparent" />
          
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-3xl text-white space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Sparkles className="w-4 h-4" />
              <span>{profile.originEra}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heritage tracking-tight leading-tight text-white">
              {profile.name}
            </h1>

            <p className="text-amber-200 text-lg sm:text-xl font-heritage font-semibold">
              {profile.motto}
            </p>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {profile.tagline}
            </p>

            {/* Quick Digital Contact Pill for Suraj Bansal & Social Media Links */}
            <div className="bg-amber-950/85 backdrop-blur-md border border-amber-600/40 p-4 rounded-2xl space-y-3 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold text-amber-300">सोशल मीडिया एवं ऐप डेवलपमेंट प्रमुख: </span>
                    <span className="text-white">सूरज बंसल</span>
                  </div>
                </div>
                <a
                  href="tel:+919111206326"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium text-xs transition-colors shrink-0 font-mono"
                >
                  <Phone className="w-3 h-3" />
                  <span>+91 9111206326</span>
                </a>
              </div>

              {/* Social Media Shortcut Pills */}
              <div className="pt-2 border-t border-amber-800/60 flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-semibold text-amber-200">सोशल मीडिया:</span>
                
                {/* WhatsApp */}
                <a
                  href={profile.socialLinks?.whatsapp || 'https://chat.whatsapp.com/IATXtm7so0i4dTt4O51alM?s=cl&p=a&mlu=4&ilr=4'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold transition-all shadow-2xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>व्हाट्सएप ग्रुप</span>
                </a>

                {/* Instagram */}
                <a
                  href={profile.socialLinks?.instagram || 'https://www.instagram.com/sama.jsetu?xtok=bXM5emdkcGF5dWxi'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white text-[11px] font-bold transition-all shadow-2xs"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>इंस्टाग्राम (@sama.jsetu)</span>
                </a>

                {/* YouTube */}
                <a
                  href={profile.socialLinks?.youtube || 'https://youtube.com/shorts/FunDooV5Ig0?si=rx0_pQUy90OrPd-L'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-500 text-white text-[11px] font-bold transition-all shadow-2xs"
                >
                  <YouTubeIcon className="w-3.5 h-3.5" />
                  <span>यूट्यूब</span>
                </a>

                {/* Facebook */}
                <a
                  href={profile.socialLinks?.facebook || 'https://www.facebook.com/share/1Fg4rvDmKE/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold transition-all shadow-2xs"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                  <span>फेसबुक</span>
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 flex-wrap">
              <a
                href="#history-culture"
                className="px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium text-sm transition-colors shadow-sm flex items-center gap-2 border border-amber-400/40"
              >
                <ScrollText className="w-4 h-4 text-amber-200" />
                <span>इतिहास, भगवान व संस्कृति</span>
              </a>
              <a
                href="#social-links"
                className="px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-sm transition-colors shadow-sm flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>सोशल मीडिया से जुड़ें</span>
              </a>
              <a
                href="#leadership"
                className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-xs transition-colors border border-white/20"
              >
                पदाधिकारी सूची
              </a>
              <a
                href="#directory"
                className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-xs transition-colors border border-white/20"
              >
                समाज निर्देशिका
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 1: The Historical Narrative (समाज का वर्णन एवं गौरव गाथा) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 bg-white p-8 lg:p-10 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-xs font-semibold text-amber-900 uppercase tracking-widest">
              01. समाज का वर्णन व ऐतिहासिक पृष्ठभूमि
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold font-heritage text-stone-900">
              त्याग, तपस्या, उद्यम और स्वाभिमान का स्वर्णिम इतिहास
            </h2>
            <div className="h-px w-20 bg-amber-800" />
            <p className="text-stone-700 text-base leading-relaxed text-justify first-letter:text-4xl first-letter:font-heritage first-letter:font-bold first-letter:text-amber-900 first-letter:float-left first-letter:mr-2">
              {profile.historyText}
            </p>
          </div>

          {/* Deity Lockup with Dhanak Rishi and Jai Maa */}
          <div className="mt-8 pt-6 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-amber-200/60">
              <p className="text-xs text-stone-500 font-medium">परम आराध्य कुलदेवता</p>
              <p className="text-base font-bold text-amber-950 font-heritage mt-0.5">
                {profile.kuldevta}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-amber-200/60">
              <p className="text-xs text-stone-500 font-medium">परम आराध्य कुलदेवी</p>
              <p className="text-base font-bold text-amber-950 font-heritage mt-0.5">
                {profile.kuldevi}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-stone-200 relative group min-h-[380px]">
          <img
            src="/src/assets/images/maharaj_dhanak_rishi_1792774810608.jpg"
            alt="परम पूज्य महाराज धनक ऋषि जी महाराज"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent flex flex-col justify-end p-6 text-white">
            <p className="text-xs uppercase tracking-wider text-amber-300 font-medium">आदि प्रवर्तक एवं आराध्य</p>
            <h4 className="text-xl font-bold font-heritage">परम पूज्य महाराज धनक ऋषि जी</h4>
            <p className="text-xs text-stone-300 mt-1">🙏 जय महाराज धनक ऋषि · 🙏 जय माँ कुलदेवी</p>
          </div>
        </div>
      </div>

      {/* Comprehensive Dhanak History, Deities, Sages & Cultural Heritage Deep Dive */}
      <div id="history-culture" className="scroll-mt-20">
        <DhanakHistoryDeepDive profile={profile} />
      </div>

      {/* Leadership & Office Bearers Grid (पदाधिकारी एवं मार्गदर्शक मंडल) */}
      <div id="leadership" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <div className="text-xs font-semibold text-amber-900 uppercase tracking-widest">
              संगठन नेतृत्व एवं कार्यकारिणी
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold font-heritage text-stone-900 mt-1">
              अखिल भारतीय धानुक समाज संगठन — मध्य प्रदेश व सागर जिला
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              समाज के विकास, संगठन विस्तार और सामाजिक एकता को समर्पित सम्मानित पदाधिकारी गण
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
              जिला सागर, मल्थोन एवं बांदरी
            </span>
          </div>
        </div>

        {/* Chief Guest / Patron Card */}
        {profile.officeBearers && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Chief Guest Spotlight */}
            <div className="bg-gradient-to-br from-amber-950 to-stone-900 text-white rounded-2xl p-6 border border-amber-800 shadow-md flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-700/80 text-amber-200 px-2.5 py-1 rounded-md inline-block">
                  ★ मुख्य अतिथि
                </span>
                <h3 className="text-2xl font-bold font-heritage text-white">
                  मान. डालचंद बरदेले जी
                </h3>
                <p className="text-sm font-semibold text-amber-300">
                  प्रदेश कार्यवाहक अध्यक्ष, सागर
                </p>
                <p className="text-xs text-stone-300 leading-relaxed">
                  अखिल भारतीय धानुक समाज संगठन, मध्य प्रदेश। समाज संगठन की सुदृढ़ता एवं प्रत्येक ब्लॉक में एकता के अग्रदूत।
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
                <a
                  href="tel:+919907061661"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold font-mono transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 99070 61661</span>
                </a>
                <span className="text-[11px] text-amber-200/80">सागर, मध्य प्रदेश</span>
              </div>
            </div>

            {/* Digital Leader Spotlight: Suraj Bansal */}
            <div className="bg-gradient-to-br from-stone-900 to-amber-900 text-white rounded-2xl p-6 border border-amber-700/80 shadow-md flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-700/80 text-emerald-100 px-2.5 py-1 rounded-md inline-block">
                  ⚡ डिजिटल क्रांति व ऐप डेवलपमेंट
                </span>
                <h3 className="text-2xl font-bold font-heritage text-white">
                  सूरज बंसल
                </h3>
                <p className="text-sm font-semibold text-amber-300">
                  सोशल मीडिया एवं डेवलपमेंट ऐप प्रमुख (डिजिटल समाज)
                </p>
                <p className="text-xs text-stone-300 leading-relaxed">
                  अखिल भारतीय धानुक समाज संगठन को डिजिटल तकनीक से जोड़कर हर व्यक्ति को निर्देशिका और संवाद से समृद्ध करने हेतु समर्पित।
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-2.5 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href="tel:+919111206326"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 9111206326</span>
                  </a>
                  <a
                    href={profile.socialLinks?.whatsapp || 'https://chat.whatsapp.com/IATXtm7so0i4dTt4O51alM?s=cl&p=a&mlu=4&ilr=4'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-colors shadow-xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>व्हाट्सएप ग्रुप</span>
                  </a>
                  <a
                    href={profile.socialLinks?.instagram || 'https://www.instagram.com/sama.jsetu?xtok=bXM5emdkcGF5dWxi'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold transition-colors shadow-xs"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>@sama.jsetu</span>
                  </a>
                </div>
                <span className="text-[11px] text-amber-200/80">सागर, मध्य प्रदेश</span>
              </div>
            </div>

          </div>
        )}

        {/* Complete Office Bearers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 pt-2">
          {profile.officeBearers?.filter(o => !o.isChiefGuest && o.name !== 'सूरज बंसल').map((bearer, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-stone-200 hover:border-amber-300 transition-colors shadow-2xs space-y-1.5 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                  {bearer.city || 'सागर जिला'}
                </span>
                <h4 className="font-bold text-stone-900 font-heritage text-sm mt-1">
                  {bearer.name}
                </h4>
                <p className="text-xs font-medium text-amber-900">
                  {bearer.role}
                </p>
              </div>

              {bearer.phone && (
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <a
                    href={`tel:${bearer.phone}`}
                    className="text-[11px] font-mono text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{bearer.phone}</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chapter 2: The 5 Golden Pillars (समाज के 5 स्वर्णिम स्तम्भ) */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-semibold text-amber-900 uppercase tracking-widest">
            02. हमारे मूल सिद्धांत
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold font-heritage text-stone-900">
            समाज के 5 स्वर्णिम स्तम्भ
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            महाराज धनक ऋषि जी के आदर्शों पर समाज की एकता, स्वाभिमान एवं आने वाली पीढ़ियों का उज्ज्वल भविष्य
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {profile.pillars.map((pillar, idx) => {
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-300 transition-colors shadow-xs space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold text-lg font-heritage">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold font-heritage text-stone-900">
                  {pillar.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chapter 3: Gotra & Heritage Clan Directory */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-amber-900 uppercase tracking-widest">
              03. गोत्र व वंश परंपरा
            </div>
            <h2 className="text-2xl font-bold font-heritage text-stone-900 mt-1">
              धानुक समाज के प्रमुख गोत्र व शाखाएं
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              अपनी जड़ों, ऋषि परंपरा और पूर्वजों के कुल चिन्हों का पवित्र स्मरण
            </p>
          </div>

          {/* Quick Gotra Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={gotraSearch}
              onChange={(e) => setGotraSearch(e.target.value)}
              placeholder="गोत्र खोजें..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-amber-600"
            />
          </div>
        </div>

        {/* Gotras Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
          {filteredGotras.map((gotra, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-[#FAF7F2] border border-amber-200/70 hover:border-amber-400 transition-colors flex items-center justify-between group"
            >
              <span className="font-heritage font-bold text-sm text-stone-900 group-hover:text-amber-900">
                {gotra}
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                #{idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter 4: Samajik Samvidhan / Code of Conduct */}
      <div className="bg-gradient-to-br from-[#FAF7F2] to-amber-50/40 rounded-3xl p-6 sm:p-10 border border-amber-200/80 space-y-6">
        <div>
          <div className="text-xs font-semibold text-amber-900 uppercase tracking-widest">
            04. सामाजिक आचार संहिता एवं दायित्व
          </div>
          <h2 className="text-2xl font-bold font-heritage text-stone-900 mt-1">
            धानुक समाज के नियम व सामाजिक संकल्प
          </h2>
          <p className="text-xs text-stone-600 mt-0.5">
            हर पदाधिकारी व समाज बंधु द्वारा पालन योग्य आदर्श
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.codeOfConduct.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200 space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <h4 className="text-sm font-bold text-stone-900 font-heritage">
                  {item.rule}
                </h4>
              </div>
              <p className="text-xs text-stone-600 pl-6 leading-relaxed">
                {item.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
