module.exports = {
  extends: ["standard", "standard-react", "plugin:import/errors", "plugin:import/warnings"],
  plugins: ["@kyleshevlin"],
  rules: {
    "@kyleshevlin/prefer-custom-hooks": "error",
    "@kyleshevlin/no-skipped-or-focused-tests": "error",
    "object-curly-spacing": ["error", "never"],
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.8.4",
    },
  },
  parser: "babel-eslint",
};
