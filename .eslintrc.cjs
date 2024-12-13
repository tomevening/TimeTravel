/* eslint-env node */

import '@rushstack/eslint-patch/modern-module-resolution';

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': 0,
    '@typescript-eslint/no-empty-function': 'off',
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['warn', 'all'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'vue/no-mutating-props': 'off',
    'vue/no-setup-props-destructure': 0,
    'vue/multi-word-component-names': 0,
    'vue/component-tags-order': [
      1,
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/max-attributes-per-line': [
      1,
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/padding-line-between-blocks': ['warn', 'always'],
    'vue/no-unused-refs': ['warn'],
    'vue/component-name-in-template-casing': [
      'warn',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/attributes-order': [
      'warn',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: true,
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
};
