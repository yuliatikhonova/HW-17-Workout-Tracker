const router = require('express').Router();

const db = require("../models");


router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


router.put('/workouts/:id', (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, {
    $push: {
      exercises: req.body
    }
  }).then(dbWorkout => {
    res.json(dbWorkout);
  })
    .catch((err) => {
      res.json(err);
    });
});


router.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;



