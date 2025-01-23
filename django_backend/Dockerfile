# Utiliser Python 3.12 comme image de base
FROM python:3.12

# Définir le répertoire de travail
WORKDIR /app

# Copier le contenu du projet dans l'image
COPY . /app

# Installer les dépendances
RUN pip install --no-cache-dir django djangorestframework

# Exposer le port par défaut de Django
EXPOSE 8000

# Démarrer le serveur Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
