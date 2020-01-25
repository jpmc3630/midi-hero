var db = require("../models");

module.exports = function(app) {
  
  // Load index page
  app.get("/", function(req, res) {
      res.render("index", {
        asd: "test"
      });
    });


  // Load individual level by level name
  app.get("/level/:levelName", function(req, res) {
    res.render("drums", {
      levelName: req.params.levelName
    });
  });

  // Load levels selector page
  app.get("/levels", function(req, res) {
    res.render("levels", {
    });
    
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
