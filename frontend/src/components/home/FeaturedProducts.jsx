import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Zap, Plug, Cable, ToggleLeft, Globe, Bolt } from 'lucide-react';
import { productEnquiryUrl } from '../../utils/whatsapp';
import products from '../../data/products';

const productIcons = {
  1: Zap,
  2: Plug,
  3: Cable,
  6: ToggleLeft,
  7: Globe,
  8: Bolt,
};

const featured = products.filter(p => p.featured);

const FeaturedProducts = () => {
  return (
    <section className="bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-15">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold text-xs font-bold uppercase tracking-[3px] mb-3">
              What We Supply
            </p>
            <h2 className="font-serif text-4xl font-bold text-navy leading-tight">
              Featured Product Categories
            </h2>
          </div>
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-2 bg-navy text-white font-semibold text-sm px-6 py-3 rounded hover:bg-navy-light transition-colors duration-200 no-underline whitespace-nowrap"
          >
            View Full Catalogue
            <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-5">
          {featured.map((product) => {
            const Icon = productIcons[product.id];
            return (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
              >
                {/* Icon panel */}
                <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                  {Icon && <Icon size={56} strokeWidth={1} className="text-navy/20" />}
                  {product.inStock && (
                    <span className="absolute top-3 right-3 bg-gold text-navy text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                      In Stock
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-navy mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <a
                    href={productEnquiryUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold no-underline hover:text-navy transition-colors duration-200"
                  >
                    <MessageCircle size={14} strokeWidth={2} />
                    Enquire via WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;