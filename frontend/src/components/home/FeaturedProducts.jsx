import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Zap, Plug, Cable, ToggleLeft, Globe, Bolt, Loader } from 'lucide-react';
import { productEnquiryUrl } from '../../utils/whatsapp';
import { categoryImages } from '../../assets/images';
import useFetch from '../../hooks/useFetch';
import { API } from '../../utils/api';

const slugIconMap = {
  'earthing-materials':        Zap,
  'distribution-transformers': Plug,
  'armoured-cables':           Cable,
  'switches-sockets':          ToggleLeft,
  'overhead-silicon':          Globe,
  'aluminium-conductor':       Bolt,
};

const FeaturedProducts = () => {
  const { data: categories, loading, error } = useFetch(API.catalogue);

  // Show first 6 categories as featured
  const featured = categories ? categories.slice(0, 6) : [];

  return (
    <section className="bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-15">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
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

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <Loader size={28} strokeWidth={1.5} className="text-gold animate-spin" />
            <span className="ml-3 text-gray-400 text-sm">Loading products...</span>
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-400 text-sm py-16">
            Unable to load products. Please try again.
          </p>
        )}

        {/* Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((category) => {
              const Icon = slugIconMap[category.slug] || Zap;
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
                >
                  {/* Icon panel */}
                  <div className="h-48 overflow-hidden relative">
                    {(() => {
                      const img = categoryImages[category.slug];
                      return img ? (
                        <img
                          src={img}
                          alt={category.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <Icon size={56} strokeWidth={1} className="text-navy/20" />
                        </div>
                      );
                    })()}
                    <span className="absolute top-3 right-3 bg-gold text-navy text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                      In Stock
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-navy mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <a
                      href={productEnquiryUrl(category.name)}
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
        )}

      </div>
    </section>
  );
};

export default FeaturedProducts;