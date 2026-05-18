function validateNote(title, content) {
  const errors = [];

  if (!title || title.trim() === "") {
    errors.push("Title is required.");
  }

  if (!content || content.trim().length < 10) {
    errors.push("Content must be at least 10 characters long.");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

function generatePreview(content) {
  const words = content.trim().split(/\s+/);

  if (words.length <= 7) {
    return content;
  }

  return words.slice(0, 7).join(" ") + "...";
}

module.exports = {
  validateNote,
  generatePreview
};