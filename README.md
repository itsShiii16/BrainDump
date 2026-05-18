# Project Title

Study Notes App

# Live URL placeholder

Live URL: To be added after deployment.

# App Description

Study Notes App is a simple single-resource CRUD web application that allows students to manage their class notes. Users can create a note with a title and content, view all saved notes, edit existing notes, and delete notes that are no longer needed. The application uses an in-memory data store because the main focus of this laboratory activity is Test-Driven Development rather than database implementation.

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

# Data Storage Approach

The application will use an in-memory array to store notes during runtime. This keeps the project focused on Test-Driven Development, route behavior, UI behavior, and CRUD flow instead of database setup.

# Planned API Routes

- GET /api/notes
- POST /api/notes
- PUT /api/notes/:id
- DELETE /api/notes/:id

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

# Setup Instructions placeholder

Setup instructions will be added after package files are generated and dependencies are installed in a later commit.

# CI/CD Setup placeholder

GitHub Actions setup will be added after the backend, frontend, and test scripts are available.

# Test Results placeholder

Test result screenshots will be added after the Red-Green-Refactor testing cycles are completed.

# Deployment placeholder

Deployment instructions and the deployed application link will be added after implementation.

# Reflection placeholder

The final TDD reflection will be added after completing the unit, integration, and system testing workflow.
Note taking webapp
