export type EstadoPedido = 'pendiente' | 'confirmado' | 'enviado' | 'entregado' | 'cancelado';

export interface ItemPedido {
  productoId: string;
  cantidad: number;
  precioUnitario: number;
}

export interface Pedido {
  id: string;
  items: ItemPedido[];
  total: number;
  estado: EstadoPedido;
  creadoEn: string;
}
