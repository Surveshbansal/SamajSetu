import React from 'react';
import { UserPlus, Sparkles } from 'lucide-react';
import { 
  WhatsAppIcon, 
  InstagramIcon, 
  YouTubeIcon, 
  FacebookIcon 
} from './SocialIcons';
import { SocialLinks } from '../types';

interface NavbarProps {
  onOpenAddMember: () => void;
  samajName: string;
  socialLinks?: SocialLinks;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAddMember, samajName, socialLinks }) => {
  const whatsappUrl = socialLinks?.whatsapp || 'https://chat.whatsapp.com/IATXtm7so0i4dTt4O51alM?s=cl&p=a&mlu=4&ilr=4';
  const instagramUrl = socialLinks?.instagram || 'https://www.instagram.com/sama.jsetu?xtok=bXM5emdkcGF5dWxi';
  const youtubeUrl = socialLinks?.youtube || 'https://youtube.com/shorts/FunDooV5Ig0?si=rx0_pQUy90OrPd-L';
  const facebookUrl = socialLinks?.facebook || 'https://www.facebook.com/share/1Fg4rvDmKE/';

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-6">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#heritage" 
          className="text-lg sm:text-xl font-bold font-heritage tracking-tight text-stone-900 hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-amber-800 text-amber-100 flex items-center justify-center text-sm font-bold shadow-xs">
            सेतु
          </span>
          <span>समाज सेतु</span>
        </a>

        {/* Zone 2: Concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-stone-700">
          <a
            href="#heritage"
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0"
          >
            समाज दर्शन
          </a>
          <a
            href="#history-culture"
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 font-medium text-amber-900"
          >
            इतिहास व संस्कृति
          </a>
          <a
            href="#directory"
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 font-semibold text-stone-700"
          >
            समाज निर्देशिका
          </a>
          <a
            href="#social-links"
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 text-emerald-800 font-semibold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            सोशल मीडिया
          </a>
          <a
            href="#dashboard"
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0"
          >
            डैशबोर्ड
          </a>
          <a
            href="#chaupal"
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0"
          >
            चौपाल व विचार
          </a>
          <a
            href="#seva"
            className="hover:text-amber-900 transition-colors whitespace-nowrap shrink-0"
          >
            सेवा व आयोजन
          </a>
        </nav>

        {/* Zone 3: Social icons & primary action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick Social Badges */}
          <div className="flex items-center gap-1 sm:gap-1.5 pr-1 border-r border-stone-200">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 flex items-center justify-center transition-colors"
              title="व्हाट्सएप ग्रुप जॉइन करें"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-600 flex items-center justify-center transition-colors"
              title="इंस्टाग्राम @sama.jsetu"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center transition-colors"
              title="यूट्यूब वीडियो व संबोधन"
            >
              <YouTubeIcon className="w-4 h-4" />
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-colors"
              title="फेसबुक पेज"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onOpenAddMember}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>+ स्वयं को जोड़ें</span>
          </button>
        </div>

      </div>
    </header>
  );
};
