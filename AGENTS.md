# Feria Andina · instrucciones para agentes de IA

## Stack

- Front: React + TypeScript + Redux Toolkit (carpeta /web)
- Back: Node + Express + PostgreSQL (carpeta /api)

## Comandos

- Instalar dependencias: npm install
- Correr tests: npm test
- Revisar estilo: npm run lint

## Convenciones

- TypeScript estricto: no usar `any`.
- Nombres del dominio en español: producto, pedido, cooperativa.
- Commits con Conventional Commits en formato obligatorio `<tipo>(<alcance>): <descripción>` (tipos: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `style`).

## Reglas de escritura de Commits

- Escribir los mensajes en español.
- Utilizar minúsculas en el tipo, alcance y descripción.
- Redactar la descripción en modo imperativo.
- No finalizar la descripción con punto.
- Mantener mensajes breves y específicos.
- Describir el cambio realizado, no la intención.
- No mezclar cambios independientes en un mismo commit.
- Utilizar un alcance que identifique el módulo o funcionalidad afectada.

## No hacer

- No agregar dependencias nuevas sin avisar.
- No leer ni modificar archivos .env.
- No cambiar la estructura de carpetas.
- No generar commits automáticamente sin autorización del usuario.
