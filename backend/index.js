const app = require('express')();
const helmet = require('helmet');

app.use(helmet())
app.get("/", (req, res)=>{
    res.send("server running")
})

module.exports = app;