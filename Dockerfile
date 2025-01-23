# Utiliser une image Java comme base
FROM openjdk:17-jdk-slim

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier JAR généré par Spring Boot
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# Exposer le port utilisé par l'application Spring Boot
EXPOSE 8080

# Lancer l'application
ENTRYPOINT ["java", "-jar", "app.jar"]
