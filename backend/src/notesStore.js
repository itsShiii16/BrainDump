let notes = [];
let nextId = 1;

function getAll() {
  return notes;
}

function getById(id) {
  throw new Error("Not implemented");
}

function create(title, content) {
  const note = { id: nextId++, title, content };
  notes.push(note);
  return note;
}

function update(id, title, content) {
  throw new Error("Not implemented");
}

function remove(id) {
  throw new Error("Not implemented");
}

module.exports = { getAll, getById, create, update, remove };
