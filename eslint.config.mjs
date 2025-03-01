import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import vitest from "@vitest/eslint-plugin";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import testingLibraryPlugin from "eslint-plugin-testing-library";

/** @type {import('typescript-eslint').Config} */
export default [
  js.configs.recommended,
  {
    ignores: [
      "__mocks__/**",
      "**/coverage**",
      "**/dist/**",
    ],
  },
  {
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
      import: importPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
      },
      globals: {
        React: "writable",
        module: true,
        global: true,
      },
      ecmaVersion: "latest",
    },
    rules: {
    "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    plugins: {
      "testing-library": testingLibraryPlugin,
      vitest,
    },
    rules: {
       ...vitest.configs.recommended.rules,
      ...testingLibraryPlugin.configs.react.rules,
    },
  },
];
