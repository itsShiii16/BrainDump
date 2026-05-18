const MIN_CONTENT_LENGTH = 10;
const PREVIEW_WORD_LIMIT = 7;

function isBlank(value) {
  return !value || value.trim() === "";
}

function validateNote(title, content) {
  const errors = [];

  if (isBlank(title)) {
    errors.push("Title is required.");
  }

  if (isBlank(content) || content.trim().length < MIN_CONTENT_LENGTH) {
    errors.push(`Content must be at least ${MIN_CONTENT_LENGTH} characters long.`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

function generatePreview(content) {
  const words = content.trim().split(/\s+/);

  if (words.length <= PREVIEW_WORD_LIMIT) {
    return content;
  }

  return words.slice(0, PREVIEW_WORD_LIMIT).join(" ") + "...";
}

module.exports = {
  validateNote,
  generatePreview
};