# Pobranie obrazu Node.js
FROM node:18

# Ustawienie katalogu roboczego w kontenerze
WORKDIR /app

# Kopiowanie plików package.json i package-lock.json
COPY package*.json ./

# Instalacja zależności
RUN npm install

# Kopiowanie pozostałych plików aplikacji do kontenera
COPY . .

# Budowanie aplikacji Next.js
RUN npm run build

# Uruchomienie aplikacji w trybie produkcyjnym
CMD ["npm", "run", "start"]
