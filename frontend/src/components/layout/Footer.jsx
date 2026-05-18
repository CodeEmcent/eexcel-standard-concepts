import { Link } from 'react-router-dom';
import business from '../../data/business';
import { Phone, Mail } from 'lucide-react';

const productLinks = [
  { path: '/catalogue', label: 'Earthing Materials'        },
  { path: '/catalogue', label: 'Distribution Transformers' },
  { path: '/catalogue', label: 'All Armoured Cables'       },
  { path: '/catalogue', label: 'Feeder Pillar'             },
  { path: '/catalogue', label: 'Switches & Sockets'        },
];

const moreProductLinks = [
  { path: '/catalogue', label: 'Single Cables'         },
  { path: '/catalogue', label: 'Overhead Silicon'      },
  { path: '/catalogue', label: 'Aluminium Conductor'   },
  { path: '/catalogue', label: 'Chandelier & Lighting' },
];

const companyLinks = [
  { path: '/about',   label: 'About Us'    },
  { path: '/contact', label: 'Contact'     },
  { path: '/contact', label: 'Get a Quote' },
];

const Footer = () => {
  return (
    <footer className="bg-[#080F1E]">

      {/* ── Main Grid ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-15 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-b border-white/10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 flex items-center justify-center rounded bg-gold font-serif font-black text-xl text-navy shrink-0">
              E
            </div>
            <div className="font-serif font-bold text-white text-base leading-tight">
              {business.name}
            </div>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            {business.tagline}. RC: {business.rc} · {business.address}.
          </p>
        </div>

        {/* Products */}
        <div>
          <div className="text-gold-light text-[11px] font-bold uppercase tracking-[2px] mb-4">
            Products
          </div>
          <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
            {productLinks.map(({ path, label }) => (
              <li key={label}>
                <Link to={path} className="text-white/45 text-sm no-underline hover:text-gold-light transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More Products */}
        <div>
          <div className="text-gold-light text-[11px] font-bold uppercase tracking-[2px] mb-4">
            More Products
          </div>
          <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
            {moreProductLinks.map(({ path, label }) => (
              <li key={label}>
                <Link to={path} className="text-white/45 text-sm no-underline hover:text-gold-light transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="text-gold-light text-[11px] font-bold uppercase tracking-[2px] mb-4">
            Company
          </div>
          <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
            {companyLinks.map(({ path, label }) => (
              <li key={label}>
                <Link to={path} className="text-white/45 text-sm no-underline hover:text-gold-light transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2">
            <a href={`tel:${business.phone.primary}`} className="flex items-center gap-2 text-white/45 text-sm no-underline hover:text-gold-light transition-colors duration-200">
              <Phone size={13} strokeWidth={2} />
              {business.phone.primary}
            </a>
            <a href={`tel:${business.phone.secondary}`} className="flex items-center gap-2 text-white/45 text-sm no-underline hover:text-gold-light transition-colors duration-200">
              <Phone size={13} strokeWidth={2} />
              {business.phone.secondary}
            </a>
            <a href={`mailto:${business.email}`} className="flex items-center gap-2 text-white/45 text-sm no-underline hover:text-gold-light transition-colors duration-200">
              <Mail size={13} strokeWidth={2} />
              {business.email}
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-15 py-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-white/25 text-xs">
          © {new Date().getFullYear()} {business.name} (RC: {business.rc}). All rights reserved. {business.address}.
        </p>
        <p className="text-white/25 text-xs">
          Designed & developed by Emcent
        </p>
      </div>

    </footer>
  );
};

export default Footer;