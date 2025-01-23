# Utiliser une image Node.js comme base
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port utilisé par le serveur de développement Vue.js
EXPOSE 3000

# Lancer le serveur de développement Vue.js
CMD ["npm", "run", "dev"]
