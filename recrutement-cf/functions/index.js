const functions = require("firebase-functions");
const express = require("express");
const { addWine } = require("./wineController");

const app = express();
app.get("/", (req, res) => res.status(200).send("Hey there!"));
exports.app = functions.https.onRequest(app);

app.post("/add-wine", addWine);

exports.app = functions.https.onRequest(app);
