import {
  Zap, Plug, Cable, ToggleLeft, Globe,
  Bolt, CircuitBoard, Cpu, Lightbulb, Loader,
} from 'lucide-react';
import ProductCard  from '../components/catalogue/ProductCard';
import useFetch     from '../hooks/useFetch';
import { API }      from '../utils/api';

const slugIconMap = {
  'earthing-materials':      Zap,
  'distribution-transformers': Plug,
  'armoured-cables':         Cable,
  'feeder-pillar':           CircuitBoard,
  'single-cables':           Cpu,
  'switches-sockets':        ToggleLeft,
  'overhead-silicon':        Globe,
  'aluminium-conductor':     Bolt,
  'chandelier-lighting':     Lightbulb,
};

const Catalogue = () => {
  const { data: categories, loading, error } = useFetch(API.catalogue);

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-navy py-16 relative overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto px-15">
          <p className="text-gold text-xs font-bold uppercase tracking-[3px] mb-3">
            Full Range
          </p>
          <h1 className="font-serif text-5xl font-black text-white mb-4">
            Product Catalogue
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Browse all nine product categories. Click any card to enquire
            directly via WhatsApp — we respond fast.
          </p>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-15">

          {/* Loading state */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <Loader size={32} strokeWidth={1.5} className="text-gold animate-spin" />
              <span className="ml-3 text-gray-500 text-base">Loading catalogue...</span>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="text-center py-20">
              <p className="text-red-500 text-base mb-2">Unable to load catalogue.</p>
              <p className="text-gray-400 text-sm">{error}</p>
            </div>
          )}

          {/* Categories grid */}
          {categories && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((category) => {
                const Icon = slugIconMap[category.slug] || Zap;
                return (
                  <ProductCard
                    key={category.id}
                    product={{
                      id:          category.id,
                      slug:        category.slug,
                      name:        category.name,
                      description: category.description,
                      inStock:     true,
                    }}
                    icon={slugIconMap[category.slug] || Zap}
                  />
                );
              })}
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default Catalogue;