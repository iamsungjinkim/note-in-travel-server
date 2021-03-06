/* eslint-disable linebreak-style */
module.exports = {
  env: {
    browser: true,
    jest: true,
    commonjs: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  ignorePatterns: ["node_modules/"],
  extends: [
    "airbnb-base",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2, { SwitchCase: 1, MemberExpression: 1 }],
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    "no-plusplus": "off",
    "comma-dangle": ["error", "always-multiline"],
    "no-unused-vars": ["warn", { argsIgnorePattern: "err|req|res|next" }],
    "func-names": "off",
    "consistent-return": "off",
    "no-underscore-dangle": "off",
    "object-curly-spacing": ["error", "always"],
    "no-restricted-syntax": ["error", "ForOfStatement"],
    "no-use-before-define": ["error", { functions: false }],
    "no-await-in-loop": "off",
    "object-shorthand": ["error", "properties"],
    "no-param-reassign": ["error", { props: false }],
    "arrow-body-style": ["warn", "as-needed"],
    "wrap-iife": ["error", "inside"],
    "no-unused-expressions": "off",
  },
};
