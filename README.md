# REST-API

Creating a Simple REST Application with Node.js
Introduction
This document provides step-by-step instructions for creating a simple REST application using Node.js. The application will have two endpoints: /login and /secret. Additionally, it will be instrumented with Prometheus metrics and Dockerized for easy deployment.

Prerequisites
Node.js installed on your system
Docker installed on your system

Running the Application with Docker
Prerequisites
Docker installed on your system
Steps
Clone the Repository

Clone this repository to your local machine:

```
git clone <repository-url>
```

Replace <repository-url> with the actual URL of your repository.

Navigate to the Application Directory

Change your current directory to the application's root folder:

```
cd <repository-folder>
```

Replace <repository-folder> with the name of the folder created when you cloned the repository.

Build the Docker Container

Build a Docker container for the application using the provided Dockerfile. Run this command from the project directory:

```
docker build -t your-app-name .
```

Replace your-app-name with a suitable name for your Docker container.

Run the Docker Container

Start the Docker container, exposing it on port 3000, and setting the APP_SECRET environment variable:

```
docker run -p 3000:3000 -e APP_SECRET=YourSecretValue your-app-name
```

Replace YourSecretValue with the desired secret value.

Access the Application

The Node.js application is now running in a Docker container. You can access it by opening a web browser and navigating to http://localhost:3000/login.

Access Prometheus Metrics

You can access Prometheus metrics at http://localhost:3000/metrics.

Running the Application Without Docker
Prerequisites
Node.js installed on your system
Steps
Clone the Repository

Clone this repository to your local machine:

```
git clone <repository-url>
```

Replace <repository-url> with the actual URL of your repository.

Navigate to the Application Directory

Change your current directory to the application's root folder:

```
cd <repository-folder>
```

Replace <repository-folder> with the name of the folder created when you cloned the repository.

Install Dependencies

Install the required Node.js dependencies:

```
npm install
```

Set Environment Variable

Set the APP_SECRET environment variable to the desired secret value. Replace YourSecretValue with your secret:

```
export APP_SECRET=YourSecretValue
```

Run the Application

Start the Node.js application:

```
node app.js
```

Access the Application

You can access the application by opening a web browser and navigating to http://localhost:3000/login.

Access Prometheus Metrics

You can access Prometheus metrics at http://localhost:3000/metrics.
