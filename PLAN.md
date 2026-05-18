# Project Title

Study Notes App

# Repository Name

BrainDump

# App Description

Study Notes App is a simple single-resource CRUD web application that allows students to manage their class notes. Users can create a note with a title and content, view all saved notes, edit existing notes, and delete notes that are no longer needed. The application uses an in-memory data store because the main focus of this laboratory activity is Test-Driven Development rather than database implementation.

# Main Resource

Notes

# CRUD Features

- Create a new note with a title and content.
- Read and display all saved notes.
- Update an existing note.
- Delete a note that is no longer needed.

# User Stories

1. As a student, I want to create notes, so that I can save important lesson points.
2. As a student, I want to edit notes, so that I can improve or correct them.
3. As a student, I want to delete notes, so that I can remove outdated information.

# Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express.js
- Data Storage: In-memory array
- Unit Testing: Jest
- Integration Testing: Jest + Supertest
- System/E2E Testing: Playwright
- CI/CD: GitHub Actions

# Testing Strategy

Unit tests:

- validateNote() should return an error when the title is empty.
- validateNote() should return an error when the content is shorter than the minimum length.
- generatePreview() should generate preview text from the note body.

Integration tests:

- POST /api/notes should create a note and return status code 201.
- GET /api/notes should return all saved notes and return status code 200.

System tests:

- User Story 1: student can create a note.
- User Story 2: student can edit a note.
- User Story 3: student can delete a note.

# Planned Folder Structure

```text
CMSC129-Lab4-CandadoL/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── noteUtils.js
│   │   ├── notesStore.js
│   │   └── notesController.js
│   └── tests/
│       ├── unit/
│       │   └── noteUtils.test.js
│       └── integration/
│           └── notesRoutes.test.js
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── api.js
│   │   ├── components/
│   │   │   ├── NoteForm.jsx
│   │   │   ├── NoteList.jsx
│   │   │   └── NoteItem.jsx
│   │   └── styles/
│   │       └── index.css
│   ├── tests/
│   │   └── system/
│   │       └── notes.spec.js
│   └── playwright.config.js
├── screenshots/
│   ├── unit-tests.png
│   ├── integration-tests.png
│   ├── system-tests.png
│   └── full-test-suite.png
├── .github/
│   └── workflows/
│       └── ci.yml
├── PLAN.md
├── README.md
└── .gitignore
```

# TDD Commit Plan

[DOCS] Initial README and project plan for Study Notes App

[RED] Unit tests for note validation and preview generation
[GREEN] Implement note validation and preview generation
[REFACTOR] Extract note validation constants and blank value helper
[DOCS] Add unit test results screenshot

[RED] Integration tests for creating and retrieving notes
[GREEN] Implement notes API routes and in-memory store
[REFACTOR] Move note route logic into controller functions
[DOCS] Add integration test results screenshot

[RED] System tests for study notes user stories
[GREEN] Implement study notes UI for system tests
[REFACTOR] Extract note form and note list components
[DOCS] Add final test results and TDD reflection

# GitHub Actions Plan

- Add a GitHub Actions workflow in `.github/workflows/ci.yml`.
- Configure the workflow after package files are generated.
- Run backend unit tests in CI.
- Run backend integration tests in CI.
- Run frontend system tests in CI.
- Upload or document test screenshots after successful local test runs.

# Deployment Plan

- Deploy the frontend after the React + Vite application is implemented.
- Deploy the backend after the Express API is implemented.
- Configure environment variables only if needed.
- Add the final live URL to the README.

# Development Checklist

- [x] Create initial project folders.
- [x] Create placeholder source files.
- [x] Create placeholder test files.
- [x] Create project plan documentation.
- [x] Create README documentation.
- [x] Create `.gitignore`.
- [ ] Generate package files later using npm commands.
- [ ] Write failing unit tests.
- [ ] Implement utility functions.
- [ ] Write failing integration tests.
- [ ] Implement API routes.
- [ ] Write failing system tests.
- [ ] Implement React UI.
- [ ] Refactor backend and frontend code.
- [ ] Capture required test screenshots.
- [ ] Configure CI/CD.
- [ ] Deploy application.

# Defense Preparation Notes

- Explain the project as a single-resource CRUD application centered on Notes.
- Emphasize that the in-memory array is intentional because the lab focuses on TDD.
- Be prepared to explain the Red-Green-Refactor cycle for each testing level.
- Connect each system test to one of the three user stories.
- Show screenshots as proof of unit, integration, system, and full test suite results.
- Explain how GitHub Actions supports automated test execution.

# Final Goal Checklist

- [ ] Notes can be created, viewed, edited, and deleted.
- [ ] Unit tests pass.
- [ ] Integration tests pass.
- [ ] System tests pass.
- [ ] GitHub Actions workflow passes.
- [ ] Test result screenshots are added.
- [ ] README includes final setup, testing, deployment, and reflection sections.
- [ ] Live deployment link is added.
