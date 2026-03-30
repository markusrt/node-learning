# --- Stufe 1: Frontend bauen ---
FROM node:20-alpine AS frontend-build

WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# --- Stufe 2: Backend mit gebautem Frontend ---
FROM node:20-alpine

WORKDIR /app

# Nur Produktions-Abhängigkeiten installieren
COPY backend/package.json backend/package-lock.json ./
RUN npm ci --omit=dev

# Backend-Code kopieren
COPY backend/src/ ./src/

# Gebautes Frontend in den public-Ordner kopieren
COPY --from=frontend-build /app/frontend/dist ./public/

EXPOSE 3001

CMD ["node", "src/server.js"]
