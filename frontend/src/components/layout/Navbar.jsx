import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FileText, Menu, X } from 'lucide-react';
import { generalEnquiryUrl } from '../../utils/whatsapp';
import business from '../../data/business';

const navLinks = [
  { path: '/',          label: 'Home'      },
  { path: '/catalogue', label: 'Catalogue' },
  { path: '/about',     label: 'About'     },
  { path: '/contact',   label: 'Contact'   },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b-[3px] border-gold bg-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-15 h-18 flex items-center justify-between">

        {/* ── Logo ── */}
        <NavLink
          to="/"
          className="flex items-center gap-3 no-underline"
          onClick={() => setMenuOpen(false)}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded bg-gold font-serif font-black text-xl text-navy shrink-0">
            E
          </div>
          <div>
            <div className="font-serif font-bold text-white text-[15px] md:text-[17px] leading-tight">
              {business.name}
            </div>
            <div className="text-gold-light text-[9px] md:text-[10px] uppercase tracking-widest hidden sm:block">
              Electrical Fittings · Cables · Engineering
            </div>
          </div>
        </NavLink>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
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

        {/* ── Mobile Hamburger ── */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen
            ? <X size={24} strokeWidth={2} />
            : <Menu size={24} strokeWidth={2} />
          }
        </button>

      </div>

      {/* ── Mobile Menu ── */}
      {/* ── Mobile Side Drawer Overlay ── */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">

          {/* Dark backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMenuOpen(false)}
          />

          {/* Side panel */}
          <div className="slide-in-right absolute right-0 top-0 h-full w-72 bg-navy border-l border-gold/30 flex flex-col shadow-2xl">

            {/* Panel header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded bg-gold font-serif font-black text-base text-navy">
                  E
                </div>
                <span className="font-serif font-bold text-white text-sm">
                  E. Excel Standard Concepts
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col px-6 py-6 gap-1 flex-1">
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium no-underline py-3.5 px-3 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-gold-light bg-white/5'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="px-6 pb-8">
              <a
                href={generalEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-gold text-navy font-bold text-sm px-5 py-4 rounded-lg no-underline hover:bg-gold-light transition-colors duration-200 w-full"
              >
                <FileText size={15} strokeWidth={2.5} />
                Get a Quote
              </a>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;