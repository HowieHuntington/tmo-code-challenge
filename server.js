var express = require('express');
var app = express();

app.use(express.static(__dirname + '/index'));
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    res.render('index');
});



app.listen(3000, () => {
    console.log("Server running on port 3000");
});
