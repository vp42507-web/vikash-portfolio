import React, { useState } from 'react';
import { PERSONAL_INFO, FORM_BACKEND_CONFIG } from '../data/portfolioConfig';
import {
  MessageCircle,
  Instagram,
  Mail,
  Send,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  initialPlan?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialPlan,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    videoType: initialService || initialPlan || 'Instagram Reels',
    numberOfVideos: '1 Video',
    budget: '₹5,000 - ₹15,000',
    deadline: 'Within 1 week',
    referenceLink: '',
    projectDetails: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showGoogleFormHelp, setShowGoogleFormHelp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const videoTypes = [
    'Instagram Reels',
    'YouTube Long-Form Video',
    'YouTube Shorts',
    'Brand / Advertisement Video',
    'AI Video Editing',
    'Podcast Multi-Cam Editing',
    'Monthly Retainer Package',
    'Other / Custom Project',
  ];

  const videoQuantities = [
    '1 Video',
    '2 - 4 Videos',
    '5 - 10 Videos',
    '10+ Video Batch',
    'Ongoing Monthly Partnership',
  ];

  const budgetTiers = [
    'Under ₹2,500',
    '₹2,500 - ₹5,000',
    '₹5,000 - ₹15,000',
    '₹15,000 - ₹30,000',
    '₹30,000+',
  ];

  const deadlines = [
    'Urgent (24 - 48 Hours)',
    'Within 1 week',
    'Within 2 - 3 weeks',
    'Flexible / Planning Phase',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Video Project Inquiry - Vikash Pandey Portfolio*
---------------------------------------
*Name:* ${formData.name}
*WhatsApp:* ${formData.whatsapp}
*Email:* ${formData.email || 'Not specified'}
*Company / Brand:* ${formData.company || 'Individual Creator'}
*Type of Video:* ${formData.videoType}
*Number of Videos:* ${formData.numberOfVideos}
*Approximate Budget:* ${formData.budget}
*Deadline:* ${formData.deadline}
*Reference Link:* ${formData.referenceLink || 'None provided'}

*Project Details & Brief:*
${formData.projectDetails}`;
    return encodeURIComponent(text);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // If Google Form URL is set, submit to Google Form
    if (FORM_BACKEND_CONFIG.googleFormActionUrl) {
      try {
        const formBody = new URLSearchParams();
        Object.entries(formData).forEach(([key, val]) => {
          formBody.append(key, val);
        });
        await fetch(FORM_BACKEND_CONFIG.googleFormActionUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formBody.toString(),
        });
      } catch (err) {
        console.error('Submission error:', err);
      }
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleDirectWhatsAppSend = () => {
    const encoded = generateWhatsAppMessage();
    window.open(`https://wa.me/918839296833?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow w-[500px] h-[500px] bg-emerald-500/10 -top-20 left-10 -z-10" />
      <div className="ambient-glow w-[450px] h-[450px] bg-amber-500/10 bottom-10 right-10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            LET'S CREATE SOMETHING GREAT
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Have a project in mind? Tell me what you need and I'll get back to you.
          </p>

          {/* Quick Direct Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 font-bold text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-lg shadow-emerald-500/10 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CHAT ON WHATSAPP</span>
            </a>

            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-pink-500/15 hover:bg-pink-500/25 border border-pink-500/30 text-pink-400 font-bold text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-lg shadow-pink-500/10 cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>INSTAGRAM</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 font-bold text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Client Inquiry Form Container */}
        <div id="inquiry" className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-10 rounded-3xl glass-panel border border-white/15 bg-[#0b0b10] shadow-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Project Inquiry Form
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Fill in your details below. You can send it directly to my WhatsApp or submit the form.
                </p>
              </div>

              {/* Backend indicator info badge */}
              <button
                type="button"
                onClick={() => setShowGoogleFormHelp(!showGoogleFormHelp)}
                className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors self-start sm:self-auto cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Google Form Integration</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    showGoogleFormHelp ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Google Form Instructions Collapse */}
            {showGoogleFormHelp && (
              <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-zinc-300 space-y-2">
                <div className="font-semibold text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>How to connect your own Google Form:</span>
                </div>
                <p>
                  1. Create a free form on Google Forms with the fields shown below.
                </p>
                <p>
                  2. Open <code className="text-amber-200 bg-black/40 px-1 py-0.5 rounded">src/data/portfolioConfig.ts</code>.
                </p>
                <p>
                  3. Paste your form URL in <code className="text-amber-200 bg-black/40 px-1 py-0.5 rounded">FORM_BACKEND_CONFIG.googleFormActionUrl</code>.
                </p>
                <p className="text-zinc-400">
                  Even without a backend URL, clients can submit directly to your WhatsApp with one click!
                </p>
              </div>
            )}

            {isSubmitted ? (
              <div className="py-12 text-center space-y-5 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white font-display">
                  Project Request Received!
                </h4>
                <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. I have received your request and will review your requirements.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleDirectWhatsAppSend}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp Now</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                    >
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                    >
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors text-sm"
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                    >
                      WhatsApp Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors text-sm"
                    />
                  </div>

                  {/* Company / Brand */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                    >
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. YouTube Channel / Brand Name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors text-sm"
                    />
                  </div>

                  {/* Type of Video */}
                  <div>
                    <label
                      htmlFor="videoType"
                      className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                    >
                      Type of Video <span className="text-amber-400">*</span>
                    </label>
                    <select
                      id="videoType"
                      name="videoType"
                      value={formData.videoType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#14141a] border border-white/10 text-white focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors text-sm cursor-pointer"
                    >
                      {videoTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#14141a] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Number of Videos */}
                  <div>
                    <label
                      htmlFor="numberOfVideos"
                      className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                    >
                      Number of Videos
                    </label>
                    <select
                      id="numberOfVideos"
                      name="numberOfVideos"
                      value={formData.numberOfVideos}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#14141a] border border-white/10 text-white focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors text-sm cursor-pointer"
                    >
                      {videoQuantities.map((qty) => (
                        <option key={qty} value={qty} className="bg-[#14141a] text-white">
                          {qty}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Approximate Budget */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                    >
                      Approximate Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#14141a] border border-white/10 text-white focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors text-sm cursor-pointer"
                    >
                      {budgetTiers.map((tier) => (
                        <option key={tier} value={tier} className="bg-[#14141a] text-white">
                          {tier}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Deadline */}
                  <div>
                    <label
                      htmlFor="deadline"
                      className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                    >
                      Deadline
                    </label>
                    <select
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#14141a] border border-white/10 text-white focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors text-sm cursor-pointer"
                    >
                      {deadlines.map((dl) => (
                        <option key={dl} value={dl} className="bg-[#14141a] text-white">
                          {dl}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Reference Link */}
                <div>
                  <label
                    htmlFor="referenceLink"
                    className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                  >
                    Reference Link (YouTube / Instagram / Google Drive)
                  </label>
                  <input
                    type="url"
                    id="referenceLink"
                    name="referenceLink"
                    value={formData.referenceLink}
                    onChange={handleInputChange}
                    placeholder="https://youtube.com/watch?v=... or Instagram Reel link"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors text-sm"
                  />
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                  >
                    Project Details & Scope <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    required
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Tell me about the raw footage length, editing style, target audience, specific graphics/sound requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-colors text-sm"
                  />
                </div>

                {/* Action Buttons: Form Submit & Direct WhatsApp */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-xl shadow-white/5"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'SENDING...' : 'SEND PROJECT REQUEST'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectWhatsAppSend}
                    className="w-full sm:w-auto py-4 px-6 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
