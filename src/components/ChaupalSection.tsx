import React, { useState } from 'react';
import { 
  MessageSquare, 
  Heart, 
  Send, 
  Sparkles, 
  Share2, 
  Pin, 
  PlusCircle, 
  ThumbsUp, 
  X,
  MessageCircle
} from 'lucide-react';
import { SamajPost, PostCategory } from '../types';

interface ChaupalSectionProps {
  posts: SamajPost[];
  onAddPost: (post: Omit<SamajPost, 'id' | 'createdAt' | 'likes' | 'blessings' | 'comments'>) => void;
  onLikePost: (postId: string) => void;
  onBlessPost: (postId: string) => void;
  onAddComment: (postId: string, comment: { authorName: string; content: string }) => void;
  gotrasList: string[];
}

const categories: { label: string; value: string }[] = [
  { label: 'सभी बातें व विचार', value: 'all' },
  { label: 'सामाजिक सुधार', value: 'सामाजिक सुधार' },
  { label: 'शिक्षा व संस्कार', value: 'शिक्षा व संस्कार' },
  { label: 'युवा व रोजगार', value: 'युवा व रोजगार' },
  { label: 'व्यापार व नेटवर्किंग', value: 'व्यापार व नेटवर्किंग' },
  { label: 'वरिष्ठ जन मार्गदर्शन', value: 'वरिष्ठ जन मार्गदर्शन' }
];

