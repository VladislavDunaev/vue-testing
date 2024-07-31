import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintVue from "eslint-plugin-vue";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import vueParser from "vue-eslint-parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
    {
        plugins: {
            "@typescript-eslint": tseslint.plugin,
            vue: eslintVue,
            prettier: prettierPlugin,
        },
    },
    {
        ignores: ["node_modules"],
    },
    js.configs.recommended,
    ...eslintVue.configs["flat/essential"],
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
            },
            parser: vueParser,
            parserOptions: {
                parser: tseslint.parser,
            },
            ecmaVersion: "latest",
        },
        linterOptions: {
            reportUnusedDisableDirectives: "error",
        },
    },
    {
        files: ["**/*.{js,ts,vue}"],
        ignores: ["**/*.config.js"],
        rules: {
            ...eslintConfigPrettier.rules,
            "prettier/prettier": ["warn"],
            "prefer-const": "warn",
        },
    },
);
