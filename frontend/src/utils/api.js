const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export const API = {
  catalogue:  `${BASE_URL}/catalogue/`,
  enquiries:  `${BASE_URL}/enquiries/`,
  featured:   `${BASE_URL}/catalogue/featured/`,
};