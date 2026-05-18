const {
  validateNote,
  generatePreview
} = require("../../src/noteUtils");

describe("Note utility functions", () => {
  test("should return an error when title is empty", () => {
    const result = validateNote("", "This is valid note content.");

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Title is required.");
  });

  test("should return an error when content is shorter than 10 characters", () => {
    const result = validateNote("Math Notes", "short");

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Content must be at least 10 characters long.");
  });

  test("should generate preview text from note body", () => {
    const content = "This is a long note about the main concepts in our lesson.";
    const preview = generatePreview(content);

    expect(preview).toBe("This is a long note about the...");
  });
});