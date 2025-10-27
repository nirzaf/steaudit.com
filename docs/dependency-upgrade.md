# Dependency Upgrade: Migrate to Latest Versions and Resolve Conflicts

## SEVERITY
P1: High. The project has conflicting dependencies and relies on a flag (`--legacy-peer-deps`) that bypasses dependency resolution issues. Updating dependencies is critical for stability, security, and maintainability.

## OBJECTIVE
Update all npm dependencies to their latest stable versions, resolve dependency conflicts, and remove the need for the `--legacy-peer-deps` flag in the build script.

## CONTEXT
- **File**: `package.json`
- **Current behavior**: The project uses a mix of dependency versions, including a duplicate declaration for `@types/react` and a potentially unstable version of React (`19.2.0`). The build script uses `--legacy-peer-deps`, indicating underlying peer dependency conflicts.
- **Root cause**: Dependencies have become outdated, and conflicts have been introduced over time. The duplicate dependency is likely a copy-paste error.

## REPLICATION STEPS
1. Run `npm install`. The command may fail or produce warnings without the `--legacy-peer-deps` flag.
2. Inspect `package.json` to observe the dependency issues.
3. Run `npm run build`, which currently uses `npm install --legacy-peer-deps && vite build` to force the installation.

## PROBLEM

### Location 1: package.json (Lines 32-34)
```json
    "@types/react": "^18.2.67",
    "@types/react-dom": "^19.2.2",
    "@types/react": "^19.2.2",
```
**Issue**: The `@types/react` dependency is declared twice with conflicting versions. This causes resolution ambiguity and should be corrected to a single, appropriate version that matches the React version.

### Location 2: package.json (Line 8)
```json
    "build": "npm install --legacy-peer-deps && vite build",
```
**Issue**: The build script relies on `--legacy-peer-deps`. This is a workaround, not a solution. It ignores peer dependency mismatches, which can lead to runtime errors or unexpected behavior. The underlying conflicts must be resolved.

### Location 3: package.json (Dependencies)
```json
  "dependencies": {
    "@react-three/drei": "^10.7.6",
    "@react-three/fiber": "^9.4.0",
    "@supabase/supabase-js": "^2.75.1",
    "framer-motion": "^12.23.24",
    "gsap": "^3.13.0",
    "lottie-react": "^2.4.1",
    "lucide-react": "^0.546.0",
    "react-dom": "^19.2.0",
    "react": "^19.2.0",
    "react-helmet-async": "^2.0.5",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.9.4",
    "three": "^0.180.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.38.0",
    "@tailwindcss/postcss": "^4.1.14",
    "@types/react": "^18.2.67",
    "@types/react-dom": "^19.2.2",
    "@types/react": "^19.2.2",
    "@vitejs/plugin-react": "^5.0.4",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.38.0",
    "eslint-plugin-react-hooks": "^7.0.0",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.4.0",
    "npm-check-updates": "^19.1.1",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.14",
    "typescript": "^5.9.3",
    "typescript-eslint": "^8.46.0",
    "vite": "^7.1.5"
  }
```
**Issue**: Many dependencies are likely outdated. A full upgrade is required to ensure compatibility, leverage new features, and patch security vulnerabilities. The project is on Vite `7.1.5`, while the latest is `7.1.11`.

## SUGGESTED HYPOTHESIS

### Hypothesis 1: Automated Upgrade with `npm-check-updates`
**Theory**: Use the `npm-check-updates` (ncu) tool to safely identify and apply updates in `package.json`. This tool simplifies the process of upgrading dependencies to their latest versions while providing a clear overview of the changes.

**File**: `package.json`

```bash
# Step 1: Install npm-check-updates globally if not already available
npm install -g npm-check-updates

# Step 2: Run ncu to see what can be updated
ncu

# Step 3: Before upgrading, fix the duplicate @types/react entry.
# Remove the line `"@types/react": "^18.2.67",`

# Step 4: Upgrade all package.json dependencies
ncu -u

# Step 5: Install the new packages
npm install

# Step 6: Remove the --legacy-peer-deps flag from the build script
# "build": "vite build",
```
**Trade-offs**:
✅ **Benefit**: Fast, automated, and handles most dependency updates correctly.
⚠️ **Risk/consideration**: May not be able to resolve complex peer dependency conflicts automatically, requiring manual intervention. Major version bumps may still introduce breaking changes that require code modifications.

## MUST PRESERVE
- The application must build and run without errors after the upgrade.
- Existing functionality of the website should remain unchanged from a user's perspective.
- The project's code style and conventions must be followed for any necessary code changes.

## SUCCESS CRITERIA
1. The duplicate `@types/react` entry in `package.json` is removed.
2. All dependencies in `package.json` are updated to their latest stable versions.
3. The `npm install` command completes successfully without requiring the `--legacy-peer-deps` flag.
4. The `build` script in `package.json` is updated to `"build": "vite build"`.
5. The application starts successfully using `npm run dev`.
6. The production build completes successfully using `npm run build`.

## VERIFICATION STEPS
1. **Test**: Run `npm install` and confirm it finishes without errors.
2. **Test**: Run `npm run build` and confirm it creates a production build in the `dist` folder.
3. **Test**: Run `npm run dev` and navigate the application in a browser to ensure all pages and features work as expected.
4. **Check**: Run `npm outdated` to confirm that no packages are reported as outdated.

## CONSTRAINTS
- Must resolve all peer dependency conflicts.
- Must ensure that any required code migrations for major version updates (e.g., in React, Vite, or other key libraries) are completed.
