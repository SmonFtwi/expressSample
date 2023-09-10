const express = require('express');
const app = express();
const path= require('path')
const bodyParser = require('body-parser');

app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

const userRouter = require("./routes/routers")


app.use(bodyParser.urlencoded({ extended: true})); 

app.use("/", userRouter)



app.listen(PORT, () => console.log(`server running on port ${PORT}`))