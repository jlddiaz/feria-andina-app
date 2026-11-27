import { describe, expect, it } from 'vitest';
import { calcularTotal } from '../src/carrito/calcularTotal';

describe('calcularTotal', () => {
  it('devuelve cero para un carrito vacío', () => {
    expect(calcularTotal([])).toBe(0);
  });

  it('aplica el descuento y redondea el total a dos decimales', () => {
    expect(calcularTotal([{ precio: 19.99, cantidad: 2, descuento: 0.1 }])).toBe(
      35.98,
    );
  });

  it('lanza un error si alguna cantidad es negativa', () => {
    expect(() => calcularTotal([{ precio: 10, cantidad: -1 }])).toThrowError(
      new Error('Cantidad inválida'),
    );
  });

  it('lanza un error si el precio es negativo', () => {
    expect(() => calcularTotal([{ precio: -1, cantidad: 1 }])).toThrowError(
      new Error('Precio inválido'),
    );
  });

  it('lanza un error si la cantidad no es un entero', () => {
    expect(() => calcularTotal([{ precio: 10, cantidad: 1.5 }])).toThrowError(
      new Error('Cantidad inválida'),
    );
  });

  it.each([Number.NaN, Number.POSITIVE_INFINITY])(
    'lanza un error si el descuento no es finito (%s)',
    (descuento) => {
      expect(() =>
        calcularTotal([{ precio: 10, cantidad: 1, descuento }]),
      ).toThrowError(new Error('Descuento inválido'));
    },
  );

  it('lanza un error si el total no es finito', () => {
    expect(() =>
      calcularTotal([{ precio: Number.MAX_VALUE, cantidad: 2 }]),
    ).toThrowError(new Error('Total inválido'));
  });
});
