module.exports = {
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:import/typescript",
    "prettier"
  ],
  rules: {
    'import/extensions': [0, "never"], // importの拡張子使用を許容しない
    'arrow-body-style': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "@typescript-eslint/no-unused-vars": 'error',
    'react/jsx-no-useless-fragment': 'off',
    'react/display-name': 'off',
    'lines-between-class-members': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ], // 引数への再代入を許容しない。第2引数部ReduxReducerの用途としてstateへの再代入は許容する
  },
  overrides: [
    // Next.js needs default exports for pages and API points
    {
      files: ["*/pages/*", "*/pages/api/*"],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": "error",
      },
    },
  ],
}
