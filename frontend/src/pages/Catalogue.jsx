import {
  Zap, Plug, Cable, ToggleLeft, Globe,
  Bolt, CircuitBoard, Cpu, Lightbulb,
} from 'lucide-react';
import ProductCard from '../components/catalogue/ProductCard';
import products from '../data/products';

const productIcons = {
  1: Zap,
  2: Plug,
  3: Cable,
  4: CircuitBoard,
  5: Cpu,
  6: ToggleLeft,
  7: Globe,
  8: Bolt,
  9: Lightbulb,
};

const Catalogue = () => {
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
          <div className="grid grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                icon={productIcons[product.id]}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalogue;