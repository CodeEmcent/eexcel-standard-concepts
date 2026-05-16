import { ShieldCheck, MapPin, Package, Phone, Zap } from 'lucide-react';
import business from '../../data/business';

const trustItems = [
  { icon: ShieldCheck, text: `CAC Registered · RC ${business.rc}` },
  { icon: MapPin,      text: '50, Idoluwo Street, Lagos Island'    },
  { icon: Package,     text: '9 Product Categories'                },
  { icon: Phone,       text: business.phone.primary                },
  { icon: Zap,         text: 'Transformers In Stock'               },
];

const TrustBar = () => {
  return (
    <div className="bg-gold py-5">
      <div className="max-w-7xl mx-auto px-15 flex items-center justify-between gap-4 flex-wrap">
        {trustItems.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2 text-navy font-semibold text-sm">
            <Icon size={16} strokeWidth={2.5} />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;