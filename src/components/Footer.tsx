import React from 'react';
import { 
  WhatsAppIcon, 
  InstagramIcon, 
  YouTubeIcon, 
  FacebookIcon 
} from './SocialIcons';
import { Phone, MessageSquare, ExternalLink, Heart } from 'lucide-react';
import { SocialLinks } from '../types';

interface FooterProps {
  samajName: string;
  motto: string;
  socialLinks?: SocialLinks;
}

export const Footer: React.FC<FooterProps> = ({ samajName, motto, socialLinks }) => {
  const links = {
    whatsapp: socialLinks?.whatsapp || 'https://chat.whatsapp.com/IATXtm7so0i4dTt4O51alM?s=cl&p=a&mlu=4&ilr=4',
    instagram: socialLinks?.instagram || 'https://www.instagram.com/sama.jsetu?xtok=bXM5emdkcGF5dWxi',
    youtube: socialLinks?.youtube || 'https://youtube.com/shorts/FunDooV5Ig0?si=rx0_pQUy90OrPd-L',
    facebook: socialLinks?.facebook || 'https://www.facebook.com/share/1Fg4rvDmKE/'
  };

  return (
    <footer className="border-t border-stone-200 bg-white py-12 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Column 1: Identity & Motto */}
        <div className="md:col-span-5 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-amber-800 text-amber-100 flex items-center justify-center text-sm font-bold shadow-xs">
              सेतु
            </span>
            <span className="font-heritage font-bold text-lg text-stone-900">
              {samajName}
            </span>
          </div>
          <p className="text-xs text-amber-900 font-heritage font-semibold">
            "{motto}"
          </p>
          <p className="text-xs text-stone-500 leading-relaxed max-w-md">
            अखिल भारतीय धानुक समाज संगठन, मध्य प्रदेश — सागर, मल्थोन, बांदरी एवं प्रदेश भर के समाज बंधुओं को एक डिजिटल सूत्र में पिरोने और परस्पर सहयोग बढ़ाने का पावन मंच।
          </p>
          
          <div className="pt-2 text-xs text-stone-600">
            <span className="font-semibold text-stone-700">डिजिटल समाज व ऐप प्रभारी: </span>
            <span>सूरज बंसल (+91 9111206326)</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 font-heritage">
            त्वरित संपर्क व अनुभाग
          </h4>
          <ul className="space-y-2 text-xs font-medium text-stone-600">
            <li>
              <a href="#heritage" className="hover:text-amber-900 transition-colors">
                समाज दर्शन व पूज्य धनक ऋषि परंपरा
              </a>
            </li>
            <li>
              <a href="#history-culture" className="hover:text-amber-900 transition-colors font-medium text-amber-900">
                धानक समाज इतिहास, भगवान व संस्कृति
              </a>
            </li>
            <li>
              <a href="#directory" className="hover:text-amber-900 transition-colors">
                सदस्य एवं व्यवसाय निर्देशिका
              </a>
            </li>
            <li>
              <a href="#social-links" className="hover:text-amber-900 transition-colors font-semibold text-emerald-800">
                आधिकारिक सोशल मीडिया नेटवर्क
              </a>
            </li>
            <li>
              <a href="#chaupal" className="hover:text-amber-900 transition-colors">
                चौपाल व विचार मंच
              </a>
            </li>
            <li>
              <a href="#seva" className="hover:text-amber-900 transition-colors">
                सेवा कोष व जनकल्याण
              </a>
            </li>
            <li>
              <a href="#matrimonial" className="hover:text-amber-900 transition-colors">
                वैवाहिक परिचय संगम
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Official Social Channels */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 font-heritage">
            आधिकारिक सोशल मीडिया से जुड़ें
          </h4>
          <p className="text-xs text-stone-500 leading-tight">
            हमारे चारों आधिकारिक डिजिटल माध्यमों पर समाज परिवार से जुड़े रहें:
          </p>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {/* WhatsApp */}
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors text-xs font-medium"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0 text-emerald-600" />
              <span className="truncate">व्हाट्सएप ग्रुप</span>
            </a>

            {/* Instagram */}
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-900 border border-pink-200 transition-colors text-xs font-medium"
            >
              <InstagramIcon className="w-4 h-4 shrink-0 text-pink-600" />
              <span className="truncate">इंस्टाग्राम</span>
            </a>

            {/* YouTube */}
            <a
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-900 border border-red-200 transition-colors text-xs font-medium"
            >
              <YouTubeIcon className="w-4 h-4 shrink-0 text-red-600" />
              <span className="truncate">यूट्यूब वीडियो</span>
            </a>

            {/* Facebook */}
            <a
              href={links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 transition-colors text-xs font-medium"
            >
              <FacebookIcon className="w-4 h-4 shrink-0 text-blue-600" />
              <span className="truncate">फेसबुक पेज</span>
            </a>
          </div>

          <div className="pt-2">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-[11px] font-bold transition-colors shadow-2xs"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>सीधे व्हाट्सएप ग्रुप में शामिल हों</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
        <p>
          © {new Date().getFullYear()} अखिल भारतीय धानुक समाज संगठन · समाज सेतु · सर्व जन हिताय
        </p>
        <p className="flex items-center gap-1 text-stone-600">
          <span>जय महाराज धनक ऋषि जी महाराज</span>
          <span>·</span>
          <span>जय माँ कुलदेवी</span>
        </p>
      </div>
    </footer>
  );
};
