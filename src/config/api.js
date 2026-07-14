// Configuración centralizada de URLs de la API

// URLs base para los servicios backend
export const API_BASE_URLS = {
  VENTAS: import.meta.env.VITE_API_VENTAS_URL || 'http://localhost:8001',
  DESPACHOS: import.meta.env.VITE_API_DESPACHOS_URL || 'http://localhost:8002'
};

// Endpoints de la API
export const API_ENDPOINTS = {
  VENTAS: {
    BASE: `${API_BASE_URLS.VENTAS}/api/v1/ventas`,
    BY_ID: (id) => `${API_BASE_URLS.VENTAS}/api/v1/ventas/${id}`
  },
  DESPACHOS: {
    BASE: `${API_BASE_URLS.DESPACHOS}/api/v1/despachos`,
    BY_ID: (id) => `${API_BASE_URLS.DESPACHOS}/api/v1/despachos/${id}`
  }
};

// Headers por defecto para las peticiones
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