export const ChaupalSection: React.FC<ChaupalSectionProps> = ({
  posts,
  onAddPost,
  onLikePost,
  onBlessPost,
  onAddComment,
  gotrasList
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  // New Post Form state
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newAuthorName, setNewAuthorName] = useState('');
  const [newAuthorGotra, setNewAuthorGotra] = useState(gotrasList[0] || 'बंसल');
  const [newAuthorCity, setNewAuthorCity] = useState('');
  const [newCategory, setNewCategory] = useState<PostCategory>('सामाजिक सुधार');

  // Comment Thread active post ID
  const [openCommentsPostId, setOpenCommentsPostId] = useState<string | null>(null);
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');

  const filteredPosts = posts.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim() || !newAuthorName.trim() || !newAuthorCity.trim()) {
      alert('कृपया शीर्षक, विचार, नाम एवं शहर अवश्य भरें।');
      return;
    }

    onAddPost({
      title: newTitle.trim(),
      content: newContent.trim(),
      authorName: newAuthorName.trim(),
      authorGotra: newAuthorGotra,
      authorCity: newAuthorCity.trim(),
      category: newCategory
    });

    setNewTitle('');
    setNewContent('');
    setNewAuthorName('');
    setNewAuthorCity('');
    setIsCreateOpen(false);
  };

  const handleCommentSubmit = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    onAddComment(postId, {
      authorName: commentName.trim(),
      content: commentText.trim()
    });

    setCommentText('');
  };

  return (
    <section id="chaupal" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            <span>समाज की आवाज</span>
            <span aria-hidden="true">·</span>
            <span>चौपाल व संवाद</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-heritage text-stone-900 tracking-tight">
            समाज की बातें व विचार मंच
          </h2>
          <p className="mt-2 text-base text-stone-600 max-w-2xl leading-relaxed">
            प्रत्येक व्यक्ति को अपने विचार, सामाजिक अनुभव, रचनात्मक सुझाव और समाज हित की बातें रखने का खुला मंच।
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setIsCreateOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-medium text-sm shadow-xs transition-colors shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>नया विचार / समाज की बात लिखें</span>
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === cat.value
                ? 'bg-amber-900 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {filteredPosts.map((post) => {
          const isCommentsOpen = openCommentsPostId === post.id;

          return (
            <article
              key={post.id}
              className={`bg-white rounded-2xl border ${
                post.isPinned ? 'border-amber-300 ring-1 ring-amber-200/60' : 'border-stone-200'
              } p-6 sm:p-7 shadow-2xs space-y-4`}
            >
              {/* Top metadata line (Unboxed) */}
              <div className="flex items-center justify-between gap-4 flex-wrap text-xs text-stone-500">
                <div className="flex items-center gap-2 flex-wrap">
                  {post.isPinned && (
                    <span className="flex items-center gap-1 font-bold text-amber-800">
                      <Pin className="w-3.5 h-3.5" />
                      विशेष विचार
                    </span>
                  )}
                  {post.isPinned && <span aria-hidden="true">·</span>}
                  <span className="font-semibold text-stone-700">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.createdAt}</span>
                </div>

                <div className="text-stone-400 text-[11px] font-mono">
                  समाज संवाद
                </div>
              </div>

              {/* Title & Content */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heritage text-stone-900 leading-snug">
                  {post.title}
                </h3>
                <p className="mt-3 text-stone-700 text-sm sm:text-base leading-relaxed text-justify whitespace-pre-line">
                  {post.content}
                </p>
              </div>

              {/* Author Strip */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold font-heritage flex items-center justify-center text-sm">
                    {post.authorName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900 font-heritage">
                      {post.authorName}
                      {post.authorRole && (
                        <span className="text-stone-500 font-normal font-sans ml-1.5">
                          ({post.authorRole})
                        </span>
                      )}
                    </p>
                    <p className="text-[11px] text-stone-500">
                      गोत्र: {post.authorGotra} · {post.authorCity}
                    </p>
                  </div>
                </div>

                {/* Interactions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onLikePost(post.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      post.isLiked
                        ? 'bg-amber-100 text-amber-900 font-semibold'
                        : 'bg-stone-50 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${post.isLiked ? 'fill-amber-800' : ''}`} />
                    <span>सहमति ({post.likes})</span>
                  </button>

                  <button
                    onClick={() => onBlessPost(post.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      post.isBlessed
                        ? 'bg-rose-100 text-rose-900 font-semibold'
                        : 'bg-stone-50 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <Sparkles className={`w-3.5 h-3.5 ${post.isBlessed ? 'fill-rose-700' : ''}`} />
                    <span>आशीर्वाद ({post.blessings})</span>
                  </button>

                  <button
                    onClick={() => setOpenCommentsPostId(isCommentsOpen ? null : post.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-50 text-stone-700 hover:bg-stone-100 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>चर्चा ({post.comments?.length || 0})</span>
                  </button>
                </div>
              </div>

              {/* Comments Section Drawer */}
              {isCommentsOpen && (
                <div className="pt-4 mt-4 border-t border-stone-100 bg-[#FCFAF6] p-4 rounded-xl space-y-4">
                  <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-amber-800" />
                    <span>विचार विमर्श एवं टिप्पणियां</span>
                  </h4>

                  {/* Comments List */}
                  {post.comments && post.comments.length > 0 ? (
                    <div className="space-y-2.5">
                      {post.comments.map((comm) => (
                        <div key={comm.id} className="bg-white p-3 rounded-lg border border-stone-200 text-xs">
                          <div className="flex items-center justify-between text-stone-500 mb-1">
                            <span className="font-bold text-stone-900">
                              {comm.authorName} {comm.authorGotra ? `(${comm.authorGotra})` : ''}
                            </span>
                            <span className="text-[10px]">{comm.createdAt}</span>
                          </div>
                          <p className="text-stone-700 leading-relaxed">{comm.content}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-stone-400 italic">
                      अभी तक कोई टिप्पणी नहीं है। प्रथम विचार रखें!
                    </p>
                  )}

                  {/* Add Comment Form */}
                  <form onSubmit={(e) => handleCommentSubmit(post.id, e)} className="space-y-2 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="आपका नाम..."
                        value={commentName}
                        onChange={(e) => setCommentName(e.target.value)}
                        className="px-3 py-1.5 rounded-lg border border-stone-300 text-xs bg-white text-stone-900 focus:outline-none focus:border-amber-600"
                        required
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="इस विचार पर अपनी टिप्पणी लिखें..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="flex-1 px-3 py-1.5 rounded-lg border border-stone-300 text-xs bg-white text-stone-900 focus:outline-none focus:border-amber-600"
                        required
                      />
                      <button
                        type="submit"
                        className="px-4 py-1.5 rounded-lg bg-amber-800 hover:bg-amber-900 text-white text-xs font-medium flex items-center gap-1"
                      >
                        <Send className="w-3 h-3" />
                        <span>भेजें</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* New Post Modal */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="relative w-full max-w-xl bg-[#FCFAF6] rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-white">
              <h3 className="text-lg font-bold font-heritage text-stone-900">
                समाज की चौपाल पर विचार साझा करें
              </h3>
              <button
                onClick={() => setIsCreateOpen(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handlePostSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  विषय / श्रेणी <span className="text-red-500">*</span>
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as PostCategory)}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-amber-500/20"
                >
                  <option value="सामाजिक सुधार">सामाजिक सुधार</option>
                  <option value="शिक्षा व संस्कार">शिक्षा व संस्कार</option>
                  <option value="युवा व रोजगार">युवा व रोजगार</option>
                  <option value="व्यापार व नेटवर्किंग">व्यापार व नेटवर्किंग</option>
                  <option value="वरिष्ठ जन मार्गदर्शन">वरिष्ठ जन मार्गदर्शन</option>
                  <option value="पर्व व परंपरा">पर्व व परंपरा</option>
                  <option value="सामान्य विचार">सामान्य विचार</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  विचार का शीर्षक <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="उदा. विवाह में सादगी अपनाने हेतु मेरा सुझाव"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  आपकी बात / विचार का विस्तृत विवरण <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="अपने विचार, संस्मरण, अनुभव अथवा सामाजिक सुझाव विस्तार से लिखें..."
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-amber-500/20 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">आपका नाम *</label>
                  <input
                    type="text"
                    required
                    value={newAuthorName}
                    onChange={(e) => setNewAuthorName(e.target.value)}
                    placeholder="उदा. रमेश बंसल"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">गोत्र</label>
                  <select
                    value={newAuthorGotra}
                    onChange={(e) => setNewAuthorGotra(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-amber-500/20"
                  >
                    {gotrasList.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">नगर / शहर *</label>
                  <input
                    type="text"
                    required
                    value={newAuthorCity}
                    onChange={(e) => setNewAuthorCity(e.target.value)}
                    placeholder="उदा. जयपुर"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setIsCreateOpen(false)}
                  className="px-4 py-2 rounded-lg border border-stone-300 text-stone-700 text-xs font-medium hover:bg-stone-100"
                >
                  रद्द करें
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-amber-800 text-white text-xs font-medium hover:bg-amber-900"
                >
                  चौपाल पर प्रकाशित करें
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
