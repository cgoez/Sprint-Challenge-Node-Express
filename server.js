// Node Modules
const express = require("express");
const cors = require("cors");

// Import router middlewares
const actionsRouter = require("./routers/actionsRouter");
const projectsRouter = require("./routers/projectsRouter");

// Initialize express server
const server = express();

// Middleware
server.use(express.json());
server.use(cors());

// Route Handlers
server.use("/api/actions", actionsRouter);
server.use("/api/projects", projectsRouter);

// Server running
server.get("/", (req, res) => {
  res.send("API is running OK!");
});

// Server listening port 5000
server.listen(5000, () =>
  console.log("\n== Server is running on port 5000 ==\n")
);
