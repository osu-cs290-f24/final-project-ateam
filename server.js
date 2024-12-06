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
        post: itemdata
    })
})


app.get('*', function (req, res) {
    res.status(404).render("404")

    
})
