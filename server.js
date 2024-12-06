var express = require('express')
var expresshandle = require('express-handlebars')

var itemdata=require("./itemData.json")

var app = express()
var port = process.env.PORT || 3000

app.engine("handlebars", expresshandle.engine())

app.set("view engine","handlebars")

app.use(express.static('static'))


app.get("/", function (req,res) {
    console.log("-- home page requested ")
    
  
    res.render("home")




})

app.get("/main",function(req,res){
    res.render("main",{
        
        product: itemdata
    })
})

app.get('/products/:product', function(req, res, next){
    var product=req.params.product
    var productdata=productdata[product]
    if (avalableproducts) {
        res.render("photoPage",{
            name: productdata.name,
            price:productdata.price,
            image:productdata.image,
            mouseImage:productdata.mouseimage, 
            amount:productdata.amount,
            itemType:productdata.itemType,
        })
    } else {
        next()
    }
})


app.get('*', function (req, res) {
    res.status(404).render("404")

    
})
