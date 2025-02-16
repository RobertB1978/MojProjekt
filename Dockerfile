# Wybór obrazu bazowego z Node.js
FROM node:18-alpine

# Ustawienie katalogu roboczego w kontenerze
WORKDIR /aplikacja

# Kopiowanie plików aplikacji do katalogu roboczego
COPY . .

# Instalacja zależności
RUN npm install

# Komenda startowa uruchamiająca aplikację
CMD ["npm", "start"]

# Eksponowanie portu 3000 dla aplikacji
EXPOSE 3000
