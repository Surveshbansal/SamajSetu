import React, { useState, useEffect } from 'react';
import { 
  initialSamajProfile, 
  initialPosts, 
  initialMembers, 
  initialOpportunities, 
  initialSevaProjects, 
  initialEvents, 
  initialMatrimonial 
} from './data/mockData';
import { 
  SamajProfile, 
  SamajPost, 
  SamajMember, 
  BusinessOpportunity, 
  SevaProject, 
  SamajEvent, 
  MatrimonialProfile 
} from './types';
import { Navbar } from './components/Navbar';
import { HeritageSection } from './components/HeritageSection';
import { DirectorySection } from './components/DirectorySection';
import { EngagementDashboard } from './components/EngagementDashboard';
import { ChaupalSection } from './components/ChaupalSection';
import { SevaSection } from './components/SevaSection';
import { EventsSection } from './components/EventsSection';
import { MatrimonialSection } from './components/MatrimonialSection';
import { EditSamajModal } from './components/EditSamajModal';
import { AddMemberModal } from './components/AddMemberModal';
import { SocialConnectSection } from './components/SocialConnectSection';
import { FloatingSocialWidget } from './components/FloatingSocialWidget';
import { Footer } from './components/Footer';
import { Sparkles, Building2, Users } from 'lucide-react';

const SAMAJ_PRESETS = [
  { name: 'अखिल भारतीय धानुक समाज संगठन, मध्य प्रदेश', gotras: ['बंसल', 'धानुक', 'धानक', 'बरदेले', 'कैथोरा', 'बमनेले', 'संदेला', 'मौर्य', 'कौशिक', 'भारद्वाज', 'कश्यप', 'चौहान', 'वर्मा'] },
  { name: 'धानुक समाज — सागर जिला इकाई', gotras: ['बंसल', 'धानुक', 'धानक', 'बरदेले', 'कैथोरा', 'बमनेले', 'संदेला', 'मौर्य', 'कौशिक', 'भारद्वाज', 'कश्यप', 'चौहान'] },
  { name: 'धानुक समाज — सागर नगर इकाई', gotras: ['बंसल', 'धानुक', 'धानक', 'बरदेले', 'कैथोरा', 'बमनेले', 'संदेला', 'मौर्य', 'कौशिक', 'भारद्वाज'] },
  { name: 'धानुक समाज — मल्थोन ब्लॉक इकाई', gotras: ['बंसल', 'धानुक', 'धानक', 'बरदेले', 'कैथोरा', 'बमनेले', 'संदेला', 'मौर्य'] },
  { name: 'धानुक समाज — बांदरी ब्लॉक इकाई', gotras: ['बंसल', 'धानुक', 'धानक', 'बरदेले', 'कैथोरा', 'बमनेले', 'संदेला', 'मौर्य'] }
];

