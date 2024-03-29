var express = require("express");

var router = express.Router();

// Import the model (bucketlist.js) to use its database functions.
var bucketlist = require("../models/bucketlist.js");

router.get("/", function (req, res) {
    bucketlist.all(function (data) {
        var hbsObject = {
            bucketlist: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/wishlist", function (req, res) {
    bucketlist.create(["name", "description"], [req.body.name, req.body.desc], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result });
    });
});

router.put("/api/wishlist/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    bucketlist.update(
      {
        completed: req.body.completed
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });

  router.delete("/api/wishlist/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    bucketlist.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


// Export routes for server.js to use.
module.exports = router;