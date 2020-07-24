var express = require("express");

var router = express.Router();

// Import the model (bucketlist.js) to use its database functions.
var bucketlist = require("../models/bucketlist.js");

router.get("/", function(req, res) {
    bucketlist.all(function(data) {
      var hbsObject = {
        bucketlist: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });


// Export routes for server.js to use.
module.exports = router;