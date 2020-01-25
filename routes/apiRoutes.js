var db = require("../models");

module.exports = function(app) {
  // Get all highscores for level by levelID
  app.get("/api/highscores/:levelid", function(req, res) {
    db.Highscores.findAll({ where: {
      levelid: req.params.levelid
      },
      order: [
        ['score', 'DESC']
      ] }).then(function(result) {
      res.json(result);
    });
  });

  // Create a new highscore entry
  app.post("/api/highscores", function(req, res) {
    db.Highscores.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  // Delete a highscore by id
  app.delete("/api/highscores/:id", function(req, res) {
    db.Highscores.destroy({ where: { id: req.params.id } }).then(function(result) {
      res.json(result);
    });
  });
};


