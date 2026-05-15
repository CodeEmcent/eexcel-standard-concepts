import business from '../data/business';

/**
 * Generate a WhatsApp click-to-chat URL
 * @param {string} message - Pre-filled message text
 * @returns {string} WhatsApp URL
 */
export const whatsappUrl = (message = '') => {
  const number = business.phone.whatsapp.replace(/\D/g, '');
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
};

/**
 * Generate a product enquiry WhatsApp message
 * @param {string} productName - Name of the product
 * @returns {string} WhatsApp URL with pre-filled message
 */
export const productEnquiryUrl = (productName) => {
  const message = `Hello E. Excel Standard Concepts, I am interested in ${productName}. Please provide availability and pricing.`;
  return whatsappUrl(message);
};

/**
 * General enquiry WhatsApp URL
 */
export const generalEnquiryUrl = () => {
  const message = `Hello E. Excel Standard Concepts, I would like to make an enquiry about your products.`;
  return whatsappUrl(message);
};