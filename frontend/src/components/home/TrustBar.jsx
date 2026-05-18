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
    <div className="bg-gold py-4 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-15 flex items-center gap-6 md:justify-between min-w-max md:min-w-0">
        {trustItems.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2 text-navy font-semibold text-xs md:text-sm whitespace-nowrap">
            <Icon size={15} strokeWidth={2.5} />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;