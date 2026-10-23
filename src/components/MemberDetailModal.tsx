import React from 'react';
import { X, Phone, MessageSquare, Mail, MapPin, Briefcase, Heart, Award, ShieldCheck, Share2, Building2, Tag } from 'lucide-react';
import { SamajMember } from '../types';

interface MemberDetailModalProps {
  member: SamajMember | null;
  onClose: () => void;
}

export const MemberDetailModal: React.FC<MemberDetailModalProps> = ({ member, onClose }) => {
  if (!member) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${member.name} (${member.gotra}) - समाज निर्देशिका`,
        text: `${member.name} - ${member.occupation} (${member.city}) | सेवाएं: ${member.servicesOffered || member.occupation} | फोन: ${member.phone}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${member.name} - ${member.occupation} (${member.city}) | फोन: ${member.phone}`);
      alert('संपर्क विवरण कॉपी कर लिया गया है!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-[#FCFAF6] rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
        
        {/* Top Header Card */}
        <div className="bg-gradient-to-r from-stone-900 to-amber-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-600/30 border border-amber-400/40 flex items-center justify-center text-amber-200 text-2xl font-bold font-heritage shrink-0">
              {member.name.charAt(0)}
            </div>
            <div className="flex-1 pr-6">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-bold font-heritage text-white">
                  {member.name}
                </h3>
                {member.isVerified && (
                  <span className="text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    सत्यापित सदस्य
                  </span>
                )}
              </div>

              {member.organizationRole && (
                <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-200 border border-amber-400/30 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  <span>{member.organizationRole}</span>
                </div>
              )}
              
              <div className="text-stone-300 text-xs mt-1 flex items-center gap-2 flex-wrap">
                <span className="text-amber-300 font-medium">गोत्र: {member.gotra}</span>
                <span aria-hidden="true">·</span>
                <span>{member.city}, {member.state}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">रक्त समूह: {member.bloodGroup}</span>
              </div>

              {member.familyHeadName && (
                <p className="text-stone-400 text-xs mt-1.5 italic">
                  {member.familyHeadName}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto">
          
          {/* Business & Occupation Spotlight */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-semibold uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-amber-800" />
              <span>पेशा व व्यावसायिक विवरण</span>
            </div>

            <div>
              <p className="text-base font-bold text-stone-900">{member.occupation}</p>
              {member.businessName && (
                <p className="text-sm font-medium text-amber-900 flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-3.5 h-3.5" />
                  {member.businessName}
                </p>
              )}
            </div>

            {member.servicesOffered && (
              <div className="pt-2 border-t border-stone-100">
                <p className="text-xs font-medium text-stone-500 mb-1">प्रदान की जाने वाली सेवाएं / उत्पाद:</p>
                <p className="text-sm text-stone-700 leading-relaxed bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                  {member.servicesOffered}
                </p>
              </div>
            )}

            {member.specialOfferForSamaj && (
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-0.5">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span>समाज बंधुओं हेतु विशेष सुविधा / छूट:</span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed font-medium">
                  {member.specialOfferForSamaj}
                </p>
              </div>
            )}
          </div>

          {/* Bio / Seva */}
          {member.bio && (
            <div className="text-sm text-stone-600 bg-stone-100/60 p-3.5 rounded-xl border border-stone-200">
              <span className="font-semibold text-stone-800">परिचय / सेवा भाव: </span>
              {member.bio}
            </div>
          )}

          {/* Blood donor info */}
          {member.isBloodDonor && (
            <div className="flex items-center gap-3 p-3 bg-rose-50 rounded-xl border border-rose-200 text-xs text-rose-900">
              <Heart className="w-4 h-4 text-rose-600 fill-rose-600 shrink-0" />
              <div>
                <span className="font-bold">जीवन रक्षक रक्तदाता ({member.bloodGroup}): </span>
                आपातकाल में रक्त की आवश्यकता होने पर सीधे संपर्क किया जा सकता है।
              </div>
            </div>
          )}

          {/* Address */}
          {member.address && (
            <div className="text-xs text-stone-600 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <span>{member.address}, {member.city}, {member.state}</span>
            </div>
          )}

          {/* Action Contact Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
            <a
              href={`tel:${member.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>कॉल करें</span>
            </a>

            {member.whatsapp ? (
              <a
                href={`https://wa.me/${member.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`नमस्ते ${member.name} जी, मैंने समाज निर्देशिका ऐप पर आपका प्रोफाइल देखा।`)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>व्हाट्सएप</span>
              </a>
            ) : null}

            {member.email ? (
              <a
                href={`mailto:${member.email}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-stone-700 hover:bg-stone-800 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>ईमेल</span>
              </a>
            ) : null}

            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>साझा करें</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
