import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose
  .connect(`mongodb://${process.env.DB_URL}`)
  .then(console.log("Connected to db"))
  .catch((error: any) => console.error(error));

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

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  switch (method) {
    case "GET":
      axios.get("/components/contact", (res: any) => {
        async function viewMessages() {
          const view = await db.collection("contacts").find().toArray();
          res.json(view);
        }
        viewMessages();
      });
      break;
    case "POST":
      axios.post("/components/contact", (req: any, res: any) => {
        // console.log(req.body);
        let myData = new Contact(req.body);
        myData
          .save({ maxTimeMS: 15000 })
          .then(() => {
            console.log("done");
            res.send("This data has been saved to the database");
          })
          .catch((error: any) => {
            console.log("not done ", error);
            res.status(400).send("Item was not saved to the database");
          });
      });
      break;
    default:
      break;
  }
}
