# Contributing to StellarLearn

First off, thank you for considering contributing to StellarLearn! It's people like you that make StellarLearn such a great tool for the African developer ecosystem.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please report unacceptable behavior to `maintainers@teelabs.hq`.

## How Can I Contribute?

### Reporting Bugs

- **Check if the bug has already been reported** by searching on GitHub under [Issues](https://github.com/TeeLabsHQ/stellar-learn/issues).
- If you can't find an open issue addressing the problem, [open a new one](https://github.com/TeeLabsHQ/stellar-learn/issues/new). Be sure to include a title and clear description, as much relevant information as possible, and a code sample or an executable test case demonstrating the expected behavior that is not occurring.

### Suggesting Enhancements

- **Open a Feature Request** issue.
- Describe the feature, the use case, and why it's important for the ecosystem.

### Your First Code Contribution

Unsure where to begin contributing to StellarLearn? You can start by looking through these `good-first-issue` and `help-wanted` issues:

- [Good First Issues](https://github.com/TeeLabsHQ/stellar-learn/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) - issues which should only require a few lines of code, and a test or two.
- [Help Wanted Issues](https://github.com/TeeLabsHQ/stellar-learn/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) - issues which should be a bit more involved than `good-first-issue` issues.

## Pull Requests

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes (`npm test`).
5. Make sure your code lints (`npm run lint`).
6. Issue that pull request!

## Development Setup

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

## Stylecards

- **JavaScript**: Use ESLint and Prettier (already configured).
- **Rust**: Use `rustfmt` and `clippy`.
- **Git**: Use descriptive commit messages. We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

---

Thank you for contributing!
