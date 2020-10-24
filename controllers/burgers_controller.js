const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.select(function(data) {
        var object = {
            order: data
        };
        res.render("index", object);
    });
});

router.post("/api/order", (req, res) => {
    burger.create(["burger_name"], [req.body.name], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/order/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.update({
            devoured: req.body.devoured,
        }, condition,
        function(result) {
            if (result.changedRows == 0) {
                return res.status(4040).end();
            } else {
                res.status(200).end();
            }
        }
    );
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