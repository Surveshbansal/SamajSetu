import React, { useState } from 'react';
import { 
  Share2, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Phone, 
  MessageSquare,
  Users,
  ShieldCheck,
  Flame,
  Radio
} from 'lucide-react';
import { 
  FacebookIcon, 
  YouTubeIcon, 
  InstagramIcon, 
  WhatsAppIcon 
} from './SocialIcons';
import { SocialLinks } from '../types';

interface SocialConnectSectionProps {
  socialLinks?: SocialLinks;
}

export const SocialConnectSection: React.FC<SocialConnectSectionProps> = ({ socialLinks }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const links = {
    whatsapp: socialLinks?.whatsapp || 'https://chat.whatsapp.com/IATXtm7so0i4dTt4O51alM?s=cl&p=a&mlu=4&ilr=4',
    instagram: socialLinks?.instagram || 'https://www.instagram.com/sama.jsetu?xtok=bXM5emdkcGF5dWxi',
    youtube: socialLinks?.youtube || 'https://youtube.com/shorts/FunDooV5Ig0?si=rx0_pQUy90OrPd-L',
    facebook: socialLinks?.facebook || 'https://www.facebook.com/share/1Fg4rvDmKE/'
  };

  const handleCopy = (key: string, url: string) => {
    navigator.clipboard?.writeText(url);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2200);
  };

  const channels = [
    {
      key: 'whatsapp',
      name: 'व्हाट्सएप ग्रुप (WhatsApp Community)',
      subtitle: 'अखिल भारतीय धानुक समाज संगठन — मध्य प्रदेश व सागर',
      highlight: 'तत्काल सूचना व सीधा संवाद',
      badge: 'सबसे लोकप्रिय',
      icon: WhatsAppIcon,
      url: links.whatsapp,
      btnText: 'व्हाट्सएप ग्रुप में शामिल हों',
      bgGradient: 'from-emerald-600 to-green-700',
      btnBg: 'bg-emerald-600 hover:bg-emerald-700',
      iconBg: 'bg-emerald-100 text-emerald-700',
      cardBorder: 'hover:border-emerald-500',
      accentColor: 'text-emerald-700',
      description: 'बैठक की तारीखें, आवश्यक संदेश, आपातकालीन रक्तदाता व वैवाहिक सूचनाएं सीधे अपने फोन पर प्राप्त करें।'
    },
    {
      key: 'instagram',
      name: 'इंस्टाग्राम (@sama.jsetu)',
      subtitle: 'समाज सेतु ऑफिशियल हैंडल',
      highlight: 'फोटो, वीडियो, रील्स व युवा संगम',
      badge: 'दैनिक अपडेट',
      icon: InstagramIcon,
      url: links.instagram,
      btnText: 'इंस्टाग्राम पर फॉलो करें',
      bgGradient: 'from-fuchsia-600 via-pink-600 to-amber-600',
      btnBg: 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-95',
      iconBg: 'bg-pink-100 text-pink-600',
      cardBorder: 'hover:border-pink-500',
      accentColor: 'text-pink-600',
      description: 'महाराज धनक ऋषि जी के प्रेरक विचार, समाज प्रतिभाओं के सम्मान और महाधिवेशन की ताज़ा रील्स देखें।'
    },
    {
      key: 'youtube',
      name: 'यूट्यूब चैनल (YouTube Video & Shorts)',
      subtitle: 'संबोधन, विचार व सांस्कृतिक आयोजन',
      highlight: 'वीडियो, संदेश व महाधिवेशन प्रसारण',
      badge: 'वीडियो प्रसारण',
      icon: YouTubeIcon,
      url: links.youtube,
      btnText: 'यूट्यूब पर देखें व सब्सक्राइब करें',
      bgGradient: 'from-red-600 to-rose-700',
      btnBg: 'bg-red-600 hover:bg-red-700',
      iconBg: 'bg-red-100 text-red-600',
      cardBorder: 'hover:border-red-500',
      accentColor: 'text-red-600',
      description: 'मान. डालचंद बरदेले जी व अन्य पदाधिकारियों के उद्बोधन और समाज गौरव गाथा के आधिकारिक वीडियो।'
    },
    {
      key: 'facebook',
      name: 'फेसबुक पेज व परिवार (Facebook)',
      subtitle: 'अखिल भारतीय धानुक समाज संगठन',
      highlight: 'सामाजिक चर्चा व जनसंवाद',
      badge: 'संगठनात्मक मंच',
      icon: FacebookIcon,
      url: links.facebook,
      btnText: 'फेसबुक पर जुड़ें व लाइक करें',
      bgGradient: 'from-blue-600 to-sky-700',
      btnBg: 'bg-blue-600 hover:bg-blue-700',
      iconBg: 'bg-blue-100 text-blue-600',
      cardBorder: 'hover:border-blue-500',
      accentColor: 'text-blue-600',
      description: 'मध्य प्रदेश व सागर जिले के धानुक समाज बंधुओं का आधिकारिक फेसबुक पेज। सभी पोस्ट देखें व शेयर करें।'
    }
  ];

  return (
    <section id="social-links" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 scroll-mt-20">
      
      {/* Section Header */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-amber-800/60 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-amber-500/10 to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 animate-pulse text-amber-400" />
            <span>डिजिटल धानुक समाज — आधिकारिक सोशल मीडिया नेटवर्क</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heritage tracking-tight text-white">
            समाज सेतु के आधिकारिक सोशल मीडिया से जुड़ें
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            अखिल भारतीय धानुक समाज संगठन के अधिकृत व्हाट्सएप ग्रुप, इंस्टाग्राम, यूट्यूब और फेसबुक से जुड़कर हर सूचना, बैठक निर्णय, वैवाहिक व रोजगार संदेश समय पर पाएं।
          </p>

          <div className="pt-2 flex items-center gap-3 flex-wrap text-xs text-amber-200">
            <span className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-lg border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% सत्यापित आधिकारिक लिंक
            </span>
            <span className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-lg border border-white/10">
              <Users className="w-4 h-4 text-amber-300" />
              हजारों समाज बंधु जुड़े हुए हैं
            </span>
          </div>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {channels.map((ch) => {
          const IconComp = ch.icon;
          const isCopied = copiedKey === ch.key;

          return (
            <div
              key={ch.key}
              className={`bg-white rounded-2xl p-6 border border-stone-200 ${ch.cardBorder} transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group`}
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-xl ${ch.iconBg} flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-105`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-2 py-0.5 rounded mb-0.5">
                        {ch.badge}
                      </span>
                      <h3 className="font-bold font-heritage text-stone-900 text-base sm:text-lg leading-snug">
                        {ch.name}
                      </h3>
                      <p className="text-xs text-stone-500">
                        {ch.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-stone-600 leading-relaxed">
                  {ch.description}
                </p>

                {/* URL preview pill */}
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-2 text-[11px] font-mono text-stone-600">
                  <span className="truncate max-w-[260px] sm:max-w-[340px]">
                    {ch.url}
                  </span>
                  <button
                    onClick={() => handleCopy(ch.key, ch.url)}
                    className="p-1 rounded hover:bg-stone-200 text-stone-500 hover:text-stone-800 transition-colors shrink-0 flex items-center gap-1 text-[11px] font-sans font-medium"
                    title="लिंक कॉपी करें"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">कॉपी हुआ</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>कॉपी</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center gap-2">
                <a
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl ${ch.btnBg} text-white text-xs font-bold transition-all shadow-xs`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{ch.btnText}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Suraj Bansal Contact & Digital Helpline Card */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-2xl p-5 sm:p-6 border border-amber-800 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3.5 text-center md:text-left">
          <div className="w-12 h-12 rounded-xl bg-amber-600/30 border border-amber-500/40 text-amber-300 flex items-center justify-center shrink-0">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-base font-heritage text-white">
              सोशल मीडिया पर कोई सूचना, कार्यक्रम या समाचार प्रकाशित करवाना चाहते हैं?
            </h4>
            <p className="text-xs text-amber-200/90 mt-0.5">
              संपर्क सूत्र: <span className="font-bold text-white">सूरज बंसल</span> (सोशल मीडिया एवं ऐप डेवलपमेंट प्रमुख, सागर)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 flex-wrap justify-center">
          <a
            href="https://chat.whatsapp.com/IATXtm7so0i4dTt4O51alM?s=cl&p=a&mlu=4&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-xs"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>व्हाट्सएप ग्रुप जॉइन करें</span>
          </a>
          <a
            href="tel:+919111206326"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-600 text-white text-xs font-bold font-mono transition-colors shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 9111206326</span>
          </a>
        </div>
      </div>

    </section>
  );
};
