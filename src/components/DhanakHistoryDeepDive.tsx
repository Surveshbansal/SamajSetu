import React, { useState } from 'react';
import { 
  BookOpen, 
  Flame, 
  Sparkles, 
  Shield, 
  Sun, 
  Heart, 
  Users, 
  Award, 
  CheckCircle2, 
  Compass, 
  ChevronRight, 
  ScrollText, 
  Music,
  Share2,
  BookmarkCheck
} from 'lucide-react';
import { SamajProfile } from '../types';

interface DhanakHistoryDeepDiveProps {
  profile: SamajProfile;
}

type TabType = 'history' | 'deities' | 'rishis' | 'culture' | 'martials';

export const DhanakHistoryDeepDive: React.FC<DhanakHistoryDeepDiveProps> = ({ profile }) => {
  const [activeTab, setActiveTab] = useState<TabType>('history');

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden space-y-0">
      
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white p-6 sm:p-10 border-b border-amber-900/60 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-radial from-amber-600/10 to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <ScrollText className="w-3.5 h-3.5 text-amber-400" />
            <span>अखिल भारतीय धानुक / धानक समाज का गौरवशाली इतिहास व संस्कृति</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heritage tracking-tight text-white">
            वैदिक काल से 21वीं सदी: धानक समाज का संपूर्ण इतिहास, ऋषि परंपरा व आराध्य देव
          </h2>

          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            परम पूज्य महाराज धनक ऋषि जी महाराज के तपोबल, धनुर्वेद के शौर्य, माँ कुलदेवी के आशीर्वाद और संत कबीर के समतावादी विचारों से आलोकित हमारा गौरवशाली समाज।
          </p>
        </div>

        {/* 5-Tab Navigation Bar */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'history'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white/10 text-stone-200 hover:bg-white/20'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>01. संपूर्ण इतिहास व कालक्रम</span>
          </button>

          <button
            onClick={() => setActiveTab('deities')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'deities'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white/10 text-stone-200 hover:bg-white/20'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>02. आराध्य भगवान व कुलदेवी</span>
          </button>

          <button
            onClick={() => setActiveTab('rishis')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'rishis'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white/10 text-stone-200 hover:bg-white/20'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>03. महाराज धनक ऋषि व संत परंपरा</span>
          </button>

          <button
            onClick={() => setActiveTab('culture')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'culture'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white/10 text-stone-200 hover:bg-white/20'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>04. संस्कृति, पर्व व संस्कार</span>
          </button>

          <button
            onClick={() => setActiveTab('martials')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'martials'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white/10 text-stone-200 hover:bg-white/20'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>05. धनुर्वेद, शौर्य व गोत्र</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Detailed History & Origins */}
      {activeTab === 'history' && (
        <div className="p-6 sm:p-10 space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                ऐतिहासिक मूल व व्युत्पत्ति
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heritage text-stone-900 leading-snug">
                'धन्वी' एवं 'धानुष्क' से 'धानुक / धानक': धनुर्धारी रक्षकों की गौरव गाथा
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed text-justify">
                संस्कृत व्याकरण एवं प्राचीन भारतीय इतिहास के अनुसार <strong>'धानुक'</strong> अथवा <strong>'धानक'</strong> शब्द की व्युत्पत्ति <strong>'धन्वी'</strong> (धनुष धारण करने वाला) तथा <strong>'धानुष्क'</strong> (धनुर्विद्या में पारंगत धनुर्धर योद्धा) से हुई है। प्राचीन वैदिक काल एवं महाकाव्य काल में जो समुदाय धनुष-बाण द्वारा धर्म, राज्य, आश्रमों व गो-ब्राह्मण की रक्षा में अग्रणी था, वही कालान्तर में धानुक/धानक समाज के रूप में प्रतिष्ठित हुआ।
              </p>
              <p className="text-stone-700 text-sm leading-relaxed text-justify">
                हमारे समाज के आदि प्रवर्तक <strong>परम पूज्य महाराज धनक ऋषि जी</strong> ने वैदिक सनातन धर्म की रक्षा, सत्य, विद्या और पराक्रम का समन्वय स्थापित किया। मध्य प्रदेश (सागर, मल्थोन, बांदरी, दमोह, छतरपुर, जबलपुर), उत्तर प्रदेश, बिहार, राजस्थान और हरियाणा में धानक समाज बंधुओं ने अपनी ईमानदारी, वीरता, श्रम निष्ठा और धार्मिक आस्था से समाज का मान सदा ऊंचा रखा।
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-stone-200 shadow-md">
              <img
                src="/src/assets/images/dhanak_rishi_meditation_1792779247186.jpg"
                alt="महाराज धनक ऋषि जी वैदिक आश्रम"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 object-cover"
              />
              <div className="p-3 bg-stone-900 text-white text-xs flex items-center justify-between">
                <span className="font-heritage">तपोनिष्ठ महाराज धनक ऋषि जी महाराज</span>
                <span className="text-amber-300 font-mono">वैदिक परंपरा</span>
              </div>
            </div>
          </div>

          {/* Historical Eras Timeline */}
          <div className="space-y-4 pt-4 border-t border-stone-100">
            <h4 className="text-lg font-bold font-heritage text-stone-900 flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-800" />
              <span>धानक समाज के प्रमुख ऐतिहासिक कालखंड</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-amber-200/80 space-y-2">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  01. वैदिक एवं पौराणिक काल
                </div>
                <h5 className="font-bold text-stone-900 font-heritage text-sm">
                  धनुर्वेद व आश्रम सुरक्षा
                </h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  ऋषि-मुनियों के आश्रमों की रक्षा, यज्ञों का संरक्षण और धनुर्विद्या में अद्वितीय कौशल। महाराज धनक ऋषि जी द्वारा गोत्र व्यवस्था और सनातन संस्कारों का सूत्रपात।
                </p>
              </div>

              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-amber-200/80 space-y-2">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  02. रामायण व महाभारत युग
                </div>
                <h5 className="font-bold text-stone-900 font-heritage text-sm">
                  मर्यादा व शौर्य का प्रतीक
                </h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  मर्यादा पुरुषोत्तम भगवान श्री राम के कोदण्ड (धनुष) के प्रति अपार निष्ठा। धर्म युद्ध में सत्य और न्याय के पक्ष में धनुर्धर योद्धाओं के रूप में योगदान।
                </p>
              </div>

              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-amber-200/80 space-y-2">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  03. मध्यकाल व रियासती युग
                </div>
                <h5 className="font-bold text-stone-900 font-heritage text-sm">
                  दुर्ग रक्षक व सेनापति
                </h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  बुंदेलखंड (सागर, राहतगढ़, गढ़ाकोटा, मल्थोन), मालवा व ग्वालियर रियासतों में दुर्ग-रक्षक, राजाओं के विश्वासपात्र अंगरक्षक व कुशल तोपची के रूप में सम्मान।
                </p>
              </div>

              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-amber-200/80 space-y-2">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  04. 1857 व स्वतंत्रता संग्राम
                </div>
                <h5 className="font-bold text-stone-900 font-heritage text-sm">
                  देशभक्ति व स्वाभिमान
                </h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  अंग्रेजी हुकूमत के विरुद्ध 1857 के प्रथम स्वाधीनता संग्राम में स्थानीय राजाओं व वीरों के साथ कंधे से कंधा मिलाकर बलिदान और भारत माता की रक्षा।
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Venerated Gods & Deities */}
      {activeTab === 'deities' && (
        <div className="p-6 sm:p-10 space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-stone-200 shadow-md order-2 lg:order-1">
              <img
                src="/src/assets/images/kuldevi_temple_sanctuary_1792779248703.jpg"
                alt="माँ कुलदेवी दिव्य गर्भगृह एवं आरती"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover"
              />
              <div className="p-3 bg-stone-900 text-white text-xs flex items-center justify-between">
                <span className="font-heritage">परम आराध्य माँ भगवती कुलदेवी</span>
                <span className="text-amber-300">जय माँ कुलदेवी</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                धानक समाज के आराध्य देव व देवियां
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heritage text-stone-900 leading-snug">
                जिनकी कृपा से कुल की रक्षा और समाज का कल्याण होता है
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed text-justify">
                धानक समाज आदिकाल से सनातन वैदिक देव परंपरा का निष्ठावान उपासक रहा है। हमारे प्रत्येक मांगलिक कार्य, विवाह, जन्म संस्कार एवं उत्सव में सबसे पहले <strong>महाराज धनक ऋषि जी</strong> और <strong>माँ कुलदेवी</strong> का वंदन किया जाता है।
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-3">
                <Flame className="w-6 h-6 text-amber-700 shrink-0" />
                <p className="text-xs text-amber-950 font-heritage font-semibold">
                  "🙏 जय महाराज धनक ऋषि जी महाराज · 🙏 जय माँ भगवती कुलदेवी · 🙏 जय श्री राम"
                </p>
              </div>
            </div>
          </div>

          {/* Deities Detailed Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
            
            {/* 1. Maharaj Dhanak Rishi */}
            <div className="bg-white rounded-2xl p-6 border border-amber-200 hover:border-amber-400 transition-colors shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                🪔
              </div>
              <h4 className="font-bold text-base font-heritage text-stone-900">
                1. परम पूज्य महाराज धनक ऋषि जी (कुलदेवता)
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                धानक समाज के आदि प्रवर्तक, तपस्वी एवं कुलदेवता। जिन्होंने अपने तपोबल से समाज को सत्य, स्वाभिमान, विद्या, न्याय और एकता का मार्ग दिखाया। प्रत्येक शुभ कार्य में इनकी जय-जयकार और नमन अनिवार्य है।
              </p>
              <span className="inline-block text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                जय घोष: "जय महाराज धनक ऋषि"
              </span>
            </div>

            {/* 2. Maa Kuldevi */}
            <div className="bg-white rounded-2xl p-6 border border-pink-200 hover:border-pink-400 transition-colors shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-900 flex items-center justify-center font-bold">
                🌺
              </div>
              <h4 className="font-bold text-base font-heritage text-stone-900">
                2. परम आराध्य माँ भगवती कुलदेवी (माँ जगदम्बा / महालक्ष्मी)
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                समस्त धानक परिवारों की रक्षक एवं सौभाग्यदायिनी। विवाह, संतानोत्पत्ति एवं नवरात्र में कुलदेवी के थान/मंदिर पर अखंड ज्योति, नारियल, चुनरी और हलवा-पूरी का भोग अर्पित किया जाता है।
              </p>
              <span className="inline-block text-[11px] font-bold text-pink-800 bg-pink-50 px-2 py-0.5 rounded">
                जय घोष: "जय माँ कुलदेवी"
              </span>
            </div>

            {/* 3. Lord Rama */}
            <div className="bg-white rounded-2xl p-6 border border-amber-200 hover:border-amber-400 transition-colors shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                🏹
              </div>
              <h4 className="font-bold text-base font-heritage text-stone-900">
                3. मर्यादा पुरुषोत्तम भगवान श्री राम
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                कोदण्डधारी प्रभु श्री राम धानक समाज के सर्वोच्च आदर्श हैं। मर्यादा, सत्य, वचन पालन और धनुर्धर शौर्य का प्रतीक होने के कारण समाज में राम नाम और रामकथा की गहरी प्रतिष्ठा है।
              </p>
              <span className="inline-block text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                जय घोष: "जय सियाराम / जय श्री राम"
              </span>
            </div>

            {/* 4. Lord Surya */}
            <div className="bg-white rounded-2xl p-6 border border-orange-200 hover:border-orange-400 transition-colors shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-900 flex items-center justify-center font-bold">
                ☀️
              </div>
              <h4 className="font-bold text-base font-heritage text-stone-900">
                4. भगवान सूर्य नारायण (मार्तण्ड देव)
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                सूर्यवंशी परंपरा के आदि देवता। धानक समाज में प्रातः सूर्य अर्घ्य, रविवार व्रत और आरोग्य एवं तेज के लिए भगवान भुवन भास्कर की आराधना की जाती है।
              </p>
              <span className="inline-block text-[11px] font-bold text-orange-800 bg-orange-50 px-2 py-0.5 rounded">
                मंत्र: "ॐ सूर्याय नमः"
              </span>
            </div>

            {/* 5. Lord Shiva */}
            <div className="bg-white rounded-2xl p-6 border border-cyan-200 hover:border-cyan-400 transition-colors shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-900 flex items-center justify-center font-bold">
                🔱
              </div>
              <h4 className="font-bold text-base font-heritage text-stone-900">
                5. पिनाकधारी भगवान शिव (देवाधिदेव महादेव)
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                धनुर्वेद के आदि प्रणेता एवं पिनाक धनुष के स्वामी। समाज में श्रावण मास, महाशिवरात्रि और संकट निवारण हेतु भगवान भोलेनाथ की विशेष पूजा-अर्चना की जाती है।
              </p>
              <span className="inline-block text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">
                जय घोष: "हर हर महादेव"
              </span>
            </div>

            {/* 6. Sant Kabir & Spiritual Guides */}
            <div className="bg-white rounded-2xl p-6 border border-emerald-200 hover:border-emerald-400 transition-colors shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                🕊️
              </div>
              <h4 className="font-bold text-base font-heritage text-stone-900">
                6. संत कबीर साहेब व गुरु परंपरा
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                आध्यात्मिक जागृति, निर्गुण भक्ति, समता और सामाजिक रूढ़ियों के निवारण हेतु कबीर साहेब की वाणी को समाज में अत्यंत आदर और श्रद्धा से गाया और माना जाता है।
              </p>
              <span className="inline-block text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                अभिवादन: "सत साहेब / बंदीछोड़"
              </span>
            </div>

          </div>
        </div>
      )}

      {/* Tab 3: Sages, Rishis & Saints */}
      {activeTab === 'rishis' && (
        <div className="p-6 sm:p-10 space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                ऋषि-मुनि एवं संत परंपरा
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heritage text-stone-900 leading-snug">
                पूज्य महाराज धनक ऋषि जी एवं संत शिरोमणि कबीर साहेब की पावन विरासत
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed text-justify">
                धानक समाज का गौरव केवल उसकी वीरता में ही नहीं, बल्कि उसकी महान आध्यात्मिक और संत परंपरा में भी निहित है। <strong>महाराज धनक ऋषि जी</strong> ने वैदिक काल में ज्ञान, शस्त्र, शास्त्र और समाज को संगठित करने की आधारशिला रखी।
              </p>
              <p className="text-stone-700 text-sm leading-relaxed text-justify">
                वहीं मध्यकाल में <strong>संत कबीर दास जी</strong> ने अपनी अमृतमयी वाणी और दोहों के माध्यम से श्रम, साधना, निर्गुण भक्ति और सामाजिक समानता का शंखनाद किया। कबीर पंथ और धानक समाज का आध्यात्मिक नाता अत्यंत प्रगाढ़ है।
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-stone-200 shadow-md">
              <img
                src="/src/assets/images/sant_kabir_spiritual_1792779248695.jpg"
                alt="संत शिरोमणि कबीर दास जी"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover"
              />
              <div className="p-3 bg-stone-900 text-white text-xs flex items-center justify-between">
                <span className="font-heritage">संत शिरोमणि कबीर दास जी महाराज</span>
                <span className="text-amber-300 font-mono">सत्य व समता का संदेश</span>
              </div>
            </div>
          </div>

          {/* Sages In-Depth Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-amber-300/80 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-800" />
                <h4 className="font-bold text-lg font-heritage text-stone-900">
                  पूज्य महाराज धनक ऋषि जी महाराज की शिक्षाएं
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>तपस्या एवं आत्मसंयम:</strong> जीवन में सत्य, पवित्रता और ईश्वर भक्ति को सर्वोच्च स्थान देना।</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>शस्त्र व शास्त्र का संतुलन:</strong> विद्या अर्जन के साथ-साथ आत्मरक्षा और धर्म रक्षा का सामर्थ्य रखना।</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>गोत्र एवं कुल मर्यादा:</strong> बंसल, धानुक, बरदेले, कैथोरा, बमनेले आदि गोत्रों में कुल की पवित्रता बनाए रखना।</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>ऋषि पंचमी वंदन:</strong> प्रतिवर्ष भाद्रपद शुक्ल पंचमी को महाराज धनक ऋषि जी का विशेष व्रत, पूजन व उत्सव मनाना।</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-amber-300/80 space-y-3">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-amber-800" />
                <h4 className="font-bold text-lg font-heritage text-stone-900">
                  संत कबीर दास जी का आध्यात्मिक प्रभाव
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>श्रम की प्रतिष्ठा:</strong> हाथ से काम करना और हृदय से प्रभु का स्मरण करना ही सच्चा योग है।</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>सामाजिक समरसता व सादगी:</strong> पाखंड, अंधविश्वास और आडंबरों से दूर रहकर सादगीपूर्ण जीवन जीना।</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>कबीर वाणी एवं भजन मंडलियां:</strong> सागर और मध्य प्रदेश के गांवों में कबीर चौकों पर रात्रि भजन व सत्संग की परंपरा।</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>गुरु महिमा:</strong> "गुरु गोविंद दोऊ खड़े काके लागूं पांय" — गुरु को ईश्वर से भी ऊंचा दर्जा देना।</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      )}

      {/* Tab 4: Culture, Festivals & Rites */}
      {activeTab === 'culture' && (
        <div className="p-6 sm:p-10 space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-stone-200 shadow-md">
              <img
                src="/src/assets/images/dhanak_culture_festival_1792779248636.jpg"
                alt="धानक समाज पारंपरिक उत्सव व धनुष पूजन"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover"
              />
              <div className="p-3 bg-stone-900 text-white text-xs flex items-center justify-between">
                <span className="font-heritage">धनुष पूजन व ऋषि पंचमी महोत्सव</span>
                <span className="text-amber-300 font-mono">पारंपरिक संस्कृति</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                संस्कृति, उत्सव एवं संस्कार
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heritage text-stone-900 leading-snug">
                सभ्यता, संस्कार, रीति-रिवाज एवं आल्हा-गायन की समृद्ध विरासत
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed text-justify">
                धानक समाज की संस्कृति त्याग, पारिवारिक अनुशासन, मातृशक्ति के सम्मान और सामाजिक भाईचारे की मिसाल है। हमारे समाज में तीज-त्योहार न केवल धार्मिक अनुष्ठान हैं, बल्कि आपसी प्रेम और एकता के सशक्त सूत्र हैं।
              </p>
              <p className="text-stone-700 text-sm leading-relaxed text-justify">
                बुंदेलखंड एवं मध्य प्रदेश में विवाह के अवसर पर <strong>लगन, टीका, भात (मायरा), मण्डप, सप्तपदी (सात फेरे)</strong> और कुलदेवी पूजन वैदिक मंत्रोच्चार के साथ अत्यंत निष्ठा से संपन्न होते हैं।
              </p>
            </div>
          </div>

          {/* Festivals & Cultural Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2.5 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-sm">
                🏹
              </div>
              <h4 className="font-bold font-heritage text-stone-900 text-sm">
                विजयादशमी व धनुष-शस्त्र पूजन
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                दशहरे पर प्राचीन धनुर्धर परंपरा का स्मरण करते हुए पारंपरिक धनुष-बाण, औजारों व कर्म-उपकरणों का तिलक कर वंदन किया जाता है। यह असत्य पर सत्य की विजय का पर्व है।
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2.5 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-pink-100 text-pink-900 flex items-center justify-center font-bold text-sm">
                🪔
              </div>
              <h4 className="font-bold font-heritage text-stone-900 text-sm">
                ऋषि पंचमी व धनक ऋषि जयंती
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                भाद्रपद मास में महाराज धनक ऋषि जी का प्रकटोत्सव। विशाल शोभायात्राएं, हवन, सत्संग और समाज के मेधावी छात्र-छात्राओं का सार्वजनिक सम्मान समारोह।
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2.5 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-sm">
                🎵
              </div>
              <h4 className="font-bold font-heritage text-stone-900 text-sm">
                आल्हा गायन व बुंदेली लोकगीत
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                वीर रस से परिपूर्ण आल्हा-ऊदल की वीरगाथाएं, देवी गीत, बन्ना-बन्नी और फाग उत्सव में समाज की चौपालों पर पारंपरिक ढोलक व मंजीरे की गूंज।
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Tab 5: Martial Heritage, Dhanurvidya & Gotras */}
      {activeTab === 'martials' && (
        <div className="p-6 sm:p-10 space-y-8 animate-in fade-in duration-300">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
              धनुर्वेद, शौर्य व स्वाभिमान
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heritage text-stone-900 leading-snug">
              धनुर्विद्या का इतिहास एवं धानक समाज के 15+ प्रमुख गोत्र
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed text-justify">
              प्राचीन भारतीय इतिहास में धनुर्वेद को चारों उपवेदों में सर्वोच्च स्थान दिया गया है। धानुक समाज के पूर्वज धनुर्विद्या के सिद्धहस्त आचार्य रहे। उन्होंने कभी अपने आत्मसम्मान और धर्म से समझौता नहीं किया। विभिन्न कालखंडों में समाज बंधुओं ने ऋषि-मुनियों और पूर्वजों के नाम पर पवित्र गोत्र परंपरा को स्थापित किया।
            </p>
          </div>

          {/* Gotras Visual Showcase */}
          <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-amber-200/80 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-base font-heritage text-stone-900">
                पवित्र गोत्र कुल चिन्ह व शाखाएं:
              </h4>
              <span className="text-xs text-amber-900 font-bold bg-amber-100 px-3 py-1 rounded-md">
                15+ प्रमुख गोत्र
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {profile.mainGotras.map((gotra, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3.5 rounded-xl border border-stone-200 hover:border-amber-400 transition-colors shadow-2xs"
                >
                  <p className="text-[10px] font-mono text-amber-800 font-bold">गोत्र #{idx + 1}</p>
                  <p className="font-bold text-stone-900 font-heritage text-sm mt-0.5">{gotra}</p>
                  <p className="text-[10px] text-stone-500 mt-1">महाराज धनक ऋषि परंपरा</p>
                </div>
              ))}
            </div>
          </div>

          {/* Code of Honor Quote */}
          <div className="bg-gradient-to-r from-stone-900 to-amber-950 text-white p-6 rounded-2xl border border-amber-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                हमारा सामाजिक संकल्प
              </p>
              <p className="text-sm sm:text-base font-heritage font-bold">
                "शौर्य हमारा इतिहास है, शिक्षा हमारा वर्तमान है और एकता हमारा भविष्य है।"
              </p>
            </div>
            <a
              href="#directory"
              className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold whitespace-nowrap transition-colors"
            >
              निर्देशिका में अपना गोत्र दर्ज करें →
            </a>
          </div>
        </div>
      )}

      {/* Footer Ribbon of Deep Dive */}
      <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
        <div className="flex items-center gap-2">
          <BookmarkCheck className="w-4 h-4 text-emerald-700" />
          <span>प्रामाणिक इतिहास, ऋषि परंपरा एवं संस्कृति का संकलन · अखिल भारतीय धानुक समाज संगठन</span>
        </div>
        <div className="text-amber-950 font-heritage font-bold">
          🙏 जय महाराज धनक ऋषि · जय माँ कुलदेवी 🙏
        </div>
      </div>

    </div>
  );
};
