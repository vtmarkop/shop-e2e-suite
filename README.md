# 🛒 Modern E2E Automation Suite

![Playwright Status](https://github.com/vtmarkop/shop-e2e-suite/actions/workflows/playwright.yml/badge.svg)

## 📋 Project Overview
A production-ready automated testing framework built using **Playwright** and **TypeScript**. This project demonstrates the **Page Object Model (POM)** design pattern to ensure scalability, maintainability, and clean code.

## 🛠️ Technology Stack
| Component | Technology | Reason |
| :--- | :--- | :--- |
| **Framework** | Playwright | Faster, reliable, auto-waiting |
| **Language** | TypeScript | Type safety and better IDE support |
| **Pattern** | Page Object Model | Reusable UI logic |
| **CI/CD** | GitHub Actions | Automated execution on push |

## 📐 Design Pattern: Page Object Model (POM)
# 1. Create Directories
mkdir -p shop-e2e-suite/.github/workflows
mkdir -p shop-e2e-suite/pages
mkdir -p shop-e2e-suite/tests

# 2. Change into directory
cd shop-e2e-suite

# 3. Create package.json (Defines dependencies)
cat <<EOF > package.json
{
  "name": "shop-e2e-suite",
  "version": "1.0.0",
  "description": "Modern E2E automation using Playwright and TypeScript",
  "scripts": {
    "test": "playwright test",
    "report": "playwright show-report"
  },
  "keywords": ["qa", "playwright", "typescript", "automation"],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@playwright/test": "^1.40.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  }
}
