# Contributing to StellarLearn

First off, thank you for considering contributing to StellarLearn! It's people like you that make StellarLearn such a great tool for the African developer ecosystem.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please report unacceptable behavior to `maintainers@stellarlearn.xyz`.

## How Can I Contribute?

### Reporting Bugs

- **Check if the bug has already been reported** by searching on GitHub under [Issues](https://github.com/StellarLearn/stellar-learn/issues).
- If you can't find an open issue addressing the problem, [open a new one](https://github.com/StellarLearn/stellar-learn/issues/new). Be sure to include a title and clear description, as much relevant information as possible, and a code sample or an executable test case demonstrating the expected behavior that is not occurring.

### Suggesting Enhancements

- **Open a Feature Request** issue.
- Describe the feature, the use case, and why it's important for the ecosystem.

### Your First Code Contribution

Unsure where to begin contributing to StellarLearn? You can start by looking through these `good-first-issue` and `help-wanted` issues:

- [Good First Issues](https://github.com/StellarLearn/stellar-learn/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) - issues which should only require a few lines of code, and a test or two.
- [Help Wanted Issues](https://github.com/StellarLearn/stellar-learn/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) - issues which should be a bit more involved than `good-first-issue` issues.

## Pull Requests

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes (`npm test`).
5. Make sure your code lints (`npm run lint`).
6. Issue that pull request!

## Local Development Setup

### Prerequisites

- Node.js 20+
- npm 11+
- Rust & Cargo (for Soroban contracts)
- [Stellar CLI](https://developers.stellar.org/docs/tools/stellar-cli/install)

### Step-by-Step

1. **Clone the repository:**
   ```bash
   git clone https://github.com/StellarLearn/stellar-learn.git
   cd stellar-learn
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your own values. See `.env.example` for all required variables.

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   This starts the web app at `http://localhost:3000` and the docs app at `http://localhost:3001`.

### Monorepo Workflow

We use Turborepo for managing our monorepo.

- `npm run dev`: Start all apps in development mode.
- `npm run build`: Build all apps and packages.
- `npm run test`: Run tests across the monorepo.
- `npm run lint`: Lint all files.

### Smart Contracts (Soroban)

To work on smart contracts:
1. Navigate to `apps/contracts`.
2. Use `cargo test` to run contract tests.
3. Use `stellar contract build` to build the WASM binaries.

## Code Style

### JavaScript / TypeScript

- **ESLint**: We use the project's ESLint configuration (extends `@repo/eslint-config`). Run `npm run lint` before committing.
- **Prettier**: Code is auto-formatted with Prettier. Run `npm run format` to format all files.
- **Naming conventions**: Use `camelCase` for variables and functions, `PascalCase` for components and types, `SCREAMING_SNAKE_CASE` for constants.
- **File structure**: Place components in `apps/web/src/components/`, hooks in `apps/web/src/hooks/`, and utility functions in `apps/web/src/lib/`.

### Rust

- Use `rustfmt` for formatting and `clippy` for linting.
- Follow the standard Rust naming conventions: `snake_case` for functions and variables, `PascalCase` for types.

### Git & Commits

- We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
- Prefix your commits with one of: `feat:`, `fix:`, `docs:`, `chore:`, `style:`, `refactor:`, `test:`, `ci:`.
- Keep commits focused on a single change. Use `git rebase -i` to clean up before submitting a PR.

---

Thank you for contributing!
