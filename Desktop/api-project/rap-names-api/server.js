// const http = require("http")
// const fs = require("fs")
const express = require("express")
const app = express()
// const coors = require("coors")
const PORT = 8000
// app.use(coors())
const rappers = {
    jordan: {
        age: 29,
        location: "OKC,OK",
        profession: "dancer, developer"
    },
    taylor: {
        age: 33,
        location: "Odessa,TX",
        profession: "sales"
    },
    charlie: {
        age: 73,
        location: "Odessa,TX",
        profession: "retired"
    },
    bert: {
        age: 72,
        location: "Odessa, TX",
        profession: "manger"
    }
}
app.listen(process.env.PORT || PORT, (req,res) => {
    console.log("working")
})

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
    console.log("bing")
})

app.get("/api/:name", (req,res)=> {
    const name = req.params.name.toLowerCase();
    res.send(JSON.stringify(rappers[name]))
})

//testing for Launch
