module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2017
  },
  extends: ["eslint:recommended", "standard"],
  rules: {
    "new-cap": "off",
    "no-console": "off",
    camelcase: "off",
    "no-return-await": "off",
    eqeqeq: "off",
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-unused-vars": ["warn"]
  },
  globals: {
    jest: true
  }
};
