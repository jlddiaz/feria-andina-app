import type { Pedido } from './pedido.types';

export interface EstadoPedidoSlice {
  items: Pedido[];
  cargando: boolean;
  error: string | null;
}

export const estadoInicialPedido: EstadoPedidoSlice = {
  items: [],
  cargando: false,
  error: null,
};
