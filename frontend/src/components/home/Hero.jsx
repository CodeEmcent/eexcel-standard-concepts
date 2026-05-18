import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { generalEnquiryUrl } from '../../utils/whatsapp';
import heroBg from '../../assets/images/hero-bg.jpg';
import business from '../../data/business';

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-navy">

      {/* Real background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          filter: 'brightness(0.25)',
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-15 py-16 md:py-20">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 rounded-full px-4 py-1.5 mb-6 md:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse" />
            <span className="text-gold-light text-xs font-semibold uppercase tracking-widest">
              Lagos Island · Nigeria
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-6xl font-black text-white leading-[1.05] mb-4">
            Nigeria's Trusted
            <em className="not-italic text-gold block">Electrical Supply</em>
            Partner
          </h1>

          {/* Subtitle */}
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-3">
            {business.tagline} — direct to contractors, builders and firms across Lagos.
          </p>

          {/* RC */}
          <p className="text-white/30 text-xs tracking-wide mb-8 md:mb-10">
            CAC Registered · RC: {business.rc} · {business.address}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
              className="inline-flex items-center gap-2 text-white text-sm font-semibold border border-white/40 px-8 py-4 rounded hover:bg-white/10 hover:border-white transition-colors duration-200 no-underline w-full sm:w-auto justify-center"
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