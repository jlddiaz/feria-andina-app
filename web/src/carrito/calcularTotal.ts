export interface ItemCarrito {
  precio: number;
  cantidad: number;
  descuento?: number;
}

function redondearADosDecimales(valor: number): number {
  return Math.round((valor + Number.EPSILON) * 100) / 100;
}

function calcularSubtotalItem(item: ItemCarrito): number {
  if (!Number.isInteger(item.cantidad) || item.cantidad < 0) {
    throw new Error('Cantidad inválida');
  }

  if (!Number.isFinite(item.precio) || item.precio < 0) {
    throw new Error('Precio inválido');
  }

  const descuento = item.descuento ?? 0;
  if (!Number.isFinite(descuento) || descuento < 0 || descuento > 1) {
    throw new Error('Descuento inválido');
  }

  const subtotal = item.precio * item.cantidad * (1 - descuento);
  return redondearADosDecimales(subtotal);
}

/**
 * Calcula el total del carrito aplicando los descuentos de cada ítem
 * y redondeando cada subtotal y el total a 2 decimales.
 */
export function calcularTotal(items: readonly ItemCarrito[]): number {
  let total = 0;

  for (const item of items) {
    total = redondearADosDecimales(total + calcularSubtotalItem(item));
  }

  return total;
}
