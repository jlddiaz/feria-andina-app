import { describe, expect, it } from 'vitest';
import { calcularTotal } from '../src/carrito/calcularTotal';

describe('calcularTotal', () => {
  it('devuelve 0 cuando el carrito está vacío', () => {
    expect(calcularTotal([])).toBe(0);
  });

  it('calcula el total de un producto con descuento redondeado a 2 decimales', () => {
    expect(calcularTotal([{ precio: 100, cantidad: 2, descuento: 0.15 }])).toBe(170);
    expect(calcularTotal([{ precio: 19.99, cantidad: 1, descuento: 0.1 }])).toBe(17.99);
    expect(calcularTotal([{ precio: 50, cantidad: 0, descuento: 0.2 }])).toBe(0);
    expect(calcularTotal([{ precio: 50, cantidad: 2, descuento: 1 }])).toBe(0);
  });

  it('lanza un error cuando algún ítem tiene cantidad negativa o no entera', () => {
    expect(() =>
      calcularTotal([{ precio: 50, cantidad: -1 }]),
    ).toThrowError(new Error('Cantidad inválida'));

    expect(() =>
      calcularTotal([{ precio: 50, cantidad: 1.5 }]),
    ).toThrowError(new Error('Cantidad inválida'));

    expect(() =>
      calcularTotal([{ precio: 50, cantidad: Number.NaN }]),
    ).toThrowError(new Error('Cantidad inválida'));

    expect(() =>
      calcularTotal([{ precio: 50, cantidad: Number.POSITIVE_INFINITY }]),
    ).toThrowError(new Error('Cantidad inválida'));
  });

  it('lanza un error cuando el precio es negativo o no finito', () => {
    expect(() =>
      calcularTotal([{ precio: -10, cantidad: 1 }]),
    ).toThrowError(new Error('Precio inválido'));

    expect(() =>
      calcularTotal([{ precio: Number.POSITIVE_INFINITY, cantidad: 1 }]),
    ).toThrowError(new Error('Precio inválido'));

    expect(() =>
      calcularTotal([{ precio: Number.NaN, cantidad: 1 }]),
    ).toThrowError(new Error('Precio inválido'));

    expect(calcularTotal([{ precio: 0, cantidad: 2 }])).toBe(0);
  });

  it('lanza un error cuando el descuento no es finito o está fuera de rango', () => {
    expect(() =>
      calcularTotal([{ precio: 50, cantidad: 1, descuento: Number.NaN }]),
    ).toThrowError(new Error('Descuento inválido'));

    expect(() =>
      calcularTotal([{ precio: 50, cantidad: 1, descuento: Number.POSITIVE_INFINITY }]),
    ).toThrowError(new Error('Descuento inválido'));

    expect(() =>
      calcularTotal([{ precio: 50, cantidad: 1, descuento: Number.NEGATIVE_INFINITY }]),
    ).toThrowError(new Error('Descuento inválido'));

    expect(() =>
      calcularTotal([{ precio: 50, cantidad: 1, descuento: -0.1 }]),
    ).toThrowError(new Error('Descuento inválido'));

    expect(() =>
      calcularTotal([{ precio: 50, cantidad: 1, descuento: 1.2 }]),
    ).toThrowError(new Error('Descuento inválido'));
  });

  it('redondea cada subtotal y el total acumulado a 2 decimales', () => {
    expect(
      calcularTotal([
        { precio: 10.005, cantidad: 1 },
        { precio: 10.005, cantidad: 1 },
      ]),
    ).toBe(20.02);

    expect(
      calcularTotal([
        { precio: 0.1, cantidad: 1 },
        { precio: 0.2, cantidad: 1 },
      ]),
    ).toBe(0.3);
  });
});
