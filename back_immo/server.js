const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const url = 'mongodb://localhost:27017/Immo'


const createRoutes = require("./routes/annonces");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(url, {useNewUrlParser:true})
const con_to_db = mongoose.connection

createRoutes(app);

con_to_db.on('open', () => {
   console.log('                ')
   console.log('----------------')
   console.log('Connected to Db !')
   console.log('----------------')
})

app.listen(3000, () => {
  console.log('                ')
  console.log('----------------')
  console.log('Server started !')
  console.log('----------------')
});