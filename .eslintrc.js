module.exports = {
  extends: ["eslint:recommended"],
  plugins: ["prettier", "react"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    mocha: true
  },
  rules: {
    "prettier/prettier": "error",
    "no-nested-ternary": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false
      }
    ],
    "max-statements": [
      "error",
      {
        max: 30
      }
    ],
    complexity: [
      "error",
      {
        max: 20
      }
    ],
    "no-var": ["error"]
  }
};
