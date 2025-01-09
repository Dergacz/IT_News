import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginI18n from "eslint-plugin-i18n-json";
import i18nextPlugin from "eslint-plugin-i18next";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { 
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      "i18next": i18nextPlugin
    },
    rules: {
      "i18next/no-literal-string": ["warn", {
        markupOnly: true,
        ignoreAttribute: [
          "data-testid", 
          "to", 
          "target", 
          "justify", 
          "align", 
          "direction", 
          "gap", 
          "role", 
          "as"
        ]
      }]
    }
  },
  {
    files: ["**/*.test.{ts,tsx}"],
    rules: {
      "i18next/no-literal-string": "off"
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect'
      }
    },
  },
  {
    files: ["**/public/locales/**/*.json"],
    plugins: {
      "i18n-json": pluginI18n
    },
    rules: {
      "i18n-json/valid-json": 2,
      "i18n-json/sorted-keys": [2, {
        order: "asc",
        indentSpaces: 2
      }],
      "i18n-json/identical-keys": [
        2,
        {
          filePath: "./public/locales/en/translation.json"
        }
      ],
      "@typescript-eslint/no-unused-expressions": "off"
    }
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }],
      'eol-last': ['error', 'always']
    }
  }
];
