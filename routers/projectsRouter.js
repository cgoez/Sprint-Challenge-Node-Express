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
          error: "There was an error posting the project."
        });
      });
  } else {
    res.status(400).json({
      error: "Please provide a project name AND description."
    });
  }
});

// PUT ; update
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body;

  db
    .update(id, update)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error updating the project."
      });
    });
});

// DELETE ; remove
router.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    db
      .get(id)
      .then(response => {
        project = { ...response };
  
        db
          .remove(id)
          .then(response => {
            res.status(200).json(project);
          })
          .catch(error => {
            res.status(404).json({
              error: "The project with the specified id could not be found."
            });
          });
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error deleting the project."
        });
      });
  });

module.exports = router;
