import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: { globals: globals.browser },
        rules: {
            "no-console": "warn",
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
            "@typescript-eslint/no-explicit-any": ["off"],
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-non-null-assertion": "off"
        },
        ignores: ["node_modules", "public"],
        settings: {
            react: {
                version: "detect"
            }
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended
];