export default function App() {
  // 1. Samaj Profile State
  const [profile, setProfile] = useState<SamajProfile>(() => {
    try {
      const saved = localStorage.getItem('samajsetu_profile_dhanuk_v3');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          socialLinks: parsed.socialLinks || initialSamajProfile.socialLinks
        };
      }
      return initialSamajProfile;
    } catch {
      return initialSamajProfile;
    }
  });

  // 2. Members State (Directory)
  const [members, setMembers] = useState<SamajMember[]>(() => {
    try {
      const saved = localStorage.getItem('samajsetu_members_dhanuk_v3');
      return saved ? JSON.parse(saved) : initialMembers;
    } catch {
      return initialMembers;
    }
  });

  // 3. Posts State (Chaupal)
  const [posts, setPosts] = useState<SamajPost[]>(() => {
    try {
      const saved = localStorage.getItem('samajsetu_posts_dhanuk_v3');
      return saved ? JSON.parse(saved) : initialPosts;
    } catch {
      return initialPosts;
    }
  });

  // 4. Opportunities State
  const [opportunities, setOpportunities] = useState<BusinessOpportunity[]>(() => {
    try {
      const saved = localStorage.getItem('samajsetu_opps_dhanuk_v3');
      return saved ? JSON.parse(saved) : initialOpportunities;
    } catch {
      return initialOpportunities;
    }
  });

  // 5. Seva Projects State
  const [sevaProjects, setSevaProjects] = useState<SevaProject[]>(() => {
    try {
      const saved = localStorage.getItem('samajsetu_seva_dhanuk_v3');
      return saved ? JSON.parse(saved) : initialSevaProjects;
    } catch {
      return initialSevaProjects;
    }
  });

  // 6. Events State
  const [events, setEvents] = useState<SamajEvent[]>(() => {
    try {
      const saved = localStorage.getItem('samajsetu_events_dhanuk_v3');
      return saved ? JSON.parse(saved) : initialEvents;
    } catch {
      return initialEvents;
    }
  });

  // 7. Matrimonial Profiles State
  const [matrimonials, setMatrimonials] = useState<MatrimonialProfile[]>(() => {
    try {
      const saved = localStorage.getItem('samajsetu_matrimonial_dhanuk_v3');
      return saved ? JSON.parse(saved) : initialMatrimonial;
    } catch {
      return initialMatrimonial;
    }
  });

  // Modals
  const [isEditSamajOpen, setIsEditSamajOpen] = useState(false);
  const [isGlobalAddMemberOpen, setIsGlobalAddMemberOpen] = useState(false);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('samajsetu_profile_dhanuk_v3', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('samajsetu_members_dhanuk_v3', JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    localStorage.setItem('samajsetu_posts_dhanuk_v3', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('samajsetu_opps_dhanuk_v3', JSON.stringify(opportunities));
  }, [opportunities]);

  useEffect(() => {
    localStorage.setItem('samajsetu_seva_dhanuk_v3', JSON.stringify(sevaProjects));
  }, [sevaProjects]);

  useEffect(() => {
    localStorage.setItem('samajsetu_events_dhanuk_v3', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('samajsetu_matrimonial_dhanuk_v3', JSON.stringify(matrimonials));
  }, [matrimonials]);

  // Handlers
  const handleAddMember = (newMem: Omit<SamajMember, 'id' | 'joinedYear'>) => {
    const created: SamajMember = {
      ...newMem,
      id: `mem-${Date.now()}`,
      joinedYear: new Date().getFullYear()
    };
    setMembers((prev) => [created, ...prev]);
  };

  const handleAddPost = (newPost: Omit<SamajPost, 'id' | 'createdAt' | 'likes' | 'blessings' | 'comments'>) => {
    const created: SamajPost = {
      ...newPost,
      id: `post-${Date.now()}`,
      createdAt: 'अभी-अभी',
      likes: 1,
      blessings: 1,
      comments: []
    };
    setPosts((prev) => [created, ...prev]);
  };

  const handleLikePost = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const isLiked = !p.isLiked;
          return {
            ...p,
            isLiked,
            likes: isLiked ? p.likes + 1 : Math.max(0, p.likes - 1)
          };
        }
        return p;
      })
    );
  };

  const handleBlessPost = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const isBlessed = !p.isBlessed;
          return {
            ...p,
            isBlessed,
            blessings: isBlessed ? p.blessings + 1 : Math.max(0, p.blessings - 1)
          };
        }
        return p;
      })
    );
  };

  const handleAddComment = (postId: string, comment: { authorName: string; content: string }) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            comments: [
              ...(p.comments || []),
              {
                id: `c-${Date.now()}`,
                authorName: comment.authorName,
                content: comment.content,
                createdAt: 'अभी-अभी'
              }
            ]
          };
        }
        return p;
      })
    );
  };

  const handleAddOpportunity = (opp: Omit<BusinessOpportunity, 'id' | 'postedDate'>) => {
    const created: BusinessOpportunity = {
      ...opp,
      id: `opp-${Date.now()}`,
      postedDate: 'आज'
    };
    setOpportunities((prev) => [created, ...prev]);
  };

  const handleContribute = (projectId: string, amount: number) => {
    setSevaProjects((prev) =>
      prev.map((p) => {
        if (p.id === projectId) {
          const newRaised = p.raisedAmount + amount;
          return {
            ...p,
            raisedAmount: newRaised,
            status: newRaised >= p.targetAmount ? 'पूर्ण' : p.status
          };
        }
        return p;
      })
    );
  };

  const handleRequestAid = (aid: { title: string; category: SevaProject['category']; description: string; contactNumber: string }) => {
    const newProj: SevaProject = {
      id: `aid-${Date.now()}`,
      title: aid.title,
      category: aid.category,
      targetAmount: 50000,
      raisedAmount: 5000,
      description: aid.description,
      beneficiaryCount: 1,
      coordinator: 'समाज सेवा प्रकोष्ठ',
      contactNumber: aid.contactNumber,
      status: 'सक्रिय'
    };
    setSevaProjects((prev) => [newProj, ...prev]);
  };

  const handleToggleRsvp = (eventId: string) => {
    setEvents((prev) =>
      prev.map((e) => {
        if (e.id === eventId) {
          const hasRsvpd = !e.hasRsvpd;
          return {
            ...e,
            hasRsvpd,
            attendeesCount: hasRsvpd ? e.attendeesCount + 1 : Math.max(0, e.attendeesCount - 1)
          };
        }
        return e;
      })
    );
  };

  const handleAddEvent = (evt: Omit<SamajEvent, 'id' | 'attendeesCount' | 'hasRsvpd'>) => {
    const created: SamajEvent = {
      ...evt,
      id: `evt-${Date.now()}`,
      attendeesCount: 1,
      hasRsvpd: true
    };
    setEvents((prev) => [created, ...prev]);
  };

  const handleAddMatrimonial = (mat: Omit<MatrimonialProfile, 'id'>) => {
    const created: MatrimonialProfile = {
      ...mat,
      id: `mat-${Date.now()}`
    };
    setMatrimonials((prev) => [created, ...prev]);
  };

  const applyPreset = (preset: typeof SAMAJ_PRESETS[0]) => {
    setProfile((prev) => ({
      ...prev,
      name: preset.name,
      mainGotras: preset.gotras
    }));
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* 3-Zone Top Bar Contract Navigation */}
      <Navbar
        onOpenAddMember={() => setIsGlobalAddMemberOpen(true)}
        samajName={profile.name}
        socialLinks={profile.socialLinks}
      />

      {/* Community Selector / Fast Switcher Ribbon */}
      <div className="bg-amber-950 text-white py-2 px-4 border-b border-amber-900 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-amber-300">धानुक समाज इकाइयां:</span>
            <span className="hidden sm:inline text-stone-300">मध्य प्रदेश एवं सागर जिला शाखाएं:</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
            {SAMAJ_PRESETS.map((pr) => (
              <button
                key={pr.name}
                onClick={() => applyPreset(pr)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors ${
                  profile.name === pr.name
                    ? 'bg-amber-700 text-white font-bold'
                    : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {pr.name.replace('अखिल भारतीय ', '').replace('धानुक समाज — ', '')}
              </button>
            ))}
            <button
              onClick={() => setIsEditSamajOpen(true)}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-amber-600 hover:bg-amber-500 text-white whitespace-nowrap transition-colors"
            >
              + विवरण बदलें
            </button>
          </div>
        </div>
      </div>

      {/* Main App Content */}
      <main className="flex-1">
        {/* 1. Heritage & Description: समाज का वर्णन व इतिहास */}
        <HeritageSection
          profile={profile}
          onEditProfileClick={() => setIsEditSamajOpen(true)}
        />

        {/* 2. Official Social Media Channels: फेसबुक, यूट्यूब, इंस्टाग्राम, व्हाट्सएप */}
        <SocialConnectSection
          socialLinks={profile.socialLinks}
        />

        {/* 3. Directory & Networking: समाज निर्देशिका (सदस्यों, व्यवसाय व सेवाओं की खोज व जुड़ाव) */}
        <DirectorySection
          members={members}
          onAddMember={handleAddMember}
          gotrasList={profile.mainGotras}
          opportunities={opportunities}
          onAddOpportunity={handleAddOpportunity}
        />

        {/* 4. Community Engagement Dashboard: समाज सहभागिता विश्लेषण (Recharts) */}
        <EngagementDashboard
          members={members}
          posts={posts}
          sevaProjects={sevaProjects}
        />

        {/* 5. Chaupal: समाज की बातें व विचार मंच */}
        <ChaupalSection
          posts={posts}
          onAddPost={handleAddPost}
          onLikePost={handleLikePost}
          onBlessPost={handleBlessPost}
          onAddComment={handleAddComment}
          gotrasList={profile.mainGotras}
        />

        {/* 6. Seva: पारस्परिक सेवा व जनकल्याण कोष */}
        <SevaSection
          projects={sevaProjects}
          onContribute={handleContribute}
          onRequestAid={handleRequestAid}
        />

        {/* 7. Events: आयोजन व उत्सव */}
        <EventsSection
          events={events}
          onToggleRsvp={handleToggleRsvp}
          onAddEvent={handleAddEvent}
        />

        {/* 8. Matrimonial: वैवाहिक परिचय व युवा संगम */}
        <MatrimonialSection
          profiles={matrimonials}
          onAddProfile={handleAddMatrimonial}
          gotrasList={profile.mainGotras}
        />
      </main>

      {/* Footer */}
      <Footer
        samajName={profile.name}
        motto={profile.motto}
        socialLinks={profile.socialLinks}
      />

      {/* Floating Instant Social & WhatsApp Quick Access */}
      <FloatingSocialWidget
        socialLinks={profile.socialLinks}
      />

      {/* Edit Samaj Profile Modal */}
      <EditSamajModal
        isOpen={isEditSamajOpen}
        onClose={() => setIsEditSamajOpen(false)}
        profile={profile}
        onSave={setProfile}
      />

      {/* Quick Add Member to Directory Modal */}
      <AddMemberModal
        isOpen={isGlobalAddMemberOpen}
        onClose={() => setIsGlobalAddMemberOpen(false)}
        onAddMember={handleAddMember}
        gotrasList={profile.mainGotras}
      />

    </div>
  );
}
