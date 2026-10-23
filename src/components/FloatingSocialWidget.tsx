import React, { useState } from 'react';
import { 
  WhatsAppIcon, 
  InstagramIcon, 
  YouTubeIcon, 
  FacebookIcon 
} from './SocialIcons';
import { X, MessageCircle, ChevronUp, Share2, Sparkles } from 'lucide-react';
import { SocialLinks } from '../types';

interface FloatingSocialWidgetProps {
  socialLinks?: SocialLinks;
}

export const FloatingSocialWidget: React.FC<FloatingSocialWidgetProps> = ({ socialLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = {
    whatsapp: socialLinks?.whatsapp || 'https://chat.whatsapp.com/IATXtm7so0i4dTt4O51alM?s=cl&p=a&mlu=4&ilr=4',
    instagram: socialLinks?.instagram || 'https://www.instagram.com/sama.jsetu?xtok=bXM5emdkcGF5dWxi',
    youtube: socialLinks?.youtube || 'https://youtube.com/shorts/FunDooV5Ig0?si=rx0_pQUy90OrPd-L',
    facebook: socialLinks?.facebook || 'https://www.facebook.com/share/1Fg4rvDmKE/'
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      
      {/* Expanded Quick Action Drawer */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-4 w-72 space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between border-b border-stone-100 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-stone-900 font-heritage">
                समाज सोशल मीडिया नेटवर्क
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              aria-label="बंद करें"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-stone-500 leading-tight">
            अखिल भारतीय धानुक समाज संगठन के आधिकारिक सोशल मीडिया से जुड़ें:
          </p>

          <div className="space-y-2">
            {/* WhatsApp */}
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 transition-colors text-xs font-semibold"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-xs font-bold">व्हाट्सएप ग्रुप जॉइन करें</p>
                <p className="text-[10px] text-emerald-700/80">लाइव सूचनाएं व संवाद</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-pink-50 hover:bg-pink-100 border border-pink-200 text-pink-900 transition-colors text-xs font-semibold"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-xs font-bold">इंस्टाग्राम @sama.jsetu</p>
                <p className="text-[10px] text-pink-700/80">फोटो, वीडियो व रील्स</p>
              </div>
            </a>

            {/* YouTube */}
            <a
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-red-50 hover:bg-red-100 border border-red-200 text-red-900 transition-colors text-xs font-semibold"
            >
              <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                <YouTubeIcon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-xs font-bold">यूट्यूब वीडियो व संबोधन</p>
                <p className="text-[10px] text-red-700/80">संबोधन व भजन देखें</p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href={links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 transition-colors text-xs font-semibold"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                <FacebookIcon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-xs font-bold">फेसबुक पेज व परिवार</p>
                <p className="text-[10px] text-blue-700/80">संगठन पोस्ट व संवाद</p>
              </div>
            </a>
          </div>

          <div className="pt-1 text-[10px] text-center text-stone-400">
            संपर्क: सूरज बंसल (+91 9111206326)
          </div>
        </div>
      )}

      {/* Floating Main Button */}
      <div className="flex items-center gap-2">
        {/* Direct WhatsApp Pill button */}
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-xs font-bold group"
          title="व्हाट्सएप ग्रुप से जुड़ें"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <WhatsAppIcon className="w-4 h-4 text-white" />
          <span className="hidden sm:inline">व्हाट्सएप ग्रुप से जुड़ें</span>
          <span className="sm:hidden">ग्रुप जुड़ें</span>
        </a>

        {/* Toggle popup for all channels */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
            isOpen 
              ? 'bg-stone-800 text-white rotate-90' 
              : 'bg-amber-800 hover:bg-amber-900 text-amber-100 hover:scale-105'
          }`}
          aria-label="सभी सोशल मीडिया लिंक देखें"
          title="सभी सोशल मीडिया लिंक"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
        </button>
      </div>

    </div>
  );
};
