import { Import, BadgeCheck, Layers, MessageCircle } from 'lucide-react';

const reasons = [
  {
    icon:   Import,
    number: '01',
    title:  'Direct Importer',
    desc:   'We import directly from manufacturers — Meksan transformers, Bussmann fuses, ExcelUK accessories — cutting out unnecessary middlemen.',
  },
  {
    icon:   BadgeCheck,
    number: '02',
    title:  'CAC Registered',
    desc:   'E. Excel Standard Concepts is CAC-registered (RC: 3158644), operating from 50 Idoluwo Street, Lagos Island since establishment.',
  },
  {
    icon:   Layers,
    number: '03',
    title:  'Serious Stock Depth',
    desc:   'From individual components to bulk project supplies — transformers, cable drums, conductor spools and earthing systems available in volume.',
  },
  {
    icon:   MessageCircle,
    number: '04',
    title:  'Fast Response',
    desc:   'WhatsApp-first communication. Reach us on 0809 870 8481 or 0802 110 3711 for immediate quotes and stock confirmation.',
  },
];

const WhyUs = () => {
  return (
    <section className="bg-navy py-20 relative overflow-hidden">

      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,134,10,0.1), transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-15">
        <p className="text-gold text-xs font-bold uppercase tracking-[3px] mb-3">
          Why Choose Us
        </p>
        <h2 className="font-serif text-4xl font-bold text-white mb-12">
          Built on trust. Backed by stock.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {reasons.map(({ icon: Icon, number, title, desc }) => (
            <div
              key={number}
              className="relative p-7 border border-white/10 rounded-lg bg-white/5"
            >
              {/* Gold top line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold rounded-t-lg" />

              <Icon size={28} strokeWidth={1.5} className="text-gold mb-4" />

              <div className="font-serif text-4xl font-black text-gold/20 leading-none mb-2">
                {number}
              </div>
              <h3 className="text-white font-bold text-base mb-2">
                {title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default WhyUs;