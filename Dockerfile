FROM node:18-alpine

# Ustawienie katalogu roboczego
WORKDIR /aplikacja

# Kopiowanie plików
COPY . .

# Instalacja zależności
RUN npm install

# Uruchamianie aplikacji
CMD ["npm", "start"]

# Otworzenie portu 3000
EXPOSE 3000
