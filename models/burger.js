var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cb){
        orm.insertOne("burgers", colInput, valOfInsert, function(res){
            cb(res);
        });
    },
    updateOne: function(cb){
        orm.updateOne("burgers", colInput, valOfCol, valId, function(res){
            cb(res);
        });
    },
    deleteOne: function(cb){
        orm.deleteOne("burgers", colInput, valOfCol, valId, function(res){
            cb(res);
        });
    },
}

module.exports = burger;