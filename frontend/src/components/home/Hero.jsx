import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { generalEnquiryUrl } from '../../utils/whatsapp';
import business from '../../data/business';

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-navy">

      {/* ── Background Grid ── */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Gold Glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(200,134,10,0.12) 0%, transparent 60%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-15 py-20">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse" />
            <span className="text-gold-light text-xs font-semibold uppercase tracking-widest">
              Lagos Island · Nigeria
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-6xl font-black text-white leading-[1.05] mb-4">
            Nigeria's Trusted
            <em className="not-italic text-gold block">Electrical Supply</em>
            Partner
          </h1>

          {/* Subtitle */}
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-3">
            {business.tagline} — direct to contractors, builders and firms across Lagos.
          </p>

          {/* RC */}
          <p className="text-white/30 text-xs tracking-wide mb-10">
            CAC Registered · RC: {business.rc} · {business.address}
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-2 bg-gold text-navy font-bold text-sm px-8 py-4 rounded hover:bg-gold-light transition-colors duration-200 no-underline"
            >
              Browse Catalogue
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <a
              href={generalEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 text-sm font-medium border-b border-white/30 pb-0.5 hover:text-gold-light hover:border-gold-light transition-colors duration-200 no-underline"
            >
              <MessageCircle size={16} strokeWidth={2} />
              WhatsApp Us
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;