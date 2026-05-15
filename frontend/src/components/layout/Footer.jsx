import { Link } from 'react-router-dom';
import business from '../../data/business';

const productLinks = [
  { path: '/catalogue', label: 'Earthing Materials'        },
  { path: '/catalogue', label: 'Distribution Transformers' },
  { path: '/catalogue', label: 'All Armoured Cables'       },
  { path: '/catalogue', label: 'Feeder Pillar'             },
  { path: '/catalogue', label: 'Switches & Sockets'        },
];

const moreProductLinks = [
  { path: '/catalogue', label: 'Single Cables'          },
  { path: '/catalogue', label: 'Overhead Silicon'       },
  { path: '/catalogue', label: 'Aluminium Conductor'    },
  { path: '/catalogue', label: 'Chandelier & Lighting'  },
];

const companyLinks = [
  { path: '/about',   label: 'About Us'     },
  { path: '/contact', label: 'Contact'      },
  { path: '/contact', label: 'Get a Quote'  },
];

const Footer = () => {
  return (
    <footer className="bg-[#080F1E]">

      {/* ── Main Footer Grid ── */}
      <div className="px-16 pt-14 pb-10 grid grid-cols-4 gap-12 border-b border-white/10">

        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 flex items-center justify-center rounded bg-gold font-serif font-black text-xl text-navy shrink-0">
              E
            </div>
            <div className="font-serif font-bold text-white text-base leading-tight">
              {business.name}
            </div>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            {business.tagline}. RC: {business.rc} · {business.address}.
          </p>
        </div>

        {/* Products Column */}
        <div>
          <div className="text-gold-light text-[11px] font-bold uppercase tracking-[2px] mb-4">
            Products
          </div>
          <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
            {productLinks.map(({ path, label }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-white/45 text-sm no-underline hover:text-gold-light transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More Products Column */}
        <div>
          <div className="text-gold-light text-[11px] font-bold uppercase tracking-[2px] mb-4">
            More Products
          </div>
          <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
            {moreProductLinks.map(({ path, label }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-white/45 text-sm no-underline hover:text-gold-light transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <div className="text-gold-light text-[11px] font-bold uppercase tracking-[2px] mb-4">
            Company
          </div>
          <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
            {companyLinks.map(({ path, label }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-white/45 text-sm no-underline hover:text-gold-light transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-1.5">
            <a
              href={`tel:${business.phone.primary}`}
              className="text-white/45 text-sm no-underline hover:text-gold-light transition-colors duration-200"
            >
              {business.phone.primary}
            </a>
            <a
              href={`tel:${business.phone.secondary}`}
              className="text-white/45 text-sm no-underline hover:text-gold-light transition-colors duration-200"
            >
              {business.phone.secondary}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="text-white/45 text-sm no-underline hover:text-gold-light transition-colors duration-200"
            >
              {business.email}
            </a>
          </div>
        </div>

      </div>

      {/* ── Bottom Bar ── */}
      <div className="px-16 py-6 flex items-center justify-between">
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