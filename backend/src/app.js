const express = require("express");
const controller = require("./notesController");

const app = express();
app.use(express.json());

app.get("/api/notes", controller.getAll);
app.post("/api/notes", controller.create);
app.put("/api/notes/:id", controller.update);
app.delete("/api/notes/:id", controller.remove);

module.exports = app;
