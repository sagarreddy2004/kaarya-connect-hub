export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

console.log('🔧 API Configuration:', {
  VITE_API_URL: import.meta.env.VITE_API_URL,
  API_URL: API_URL,
  mode: import.meta.env.MODE
});