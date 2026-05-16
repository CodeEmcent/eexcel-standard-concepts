import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import business from '../../data/business';

const AboutBody = () => {
  return (
    <section className="bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-15 grid grid-cols-2 gap-16 items-start">

        {/* Left — Business Description */}
        <div>
          <p className="text-gold text-xs font-bold uppercase tracking-[3px] mb-3">
            Who We Are
          </p>
          <h2 className="font-serif text-4xl font-bold text-navy leading-tight mb-6">
            Lagos Island's Electrical Specialist
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            E. Excel Standard Concepts (RC: 3158644) is a CAC-registered
            importer and supplier of electrical fittings and engineering
            services, operating from 50, Idoluwo Street, Lagos Island. We
            serve electricians, contractors, facility managers and businesses
            across Lagos State and beyond.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Our product range spans nine core categories — Meksan distribution
            transformers, SWA armoured cables, aluminium conductors, Classy
            Tech earthing systems, ExcelUK switches and sockets, silicon
            overhead line materials, feeder pillars, single cables, and
            decorative lighting.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Whether you need a single component or bulk project supply, we
            have the stock depth and the direct-import relationships to support
            you at scale.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-navy font-bold text-sm px-7 py-3.5 rounded hover:bg-gold-light transition-colors duration-200 no-underline"
          >
            Contact Us Today
            <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Right — Operations Photos + Location */}
        <div className="flex flex-col gap-6">

          {/* Operations photo grid — placeholders until real images wired in */}
          <div>
            <p className="text-gold text-xs font-bold uppercase tracking-[3px] mb-4">
              Our Operations
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Cable drum delivery operations',
                'Transformer yard stock',
                'Single cable warehouse',
                'Earthing materials stock',
              ].map((caption) => (
                <div
                  key={caption}
                  className="rounded-lg overflow-hidden bg-navy-light h-44 flex items-end relative"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/10 font-serif text-4xl font-black select-none">
                      EESC
                    </div>
                  </div>
                  <div className="relative z-10 w-full bg-navy/60 px-3 py-2">
                    <p className="text-white/60 text-xs leading-tight">{caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-navy-light h-36 flex items-center justify-center relative">
              <MapPin size={40} strokeWidth={1.5} className="text-gold" />
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                  E. Excel Standard Concepts
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={16} strokeWidth={2} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-navy font-semibold text-sm mb-0.5">Address</p>
                  <p className="text-gray-600 text-sm">{business.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} strokeWidth={2} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-navy font-semibold text-sm mb-0.5">Trading Hours</p>
                  <p className="text-gray-600 text-sm">{business.hours.weekdays}</p>
                  <p className="text-gray-600 text-sm">{business.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutBody;