// Node Modules
const express = require("express");

// Router middleware
const router = express.Router();

const db = require("../data/helpers/projectModel");

// GET
router.get("/", (req, res) => {
  db
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error getting projects."
      });
    });
});
