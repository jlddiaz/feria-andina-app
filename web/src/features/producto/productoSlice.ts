import type { Producto } from './producto.types';

export interface EstadoProducto {
  items: Producto[];
  cargando: boolean;
  error: string | null;
}

export const estadoInicialProducto: EstadoProducto = {
  items: [],
  cargando: false,
  error: null,
};
