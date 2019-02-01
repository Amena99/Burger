var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    },
    insertOne: function(tableInput, colInput, valOfInsert) {
    var queryString = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(queryString, [tableInput, colInput, valOfInsert], function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    },
    updateOne: function(tableInput, colInput, valOfCol, valId) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [tableInput, colInput, valOfCol, valId], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    }
};

module.exports = orm;