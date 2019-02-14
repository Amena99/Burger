var connection = require("./connection.js");


// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log("IN ORM" + result);
            cb(result);
        });
    },
    insertOne: function (tableInput, colInput, valOfInsert) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [tableInput, colInput, valOfInsert], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (tableInput, objColVals, condition) {
        var queryString = "UPDATE " + tableInput;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
    
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
};

module.exports = orm;