const express = require("express");
const promClient = require("prom-client");

const app = express();
const PORT = process.env.PORT || 3000;
const APP_SECRET = process.env.APP_SECRET || "YourDefaultSecretValue";

// Create a Prometheus registry and register default metrics
const promRegistry = new promClient.Registry();
promClient.collectDefaultMetrics({ register: promRegistry });

// Define a simple GET /login endpoint that always returns 200
app.get("/login", (req, res) => {
  res.status(200).send("Login Successful");
});

// Define a GET /secret endpoint that returns the secret from the environment variable
app.get("/secret", (req, res) => {
  res.json({ secret: APP_SECRET });
});

// Define a /metrics endpoint for Prometheus metrics
app.get("/metrics", async (req, res) => {
  try {
    res.set("Content-Type", promRegistry.contentType);
    const metrics = await promRegistry.metrics();
    res.end(metrics);
  } catch (error) {
    console.error("Error while generating metrics:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
