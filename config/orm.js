var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString,[tableInput], function(err, result) {
          if (err) throw err;
          console.log("IN ORM" + result);
          cb(result);
        });
    },
    insertOne: function(tableInput, colInput, valOfInsert) {
    var queryString = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(queryString, [tableInput, colInput, valOfInsert], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
    });
    },
    updateOne: function(tableInput, colInput, valOfCol, valId) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [tableInput, colInput, valOfCol, valId], function(err, result) {
          if (err) throw err;
          console.log(result);
          cb(result);
        });
    }
};

module.exports = orm;