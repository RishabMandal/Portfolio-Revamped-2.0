const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "../../.env" });

// const DBURL = `mongodb://${process.env.DB_URL}`;
// console.log(process.env.DB_URL);
mongoose
  .connect(`mongodb://${process.env.DB_URL}`)
  //   .connect(`mongodb://localhost:27017/nextportfolio`)
  .then(console.log("Connected to db"))
  .catch((error) => console.error(error));

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

//Schema
let contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

//Model
let Contact = mongoose.model("contacts", contactSchema);

let db = mongoose.connection;

app.get("/components/contact", (req, res) => {
  async function viewMessages() {
    view = await db.collection("contacts").find().toArray();
    res.json(view);
  }
  viewMessages();
});

app.post("/components/contact", (req, res) => {
  console.log(req.body);
  let myData = new Contact(req.body);
  myData
    .save({ maxTimeMS: 15000 })
    .then(() => {
      console.log("done");
      res.send("This data has been saved to the database");
    })
    .catch((error) => {
      console.log("not done ", error);
      res.status(400).send("Item was not saved to the database");
    });
});

app.listen(port, () => console.log("Server started on port " + port));
