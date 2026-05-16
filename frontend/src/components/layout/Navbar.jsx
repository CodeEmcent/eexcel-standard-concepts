import { NavLink } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { generalEnquiryUrl } from '../../utils/whatsapp';
import business from '../../data/business';

const navLinks = [
  { path: '/',          label: 'Home'      },
  { path: '/catalogue', label: 'Catalogue' },
  { path: '/about',     label: 'About'     },
  { path: '/contact',   label: 'Contact'   },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b-[3px] border-gold bg-navy">
      <div className="max-w-7xl mx-auto px-15 h-18 flex items-center justify-between">

        {/* ── Logo ── */}
        <NavLink to="/" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 flex items-center justify-center rounded bg-gold font-serif font-black text-xl text-navy shrink-0">
            E
          </div>
          <div>
            <div className="font-serif font-bold text-white text-[17px] leading-tight">
              {business.name}
            </div>
            <div className="text-gold-light text-[10px] uppercase tracking-widest">
              Electrical Fittings · Cables · Engineering
            </div>
          </div>
        </NavLink>

        {/* ── Nav Links ── */}
        <ul className="flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium no-underline pb-1 border-b-2 transition-colors duration-200 ${
                    isActive
                      ? 'text-gold-light border-gold-light'
                      : 'text-white/80 border-transparent hover:text-gold-light'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* ── Get a Quote CTA ── */}
          <li>
            <a
              href={generalEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold text-navy font-semibold text-sm px-5 py-2.5 rounded hover:bg-gold-light transition-colors duration-200 no-underline"
            >
              <FileText size={15} strokeWidth={2.5} />
              Get a Quote
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;