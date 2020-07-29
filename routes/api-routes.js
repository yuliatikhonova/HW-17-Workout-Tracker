const db = require("../models");


module.exports = function (app) {
    app.get("/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });


    app.put('/workouts/:id', (req, res) => {
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




    

};



