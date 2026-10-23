import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  CartesianGrid,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  HeartHandshake, 
  MessageSquare, 
  Calendar,
  Sparkles,
  Award
} from 'lucide-react';
import { SamajPost, SevaProject, SamajMember } from '../types';

interface EngagementDashboardProps {
  members: SamajMember[];
  posts: SamajPost[];
  sevaProjects: SevaProject[];
}

// 1. Monthly Active Members & New Joins (Last 8 Months)
const monthlyMembersData = [
  { month: 'मार्च', activeMembers: 4200, newRegistrations: 340 },
  { month: 'अप्रैल', activeMembers: 4850, newRegistrations: 410 },
  { month: 'मई', activeMembers: 5400, newRegistrations: 520 },
  { month: 'जून', activeMembers: 6150, newRegistrations: 680 },
  { month: 'जुलाई', activeMembers: 6900, newRegistrations: 610 },
  { month: 'अगस्त', activeMembers: 7600, newRegistrations: 730 },
  { month: 'सितंबर', activeMembers: 8250, newRegistrations: 810 },
  { month: 'अक्टूबर', activeMembers: 9140, newRegistrations: 950 }
];

// 2. Seva Contribution Trends (Amount in ₹ Thousands)
const sevaContributionTrends = [
  { month: 'मई', 'शिक्षा छात्रवृत्ति': 45, 'चिकित्सा सहायता': 30, 'कन्यादान व अन्य': 25 },
  { month: 'जून', 'शिक्षा छात्रवृत्ति': 60, 'चिकित्सा सहायता': 40, 'कन्यादान व अन्य': 35 },
  { month: 'जुलाई', 'शिक्षा छात्रवृत्ति': 85, 'चिकित्सा सहायता': 55, 'कन्यादान व अन्य': 40 },
  { month: 'अगस्त', 'शिक्षा छात्रवृत्ति': 95, 'चिकित्सा सहायता': 65, 'कन्यादान व अन्य': 50 },
  { month: 'सितंबर', 'शिक्षा छात्रवृत्ति': 120, 'चिकित्सा सहायता': 75, 'कन्यादान व अन्य': 60 },
  { month: 'अक्टूबर', 'शिक्षा छात्रवृत्ति': 140, 'चिकित्सा सहायता': 90, 'कन्यादान व अन्य': 75 }
];

