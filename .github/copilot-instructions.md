# Feria Andina · Instrucciones para GitHub Copilot

Proyecto de aplicación web para Feria Andina organizado en dos proyectos independientes (`/web` y `/api`), siguiendo las directrices definidas en `AGENTS.md`.

## Contexto y stack tecnológico

- **Frontend (`/web`):** React + TypeScript + Redux Toolkit.
- **Backend (`/api`):** Node.js + Express + PostgreSQL + TypeScript.
- **Dominio:** Entidades y módulos nombrados en español: `producto`, `pedido`, `cooperativa`.

## Estructura del repositorio

- `/web`: `src/app/`, `src/features/{producto,pedido,cooperativa}/`, `src/components/`, `src/pages/`, `src/services/`, `tests/`.
- `/api`: `src/config/`, `src/modules/{producto,pedido,cooperativa}/`, `src/middlewares/`, `src/db/migrations/`, `tests/`.

## Comandos

Ejecutar en cada proyecto (`/web` o `/api`) cuando tenga su `package.json` configurado:

- Instalar dependencias: `npm install`
- Ejecutar tests: `npm test`
- Revisar estilo: `npm run lint`

## Convenciones de código

- **TypeScript estricto:** no usar `any` en ningún archivo; tipar explícitamente entradas, salidas, estado y respuestas.
- **Idioma del dominio:** utilizar nombres en español para entidades, tipos, rutas y módulos (`producto`, `pedido`, `cooperativa`).
- **Consistencia:** respetar las capas existentes en `/web` (`app`, `features`) y en `/api` (`types`, `controller`, `service`, `routes`).

## Convenciones de commits

Si se solicita redactar o sugerir un mensaje de commit, usar Conventional Commits con formato obligatorio `<tipo>(<alcance>): <descripción>`:

- **Tipos permitidos:** `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `style`.
- Escribir el mensaje completo en español y en minúsculas (tipo, alcance y descripción).
- Redactar la descripción en modo imperativo y sin punto final.
- Mantener mensajes breves, específicos y enfocados en el cambio realizado (no en la intención).
- Usar un alcance que identifique el módulo o funcionalidad afectada.
- No mezclar cambios independientes en un mismo commit.

## Restricciones obligatorias

- No agregar ni sugerir dependencias nuevas sin avisar previamente al usuario.
- No leer, crear ni modificar archivos `.env`.
- No cambiar la estructura de carpetas establecida.
- No generar commits automáticamente sin autorización del usuario.
