var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(colInput, valOfInsert, cb){
        orm.insertOne("burgers", colInput, valOfInsert, function(res){
            console.log(valOfInsert);
            cb(res);
        });
    },
    updateOne: function(objColVals, condition,cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },
    deleteOne: function(condition, cb){
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        });
    },
}

module.exports = burger;