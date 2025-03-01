# Contributing to the Project

## Table of Contents

- [Environment Setup](#environment-setup)
- [Testing Your Changes](#-testing-your-changes)
  - [Unit Testing](#-unit-testing)
- [Writing a Commit Message](#-writing-a-commit-message)
- [Coding Standards](#coding-standards)
  - [Linting and Formatting](#linting-and-formatting)
- [Testing Requirements](#testing-requirements)
- [Branch and PR Guidelines](#branch-and-pr-guidelines)
  - [Branch Naming](#branch-naming)
  - [Pull Requests](#pull-requests)
- [Security Review](#security-review)
  - [Security Reporting](#security-reporting)
- [Documentation](#documentation)
- [Issue Guidelines](#issue-guidelines)
- [Contribution Process](#contribution-process)

Thanks for your interest in contributing! Contribution to this repository is open to anyone and requires a Pull Request for changes to be considered for merging to `main`.

## Environment Setup

COMING SOON

## ⏱ Testing Your Changes

> You'll need write about how you tested your changes in the PR under the **Test Plan** section.

The best way to get your changes merged is to build good tests for them! Adding tests that you notice are missing is a great way to become my friend 🥳!

### ✅ Unit Testing

1. Create a test for your feature in the `__test__s` directory (if the file doesn't exist already, create it with the `*-test.ts` or `*-test.tsx` extension).
2. Run the test and ensure they pass, and ensure it handles all platforms (iOS, Android, and web). If the feature doesn't support a platform, then you can exclude it by putting your test in a file with a platform extension like: `.test.ios.ts`, `.test.native.ts`, `.test.web.ts`...
3. You can also test platforms one at a time by pressing <kbd>X</kbd> and selecting the platform you want to test!

## 📝 Writing a Commit Message

> If this is your first time committing to a large public repo, you could look through this neat tutorial: ["How to Write a Git Commit Message"](https://chris.beams.io/posts/git-commit/) and ["Conventional Commits"](https://www.conventionalcommits.org/en/v1.0.0/)

Commit messages are most useful when formatted like so: `[convention] Title`. For example, if you fix a bug, you could write: `[fix] Fixed button not resizing when 'md'`.

## Coding Standards

Here are our guidelines for coding standards:

- Use ESLint and Prettier for consistent formatting in the front-end.
- Keep code DRY (Don't Repeat Yourself) and use meaningful naming.

### Linting and Formatting

- Run `npm run lint` and `npm run format` before committing
- Configure your editor to format on save for the best experience

## Testing Requirements

Our test coverage approach is:

- Write unit tests for each new feature or bug fix.
- Keep coverage neat (aim for 80% or higher).
- Run tests locally (`npm run test`) before opening a PR.

## Branch and PR Guidelines

### Branch Naming

- Use meaningful prefixes: `feature/`, `bugfix/`, `hotfix/`
- Follow with a concise description: `feature/add-user-auth`
- For bugs, include issue number if applicable: `bugfix/123-fix-login-error`

### Pull Requests

- Link related issues in the description
- Include:
  - Clear description of changes
  - Test plan detailing how you verified the changes
  - Screenshots for UI changes
  - Any specific review areas you'd like feedback on
- Keep PRs focused and reasonably sized

## Security Review

We prioritize security by:

- Ensuring no secrets or credentials are committed.
- Reviewing code for potential injection vulnerabilities and using parameterized queries or placeholders where necessary.
- Validating user input to avoid XSS or CSRF attacks.
- For advanced changes, consider a security review done by a senior developer.

### Security Reporting

- Report security vulnerabilities privately to the maintainers
- Do not create public issues for security concerns
- Wait for confirmation before discussing security issues publicly

## Documentation

- Update documentation for any new features or behavior changes
- Include JSDoc comments for new functions/methods
- Update README.md if adding new scripts or requirements
- Document any new environment variables

## Issue Guidelines

For bug reports:

- Clear steps to reproduce
- Expected vs actual behavior
- Environment details (OS, browser, app version)
- Relevant logs or screenshots

For feature requests:

- Clear problem statement
- Proposed solution
- Any alternative approaches considered

## Contribution Process

1. Fork the repository and create a new feature or bug branch.
2. Follow the coding standards and testing guidelines.
3. Create a pull request to `main` when ready for review.
4. The code will be peer-reviewed for style, correctness, tests, and security.
5. If approved, we merge it in.
6. Be mindful of our [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## Attribution

Adapted from [Expo CONTRIBUTING Guide](https://github.com/expo/expo/blob/main/CONTRIBUTING.md)
