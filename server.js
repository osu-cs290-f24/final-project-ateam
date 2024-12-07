// Import modules
var path = require('path')
var fs = require('fs')
var express = require('express')

// Load post data into an array
const postList = JSON.parse(fs.readFileSync(path.join(__dirname, 'itemData.json')))

// Get web server and pick port
var app = express()
var port = process.env.PORT || 3000

// Register handlebars with server
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Load static files
app.use(express.static('static'))

// Load general posts page
app.get('/', function (req, res) {
    res.status(200).render("productPage", {
        products: [],
        receiptItems: []
    });
})

app.get('/home', function (req, res) {
    res.status(200).render("homePage");
})

// Send 404 page for invalid URL
app.get('*', function (req, res) {
    res.status(404).render("404Page")
})

// Have server listen on port and print message on success
app.listen(port, function () {
    console.log("== Server is listening on port", port)
})