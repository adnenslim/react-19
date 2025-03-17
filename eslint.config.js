import tseslint from "typescript-eslint";
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      importPlugin.flatConfigs.recommended,
      jsxA11y.flatConfigs.recommended,
      prettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
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
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      "no-console": "warn",
      "react/button-has-type": "error",
      "react/react-in-jsx-scope": ["off"],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true, // Laisse `import/order` gérer l'ordre global
          ignoreMemberSort: false,
          allowSeparatedGroups: false,
        },
      ],
      "import/order": [
        "error",
        {
          "groups": [
            "builtin", // Modules natifs de Node.js (fs, path, etc.)
            "external", // Packages installés (react, axios, etc.)
            "internal", // Imports internes du projet
            ["parent", "sibling", "index"], // Imports relatifs
            "object",
            "type",
          ],
          "newlines-between": "always", // Ajoute une ligne vide entre les groupes
          "alphabetize": { order: "asc", caseInsensitive: true }, // Trie les imports par ordre alphabétique
        },
      ],
    },
  }
);