const store = require("./notesStore");
const { validateNote } = require("./noteUtils");

function getAll(req, res) {
  res.json(store.getAll());
}

function getById(req, res) {
  throw new Error("Not implemented");
}

function create(req, res) {
  const { title, content } = req.body;

  const validation = validateNote(title, content);
  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  const note = store.create(title, content);
  res.status(201).json(note);
}

function update(req, res) {
  throw new Error("Not implemented");
}

function remove(req, res) {
  throw new Error("Not implemented");
}

module.exports = { getAll, getById, create, update, remove };
