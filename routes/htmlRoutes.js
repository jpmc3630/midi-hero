var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        asd: "James"
        // examples: dbExamples
      });
    });
  // });

  // Load example page and pass in an example by id
  app.get("/level/:levelName", function(req, res) {
    res.render("drums", {
      levelName: req.params.levelName
    });
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    //   res.render("example", {
    //     example: dbExample
    //   });
    // });
  });

  // Load example page and pass in an example by id
  app.get("/levels", function(req, res) {
    res.render("levels", {
    });
    
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
