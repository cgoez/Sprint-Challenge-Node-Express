// Node Modules
const express = require("express");

// Router middleware
const router = express.Router();

const actionModel = require("../data/helpers/actionModel");

// GET
router.get("/", (req, res) => {
  actionModel
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error getting actions."
      });
    });
});