// Custom Tooltip component for recharts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1C1917] text-white p-3 rounded-xl shadow-xl border border-stone-800 text-xs space-y-1">
        <p className="font-bold text-amber-300 pb-1 border-b border-stone-800 font-heritage">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center justify-between gap-4">
            <span style={{ color: entry.color }} className="font-medium">
              {entry.name}:
            </span>
            <span className="font-mono font-bold tabular-nums">
              {typeof entry.value === 'number' ? entry.value.toLocaleString('hi-IN') : entry.value}
              {entry.unit ? ` ${entry.unit}` : ''}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const EngagementDashboard: React.FC<EngagementDashboardProps> = ({
  members,
  posts,
  sevaProjects
}) => {
  const [timeRange, setTimeRange] = useState<'8m' | '4m'>('8m');

  // Compute live Chaupal Topics data from current posts state
  const chaupalTopicCounts = React.useMemo(() => {
    const counts: Record<string, { posts: number; engagements: number }> = {
      'सामाजिक सुधार': { posts: 0, engagements: 0 },
      'शिक्षा व संस्कार': { posts: 0, engagements: 0 },
      'युवा व रोजगार': { posts: 0, engagements: 0 },
      'व्यापार व नेटवर्किंग': { posts: 0, engagements: 0 },
      'वरिष्ठ जन मार्गदर्शन': { posts: 0, engagements: 0 },
      'पर्व व परंपरा': { posts: 0, engagements: 0 }
    };

    posts.forEach((p) => {
      const cat = p.category;
      if (!counts[cat]) {
        counts[cat] = { posts: 0, engagements: 0 };
      }
      counts[cat].posts += 1;
      counts[cat].engagements += (p.likes || 0) + (p.blessings || 0) + (p.comments?.length || 0);
    });

    // Baseline minimum engagement for rich aesthetic visualization
    const baseline: Record<string, { posts: number; engagements: number }> = {
      'सामाजिक सुधार': { posts: 8, engagements: 412 },
      'शिक्षा व संस्कार': { posts: 12, engagements: 540 },
      'युवा व रोजगार': { posts: 15, engagements: 620 },
      'व्यापार व नेटवर्किंग': { posts: 11, engagements: 495 },
      'वरिष्ठ जन मार्गदर्शन': { posts: 6, engagements: 340 },
      'पर्व व परंपरा': { posts: 9, engagements: 380 }
    };

    return Object.keys(counts).map((category) => {
      const base = baseline[category] || { posts: 2, engagements: 50 };
      return {
        topic: category,
        विचार: counts[category].posts + base.posts,
        सहभागिता: counts[category].engagements + base.engagements
      };
    });
  }, [posts]);

  const displayedMonthlyData = timeRange === '4m' 
    ? monthlyMembersData.slice(-4) 
    : monthlyMembersData;

  const totalRaised = sevaProjects.reduce((acc, curr) => acc + curr.raisedAmount, 0);

  return (
    <section id="dashboard" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Header with Title & Context */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <span>डेटा एवं विश्लेषण</span>
            <span aria-hidden="true">·</span>
            <span>सहभागिता एवं प्रगति</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-heritage text-stone-900 tracking-tight">
            समाज सहभागिता डैशबोर्ड
          </h2>
          <p className="mt-2 text-base text-stone-600 max-w-2xl leading-relaxed">
            समाज के सदस्यों की मासिक सक्रियता, सेवा कोष में निरंतर सहयोग प्रवाह और चौपाल के सबसे लोकप्रिय विषयों का सजीव ग्राफ़िकल विश्लेषण।
          </p>
        </div>

        {/* Time Filter Segmented Control */}
        <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl shrink-0">
          <button
            onClick={() => setTimeRange('8m')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              timeRange === '8m' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            गत 8 माह
          </button>
          <button
            onClick={() => setTimeRange('4m')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              timeRange === '4m' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            हाल के 4 माह
          </button>
        </div>
      </div>

      {/* KPI Cards Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
            <span>मासिक सक्रिय सदस्य</span>
            <Users className="w-4 h-4 text-amber-800" />
          </div>
          <p className="text-2xl lg:text-3xl font-bold text-stone-900 font-mono tabular-nums">
            9,140
          </p>
          <p className="text-xs text-emerald-700 font-medium mt-1">
            ↑ +14.2% पिछले माह से
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
            <span>कुल सेवा संकल्प निधि</span>
            <HeartHandshake className="w-4 h-4 text-amber-800" />
          </div>
          <p className="text-2xl lg:text-3xl font-bold text-amber-900 font-mono tabular-nums">
            ₹{(totalRaised / 100000).toFixed(1)} लाख
          </p>
          <p className="text-xs text-stone-500 mt-1">
            {sevaProjects.length} सक्रिय जनकल्याण योजनाएं
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
            <span>चौपाल संवाद व सहभागिता</span>
            <MessageSquare className="w-4 h-4 text-amber-800" />
          </div>
          <p className="text-2xl lg:text-3xl font-bold text-stone-900 font-mono tabular-nums">
            2,787
          </p>
          <p className="text-xs text-emerald-700 font-medium mt-1">
            विचार, आशीर्वाद व चर्चाएं
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
            <span>रक्तदाता समन्वय दर</span>
            <Award className="w-4 h-4 text-rose-700" />
          </div>
          <p className="text-2xl lg:text-3xl font-bold text-rose-700 font-mono tabular-nums">
            98.5%
          </p>
          <p className="text-xs text-stone-500 mt-1">
            आपातकालीन तत्परता
          </p>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Chart 1: Monthly Active Members Growth (Line Chart) */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider">
                लाइन चार्ट विश्लेषण
              </div>
              <h3 className="text-lg font-bold font-heritage text-stone-900 mt-0.5">
                मासिक सक्रिय सदस्य व नए जुड़ाव
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-800" />
              <span>सक्रिय सदस्य</span>
            </div>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={displayedMonthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1EFEA" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12, fill: '#78716C' }}
                  axisLine={{ stroke: '#E7E5E4' }}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 11, fill: '#78716C' }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(val) => `${val}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  wrapperStyle={{ fontSize: 12, paddingTop: 10 }} 
                  iconType="circle"
                />
                <Line 
                  type="monotone" 
                  dataKey="activeMembers" 
                  name="सक्रिय सदस्य (Active)" 
                  stroke="#9A3412" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#9A3412', strokeWidth: 2, stroke: '#FFFFFF' }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="newRegistrations" 
                  name="नए पंजीकृत बंधु (New Joins)" 
                  stroke="#059669" 
                  strokeWidth={2} 
                  strokeDasharray="4 4"
                  dot={{ r: 3, fill: '#059669' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-stone-500 pt-1 border-t border-stone-100">
            * समाज निर्देशिका और चौपाल के माध्यम से सदस्यों की सक्रिय भागीदारी में प्रति माह निरंतर 10-15% की वृद्धि दर्ज की जा रही है।
          </p>
        </div>

        {/* Chart 2: Seva Project Contribution Trends (Bar Chart) */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider">
                बार चार्ट विश्लेषण (हजार ₹ में)
              </div>
              <h3 className="text-lg font-bold font-heritage text-stone-900 mt-0.5">
                सेवा व जनकल्याण कोष सहयोग प्रवाह
              </h3>
            </div>
            <div className="text-xs text-stone-400 font-mono">
              ₹ '000 में
            </div>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sevaContributionTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1EFEA" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12, fill: '#78716C' }}
                  axisLine={{ stroke: '#E7E5E4' }}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 11, fill: '#78716C' }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(val) => `₹${val}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  wrapperStyle={{ fontSize: 12, paddingTop: 10 }}
                  iconType="square"
                />
                <Bar 
                  dataKey="शिक्षा छात्रवृत्ति" 
                  name="शिक्षा छात्रवृत्ति" 
                  fill="#9A3412" 
                  radius={[4, 4, 0, 0]} 
                />
                <Bar 
                  dataKey="चिकित्सा सहायता" 
                  name="चिकित्सा सहायता" 
                  fill="#D97706" 
                  radius={[4, 4, 0, 0]} 
                />
                <Bar 
                  dataKey="कन्यादान व अन्य" 
                  name="सामूहिक विवाह व अन्य" 
                  fill="#0284C7" 
                  radius={[4, 4, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-stone-500 pt-1 border-t border-stone-100">
            * शिक्षा छात्रवृत्ति कोष में समाज बंधुओं का सर्वाधिक उत्साह व योगदान रहा है, जिससे 45 से अधिक मेधावी छात्र उच्च शिक्षा प्राप्त कर रहे हैं।
          </p>
        </div>

      </div>

      {/* Chart 3: Popular Chaupal Topics (Bar Chart) */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider">
              विषयवार सहभागिता व संवाद
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-heritage text-stone-900 mt-0.5">
              चौपाल के सर्वाधिक चर्चित विषय (Popular Chaupal Topics)
            </h3>
          </div>
          <p className="text-xs text-stone-500">
            विचारों की संख्या एवं उन पर प्राप्त सहभागिता (सहमति + आशीर्वाद + टिप्पणियां)
          </p>
        </div>

        <div className="h-80 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={chaupalTopicCounts} 
              margin={{ top: 20, right: 20, left: -10, bottom: 25 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#F1EFEA" vertical={false} />
              <XAxis 
                dataKey="topic" 
                tick={{ fontSize: 11, fill: '#57534E' }}
                axisLine={{ stroke: '#E7E5E4' }}
                tickLine={false}
                interval={0}
                angle={-10}
                textAnchor="end"
              />
              <YAxis 
                tick={{ fontSize: 11, fill: '#78716C' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ fontSize: 12, paddingTop: 15 }} 
                iconType="circle"
              />
              <Bar 
                dataKey="सहभागिता" 
                name="कुल सहभागिता स्कोर (Engagements)" 
                fill="#78350F" 
                radius={[6, 6, 0, 0]}
              />
              <Bar 
                dataKey="विचार" 
                name="प्रकाशित विचार (Posts)" 
                fill="#F59E0B" 
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-stone-100 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-800 shrink-0" />
            <span><strong>युवा व रोजगार:</strong> युवाओं में करियर व नेटवर्किंग पर सर्वाधिक विचार विमर्श।</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
            <span><strong>शिक्षा व संस्कार:</strong> उच्च शिक्षा छात्रवृत्ति और नैतिक मूल्यों पर गहरा संवाद।</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
            <span><strong>सामाजिक सुधार:</strong> फिजूलखर्ची रोकने एवं सादगीपूर्ण विवाह पर व्यापक सहमति।</span>
          </div>
        </div>
      </div>

    </section>
  );
};
