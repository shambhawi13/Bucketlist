var orm = require("../config/orm.js");

var bucketlist = {
    all: function(cb) {
      orm.selectAll("bucketlist", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.insertOne("bucketlist", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.updateOne("bucketlist", objColVals, condition, function(res) {
        cb(res);
      });
    },
    // delete: function(condition, cb) {
    //   orm.delete("bucketlist", condition, function(res) {
    //     cb(res);
    //   });
    // }
  };
  
  // Export the database functions for the controller 
  module.exports = bucketlist;