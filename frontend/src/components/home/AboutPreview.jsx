import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="bg-white grid grid-cols-1 md:grid-cols-2">

      {/* Image Panel — placeholder until real photo is wired in */}
      <div className="relative min-h-80 bg-navy-light flex items-center justify-center overflow-hidden">
        <div className="text-white/10 font-serif text-9xl font-black select-none">
          EESC
        </div>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, transparent 60%, white)' }}
        />
      </div>

      {/* Text Panel */}
      <div className="max-w-none px-15 py-16 flex flex-col justify-center">
        <p className="text-gold text-xs font-bold uppercase tracking-[3px] mb-3">
          Our Operations
        </p>
        <h2 className="font-serif text-4xl font-bold text-navy leading-tight mb-5">
          Lagos Island's Electrical Specialist
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          E. Excel Standard Concepts (RC: 3158644) is a CAC-registered importer
          and supplier of electrical fittings and engineering services, operating
          from 50, Idoluwo Street, Lagos Island.
        </p>
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          We handle everything from individual component supplies to large-scale
          project procurement — serving contractors, facility managers,
          construction firms and utility providers across Lagos State and beyond.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 bg-gold text-navy font-bold text-sm px-7 py-3.5 rounded hover:bg-gold-light transition-colors duration-200 no-underline w-fit"
        >
          Learn More About Us
          <ArrowRight size={15} strokeWidth={2.5} />
        </Link>
      </div>

    </section>
  );
};

export default AboutPreview;