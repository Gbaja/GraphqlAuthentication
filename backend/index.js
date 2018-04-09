const app = require('express')()

app.get("/", (req, res)=>{
    res.send("server running")
})

module.exports = app;