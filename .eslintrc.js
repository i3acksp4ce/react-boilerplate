module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',

    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',

    'prettier',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',

    './.eslintrc-auto-import.json',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    tailwindcss: {
      callees: ['classnames', 'cx', 'tw', 'css'],
      classRegex: /^(?:className=)?(?:cx\()?(["'])(.*?)\1(?:(?:\))?)$/,
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'import', next: 'export' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
    ],

    /**
     *
     * react
     *
     */

    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'react/jsx-no-undef': ['off'],

    /**
     *
     * tailwind
     *
     */

    'tailwindcss/classnames-order': [
      'warn',
      {
        prependCustom: true,
        officialSorting: true,
      },
    ],

    'tailwindcss/no-custom-classname': ['off'],

    /**
     *
     * prettier
     *
     */

    'prettier/prettier': [
      'error',
      {
        usePrettierrc: false,
        endOfLine: 'auto',
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'always',
        vueIndentScriptAndStyle: true,
      },
    ],

    /**
     *
     * typescript
     *
     */

    '@typescript-eslint/no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
  },
}
