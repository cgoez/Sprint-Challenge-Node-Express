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

// GET :id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db
    .get(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error getting the specified project."
      });
    });
});

// GET :id/actions ; getProjectActions()
router.get("/:id/actions", (req, res) => {
  const { id } = req.params;

  db
    .getProjectActions(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error getting the specified project's actions."
      });
    });
});

// POST ; insert()
router.post("/", (req, res) => {
    const project = req.body;
  
    if (project.name && project.description) {
      db
        .insert(project)
        .then(response => {
          res.status(201).json(response);
        })
        .catch(error => {
          res.status(500).json({
            error: "There was an error posting the action."
          });
        });
    } else {
      res.status(400).json({
        error: "Please provide a project id, description, AND notes."
      });
    }
  });

  module.exports = router;
