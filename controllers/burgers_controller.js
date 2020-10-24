const express = require("express");
var router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.select(function(data) {
        var object = {
            order: data
        };
        res.render("index", object);
    });
});

router.post("/api/burger", function(req, res) {
    name = req.body.name;
    burger.insert(name, function(result) {
        console.log(result);
    });
    res.render("index");
});

router.put("/api/burgers/:id", function(req, res) {
    // var condition = "id = " + req.params.id;
    var id = req.params.id;

    burger.update(id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/order/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//  export routes for server use
module.exports = router;