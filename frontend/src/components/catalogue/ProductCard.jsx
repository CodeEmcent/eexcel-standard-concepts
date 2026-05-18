import { MessageCircle } from 'lucide-react';
import { productEnquiryUrl } from '../../utils/whatsapp';
import { categoryImages } from '../../assets/images/index.js';

const ProductCard = ({ product, icon: Icon }) => {
  const image = categoryImages[product.slug] || null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-200">

      {/* Image Panel */}
      <div className="h-48 overflow-hidden relative">
        {image ? (
          <img
            src={image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            {Icon && <Icon size={60} strokeWidth={1} className="text-navy/20" />}
          </div>
        )}
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
};

export default ProductCard;