export default {
  "*.{ts,tsx}": [
    () => "tsc -p tsconfig.app.json --noEmit",
    "eslint",
    "prettier --write",
  ],
  "*.{js,jsx}": ["eslint", "prettier --write"],
  "*.{md,html,css}": "prettier --write",
};
