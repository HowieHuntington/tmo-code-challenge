var express = require('express');
var app = express();

app.use(express.static(__dirname + '/index'));
app.get("/url", (req, res, next) => {
    res.json(["Hello", "World"]);
});



app.listen(3000, () => {
    console.log("Server running on port 3000");
});
