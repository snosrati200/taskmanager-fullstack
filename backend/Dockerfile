# --------- Build Stage ---------
FROM maven:3.9-eclipse-temurin-25 AS build
WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn -e -DskipTests clean package && \
    cp target/*.jar app.jar

# --------- Runtime Stage ---------
FROM eclipse-temurin:25-jdk-jammy
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
