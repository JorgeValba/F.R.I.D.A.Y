# F.R.I.D.A.Y

Dashboard interactivo de Recursos Humanos y Ley Federal del Trabajo (México).

**Elaborado por: Jorge Valencia.**

## Abrir el dashboard

Descarga o clona el repositorio y abre `dist/index.html` en tu navegador. No requiere instalación. [Abrir versión alojada con acceso privado](https://rh-lft-jorge-valencia-20261027.escuelajorge29.chatgpt.site).

## Incluye

- 180 personas ficticias con generación reproducible.
- Filtros por área, sede y turno; gráficas, detalle por persona y exportación CSV.
- Cinco reglas básicas: vacaciones, prima vacacional, aguinaldo y jornada diaria/semanal.
- Enlace y panel de Miro; componente de conversación ElevenLabs.
- Datos sintéticos completos en CSV, metodología y comprobaciones.

## Verificación

Con Node.js, ejecuta `node check.cjs` desde la raíz. Comprueba generación, unicidad, vacaciones por tramo, brechas, filtros, estado vacío y restablecimiento. El script regenera el CSV.

## Alcance

Corte: 27/10/2026. Simulación educativa: no constituye un dictamen legal. Miro puede requerir enlace de inserción y sesión; ElevenLabs requiere internet y autorización del agente para el dominio. No se envían automáticamente los datos al agente. Consulta `LEEME.md` y los criterios, fórmulas y fuentes dentro del HTML.
