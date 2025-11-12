# Husky & Lint-Staged Setup

This will prevent build errors by running linting and type-checking before commits.

## Setup Instructions (Husky v9)

Run these commands in order:

```bash
# Install the new dependencies
npm install

# Initialize husky (creates .husky directory)
npx husky init

# Create the pre-commit hook
echo "npx lint-staged" > .husky/pre-commit

# Make sure it's executable
chmod +x .husky/pre-commit
```

## What This Does

- **Husky**: Git hooks manager that runs scripts before commits
- **Lint-staged**: Runs linters only on staged files (fast!)

## Pre-commit Checks

Before every commit, it will automatically:

1. ✅ Run ESLint and fix issues
2. ✅ Run Prettier to format code
3. ✅ Only on files you're committing (fast!)

## Testing

Try committing a file with issues:

```bash
git add .
git commit -m "test commit"
```

If there are linting errors, the commit will be blocked and you'll see the errors.

## Manual Commands

You can still run these manually:

```bash
# Check all files
npm run lint

# Format all files
npm run format

# Build (includes type-checking)
npm run build
```

## Bypass (Emergency Only)

If you absolutely need to bypass the checks:

```bash
git commit --no-verify -m "emergency fix"
```

**Note**: Don't do this regularly! The checks are there to prevent build failures.
