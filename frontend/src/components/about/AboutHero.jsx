import { ShieldCheck, MapPin, MessageCircle, Award } from 'lucide-react';

const stats = [
  { icon: Award,        number: '9',        label: 'Product Categories'        },
  { icon: ShieldCheck,  number: 'RC',       label: '3158644 — CAC Registered'  },
  { icon: MapPin,       number: '50',       label: 'Idoluwo St, Lagos Island'  },
  { icon: MessageCircle,number: '24/7',     label: 'WhatsApp Response'         },
];

const AboutHero = () => {
  return (
    <section className="bg-navy py-20 relative overflow-hidden">

      {/* Grid overlay */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-15 grid grid-cols-2 gap-20 items-center">

        {/* Left — Text */}
        <div>
          <p className="text-gold text-xs font-bold uppercase tracking-[3px] mb-3">
            Our Story
          </p>
          <h1 className="font-serif text-5xl font-black text-white leading-tight mb-6">
            Powering Lagos, One Connection at a Time
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            E. Excel Standard Concepts was established with a clear mission —
            bring quality imported electrical materials directly to Nigerian
            contractors, builders and businesses, without unnecessary layers
            and markups.
          </p>
        </div>

        {/* Right — Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ icon: Icon, number, label }) => (
            <div
              key={label}
              className="bg-white/5 border border-gold/25 rounded-lg p-6 text-center"
            >
              <Icon size={24} strokeWidth={1.5} className="text-gold mx-auto mb-3" />
              <div className="font-serif text-3xl font-black text-gold leading-none mb-2">
                {number}
              </div>
              <div className="text-white/55 text-sm font-medium leading-tight">
                {label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutHero;