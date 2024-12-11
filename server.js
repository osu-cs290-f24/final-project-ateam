// Import modules
var path = require('path')
var fs = require('fs')
var express = require('express')

// Load post data into an array
const productList = JSON.parse(fs.readFileSync(path.join(__dirname, 'itemData.json')))

// Get web server and pick port
var app = express()
var port = process.env.PORT || 3000

// Register handlebars with server
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Load static files
app.use(express.static('static'))
// Middleware to parse JSON request body
app.use(express.json())

// CREATE backup of itemData.json
var originalDataPath = path.join(__dirname, 'itemData.original.json')
if (fs.existsSync(originalDataPath)) {
    fs.copyFileSync(path.join(__dirname, 'itemdata.json'), originalDataPath)
}
// add route to index.js to restore itemData.js
app.post('/restore', (req, res) => {
    try {
        // Restore the backup
        fs.copyFileSync(originalDataPath, path.join(__dirname, 'itemData.json'))

        // Reload productList from the restored file
        const restoredData = JSON.parse(fs.readFileSync(path.join(__dirname, 'itemData.json')))
        Object.assign(productList, restoredData);

        // Send JSON response
        res.status(200).send({ message: "Stock restored successfully" })
    } catch (err) {
        console.error("Error restoring stock:", err)
        res.status(500).send({ message: "Failed to restore stock" })
    }})



//update product quantity
app.post('/update-stock', (req, res) => {
    var { productName, quantity } = req.body

    if (productList[productName]) {
        let currentAmount = parseInt(productList[productName].amount)

        if (currentAmount >= quantity) {
            // Decrement stock
            productList[productName].amount = (currentAmount - quantity).toString()

            // Write updated data to itemData.json
            fs.writeFileSync(
                path.join(__dirname, 'itemData.json'),
                JSON.stringify(productList, null, 2)
            )

            res.status(200).send({ message: "Stock updated successfully", product: productList[productName] })
        } else { res.status(400).send({ message: "Not enough stock available" })}
}})

// Load general posts page
app.get('/', function (req, res) {
    res.status(200).render("homePage")
})

app.get('/products', function (req, res) {
    res.status(200).render("productPage", {
        products: productList,
        receiptItems: []
    })
})

// Send 404 page for invalid URL
app.get('*', function (req, res) {
    res.status(404).render("404Page")
})

// Have server listen on port and print message on success
app.listen(port, function () {
    console.log("== Server is listening on port", port)
})