import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

reactRefresh.rules;
export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    react.configs.flat.recommended,
  ],
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist", "src/components/ui/**"], // ui folder is used by shadcn-ui
  languageOptions: {
    parser: tseslint.parser,
    ecmaVersion: 2020,
    sourceType: "module",
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off", // if using React 17 or later
    "react/jsx-no-undef": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-no-useless-fragment": "error",
  },
});
