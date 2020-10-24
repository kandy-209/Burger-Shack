const connection = require("../config/connection.js");

const orm = {
    select: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insert: function(tableInput, col, val, cb) {
        var queryString = "INSERT INTO ?? SET ?? = ?";
        connection.query(queryString, [tableInput, col, val], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    update: function(tableInput, col1, val1, col2, val2, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, col1, val1, col2, val2], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    delete: function(tableInput, cols, vals, cb) {
        var queryString = "DELETE FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, cols, vals], function(err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;