// Node Modules
const express = require("express");

// Router middleware
const router = express.Router();

const db = require("../data/helpers/actionModel");

// GET
// test ok
router.get("/", (req, res) => {
  db
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

// GET :id
// test ok
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db
    .get(id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error getting the specified action."
      });
    });
});

// POST ; insert()
// test ok
router.post("/", (req, res) => {
  const action = req.body;

  if (action.project_id && action.description && action.notes) {
    db
      .insert(action)
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

// PUT ; update()
// test ok
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
        error: "There was an error updating the action."
      });
    });
});

// DELETE ; remove()
// test ok
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db
    .get(id)
    .then(response => {
      action = { ...response }; // [0]?

      db
        .remove(id)
        .then(response => {
          res.status(200).json(action);
        })
        .catch(error => {
          res.status(404).json({
            error: "The action with the specified id could not be found."
          });
        });
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error deleting the action."
      });
    });
});

module.exports = router;
