interface ItemCarrito {
  precio: number;
  cantidad: number;
  descuento?: number;
}

export function calcularTotal(items: ItemCarrito[]): number {
  if (items.some((item) => !(item.precio >= 0))) {
    throw new Error('Precio inválido');
  }

  if (items.some((item) => !Number.isInteger(item.cantidad) || item.cantidad < 0)) {
    throw new Error('Cantidad inválida');
  }

  if (
    items.some(
      (item) => item.descuento !== undefined && !Number.isFinite(item.descuento),
    )
  ) {
    throw new Error('Descuento inválido');
  }

  const total = items.reduce(
    (acumulado, item) =>
      acumulado + item.precio * item.cantidad * (1 - (item.descuento ?? 0)),
    0,
  );
  const totalRedondeado = Math.round((total + Number.EPSILON) * 100) / 100;

  if (!Number.isFinite(totalRedondeado)) {
    throw new Error('Total inválido');
  }

  return totalRedondeado;
}
