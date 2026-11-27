import type { Cooperativa } from './cooperativa.types';

export interface EstadoCooperativa {
  items: Cooperativa[];
  cargando: boolean;
  error: string | null;
}

export const estadoInicialCooperativa: EstadoCooperativa = {
  items: [],
  cargando: false,
  error: null,
};
