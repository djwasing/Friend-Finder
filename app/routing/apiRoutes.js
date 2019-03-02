var friendsArray = require("../data/friends");
//console.log("this is friends array from back: " + friendsArray);

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {
        var lowestIndex = 0;
        let lowestDiff = 41;
        
        for (let i = 0; i < friendsArray.length; i++) {
            //console.log("friendsArr[i]: " + friendsArray[i]);
            let diffArr = [];

            for (let j = 0; j < 10; j++) {
                //finds the difference between the user's scores and the friend's scores.
                let diff = Math.abs((parseInt(req.body.scores[j])) - (friendsArray[i].scores[j])); 
                diffArr.push(diff);
                if (j === 9) {
                    //adds the values in each arr together to get currentDiff 
                    let currentDiff = diffArr.reduce((acc, val) => acc + val); 
                    //console.log("current diff: " + currentDiff);
                    if (currentDiff < lowestDiff) {
                        lowestDiff = currentDiff;
                        lowestIndex = i;
                    };
                    
                    console.log("lowest difference: " + lowestDiff)
                };  
                
            };
            if (i === (friendsArray.length-1)) {
                console.log("lowest Index: " + lowestIndex);
                console.log("lowestName: " + friendsArray[lowestIndex].name);
                res.json(friendsArray[lowestIndex]);
            }; 
            //console.log("diffArr: " + diffArr);
            
        };
        friendsArray.push(req.body);
        
            //console.log("total difference: " + totalDiff);
    });
        
}

