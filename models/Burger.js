var orm = require("../config/orm.js");

var burger = {
    select: function(cb) {
        orm.select("burgers", function(res) {
            cb(res);
        });
    },

    insert: function(vals, cb) {
        orm.insert("burgers", "burger_name", vals, function(res) {
            cb(res);
        });
    },
    update: function(id, cb) {
        orm.update("burgers", "devoured", 1, "id", id, function(res) {
            cb(res);
        });
    },
    deleteOne: function(id, cb) {
        orm.deleteOne("burgers", "id", id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;