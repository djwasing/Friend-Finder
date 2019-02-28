var friendsArray = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {
        console.log("from the front", req.body);
        friendsArray.push(req.body);
        console.log(friendsArray);
        res.json({hello: "hello from back end"});
    });
}

