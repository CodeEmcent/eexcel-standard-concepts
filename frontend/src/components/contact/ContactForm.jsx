import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import products from '../../data/products';

const initialState = {
  full_name: '',
  phone:     '',
  email:     '',
  category:  '',
  message:   '',
};

const ContactForm = () => {
  const [form, setForm]       = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:8000/api/enquiries/', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm(initialState);
      } else {
        const data = await res.json();
        setError(data?.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Unable to send enquiry. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-20 px-15">
        <CheckCircle size={64} strokeWidth={1.5} className="text-gold mb-6" />
        <h3 className="font-serif text-3xl font-bold text-navy mb-3 text-center">
          Enquiry Received
        </h3>
        <p className="text-gray-600 text-base text-center max-w-sm leading-relaxed mb-8">
          Thank you for reaching out. We will contact you shortly on the number you provided.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="inline-flex items-center gap-2 bg-gold text-navy font-bold text-sm px-6 py-3 rounded hover:bg-gold-light transition-colors duration-200"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-off-white px-15 py-16">
      <p className="text-gold text-xs font-bold uppercase tracking-[3px] mb-3">
        Send an Enquiry
      </p>
      <h2 className="font-serif text-4xl font-bold text-navy mb-8">
        Request a Quote
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            required
            placeholder="e.g. Adebayo Okafor"
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold transition-colors duration-200"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="0809 XXX XXXX"
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold transition-colors duration-200"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold transition-colors duration-200"
          />
        </div>

        {/* Product Category */}
        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
            Product Category
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-gold transition-colors duration-200"
          >
            <option value="">-- Select a category --</option>
            {products.map((p) => (
              <option key={p.id} value={p.name}>{p.name}</option>
            ))}
            <option value="General Enquiry">General / Engineering Enquiry</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
            Message / Requirement *
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Describe what you need — product type, quantity, specification or any question..."
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 bg-navy text-white font-bold text-sm px-8 py-4 rounded-lg hover:bg-navy-light transition-colors duration-200 disabled:opacity-60"
        >
          <Send size={15} strokeWidth={2.5} />
          {loading ? 'Sending...' : 'Send Enquiry'}
        </button>

      </form>
    </div>
  );
};

export default ContactForm;