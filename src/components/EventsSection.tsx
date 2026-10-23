import React from 'react';
import { Calendar, MapPin, Clock, Users, Phone, Check, Plus } from 'lucide-react';
import { SamajEvent } from '../types';

interface EventsSectionProps {
  events: SamajEvent[];
  onToggleRsvp: (eventId: string) => void;
  onAddEvent: (event: Omit<SamajEvent, 'id' | 'attendeesCount' | 'hasRsvpd'>) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events, onToggleRsvp, onAddEvent }) => {
  const [isAddOpen, setIsAddOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    title: '',
    date: '',
    time: '',
    venue: '',
    city: '',
    description: '',
    organizer: '',
    contactNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.city) return;
    onAddEvent(formData);
    setIsAddOpen(false);
    setFormData({
      title: '',
      date: '',
      time: '',
      venue: '',
      city: '',
      description: '',
      organizer: '',
      contactNumber: ''
    });
  };

  return (
    <section id="events" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <span>सामूहिक संगम</span>
            <span aria-hidden="true">·</span>
            <span>वार्षिक उत्सव एवं अधिवेशन</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-heritage text-stone-900 tracking-tight">
            समाज उत्सव एवं आगामी कार्यक्रम
          </h2>
          <p className="mt-2 text-base text-stone-600 max-w-2xl leading-relaxed">
            मिल-बैठकर समाज के विकास की चर्चा करें, प्रतिभाओं का अभिनंदन करें और बंधुत्व की डोर को और अधिक सुदृढ़ बनाएं।
          </p>
        </div>

        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-medium transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>+ नया कार्यक्रम जोड़ें</span>
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((evt) => (
          <div
            key={evt.id}
            className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between space-y-4 hover:shadow-xs transition-shadow"
          >
            <div>
              {/* Date Tag */}
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 mb-2">
                <Calendar className="w-4 h-4" />
                <span>{evt.date}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-stone-500">{evt.time}</span>
              </div>

              <h3 className="text-lg font-bold font-heritage text-stone-900 leading-snug">
                {evt.title}
              </h3>

              <p className="text-xs text-stone-600 mt-2.5 leading-relaxed bg-[#FAF7F2] p-3 rounded-xl border border-amber-200/50">
                {evt.description}
              </p>

              <div className="mt-4 space-y-2 text-xs text-stone-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <span>{evt.venue}, {evt.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>आयोजक: {evt.organizer}</span>
                </div>
              </div>
            </div>

            {/* Footer RSVP */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
              <span className="text-xs text-stone-500 font-mono tabular-nums">
                {evt.attendeesCount} बंधु सम्मिलित हो रहे हैं
              </span>

              <button
                onClick={() => onToggleRsvp(evt.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors ${
                  evt.hasRsvpd
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-amber-800 hover:bg-amber-900 text-white'
                }`}
              >
                {evt.hasRsvpd ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>सम्मिलित हो रहे हैं</span>
                  </>
                ) : (
                  <span>उपस्थिति दर्ज करें (RSVP)</span>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Event Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-[#FCFAF6] rounded-2xl shadow-2xl border border-stone-200 p-6 space-y-4">
            <h3 className="text-lg font-bold font-heritage text-stone-900">
              नया समाज कार्यक्रम जोड़ें
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">कार्यक्रम का नाम *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="उदा. होली स्नेह मिलन एवं कवि सम्मेलन"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">दिनांक *</label>
                  <input
                    type="text"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    placeholder="उदा. 15 मार्च 2027"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">समय</label>
                  <input
                    type="text"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    placeholder="उदा. शाम 5:00 बजे"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">स्थान / भवन *</label>
                <input
                  type="text"
                  required
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  placeholder="उदा. धानुक समाज भवन, सागर"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">शहर *</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="उदा. जयपुर / दिल्ली"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">विवरण</label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="कार्यक्रम का उद्देश्य..."
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setIsAddOpen(false)}
                  className="px-3 py-1.5 rounded-lg border border-stone-300 text-stone-700 text-xs font-medium"
                >
                  रद्द करें
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-amber-800 text-white text-xs font-medium hover:bg-amber-900"
                >
                  कार्यक्रम जोड़ें
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
