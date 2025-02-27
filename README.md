# Playwright Admin Dashboard

[![Playwright Tests](https://github.com/MahmudulHasan/Playwright-admin-dashboard/actions/workflows/playwright.yml/badge.svg)](https://github.com/MahmudulHasan/Playwright-admin-dashboard/actions/workflows/playwright.yml)

## Overview
This repository contains automated tests for an Admin Dashboard using [Playwright](https://playwright.dev/).

## Features
- End-to-end testing with Playwright
- CI/CD integration with GitHub Actions
- Headless and headed browser testing
- Test reporting and debugging tools

## Getting Started
### Prerequisites
- Node.js (>=16.x)
- npm

### Installation
Clone the repository and install dependencies:
```sh
git clone https://github.com/MahmudulHasan/Playwright-admin-dashboard.git
cd Playwright-admin-dashboard
npm install  # or yarn install
```

### Running Tests
Run tests and generate report in headless mode:
```sh
npx playwright test --reporter=line,allure-playwright
allure generate ./allure-results --clean
```
Run tests in headed mode (for debugging):
```sh
npx playwright test --headed --reporter=line,allure-playwright
allure generate ./allure-results --clean
```
Show report in browser:
```sh
allure open ./allure-report
```

### Debugging Tests
Run tests with Playwright Inspector:
```sh
npx playwright test --debug
```

## CI/CD Integration
This project uses GitHub Actions to run tests automatically on each push and pull request to main branch.

### Running Tests in CI
Tests run automatically via `.github/workflows/playwright.yml`.

## Folder Structure
```
Playwright-admin-dashboard/
├── tests/              # Playwright test files
├── pages/              # Page object files
├── data/               # Test data files
├── utils/              # Utility files
├── .github/workflows/  # CI/CD configuration
├── playwright.config.ts # Playwright configuration
├── package.json       # Project dependencies
└── README.md          # Documentation
```
