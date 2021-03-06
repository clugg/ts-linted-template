module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parserOptions: {
        project: ['tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    rules: {
        '@typescript-eslint/brace-style': 2,
        '@typescript-eslint/comma-dangle': [2, 'always-multiline'],
        '@typescript-eslint/comma-spacing': 2,
        '@typescript-eslint/default-param-last': 2,
        '@typescript-eslint/dot-notation': 2,
        '@typescript-eslint/func-call-spacing': 2,
        '@typescript-eslint/keyword-spacing': 2,
        '@typescript-eslint/no-duplicate-imports': 2,
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-invalid-this': 2,
        '@typescript-eslint/no-loop-func': 2,
        '@typescript-eslint/no-redeclare': 2,
        '@typescript-eslint/no-shadow': 2,
        '@typescript-eslint/no-throw-literal': 2,
        '@typescript-eslint/no-unused-expressions': 2,
        '@typescript-eslint/no-unused-vars': [
            2,
            {
                varsIgnorePattern: '^_$',
                argsIgnorePattern: '^_$',
            },
        ],
        '@typescript-eslint/no-use-before-define': 2,
        '@typescript-eslint/no-useless-constructor': 2,
        '@typescript-eslint/quotes': [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        '@typescript-eslint/space-before-function-paren': [
            2,
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        '@typescript-eslint/space-infix-ops': 2,
        'accessor-pairs': 2,
        'array-bracket-spacing': 2,
        'array-callback-return': 2,
        'arrow-body-style': 2,
        'arrow-spacing': 2,
        'computed-property-spacing': 2,
        'consistent-return': 2,
        'consistent-this': 2,
        curly: 2,
        'default-case': 2,
        'eol-last': 2,
        eqeqeq: [
            2,
            'always',
            {
                null: 'ignore',
            },
        ],
        'func-name-matching': 2,
        'func-names': [2, 'as-needed'],
        'generator-star-spacing': 2,
        'grouped-accessor-pairs': 2,
        'guard-for-in': 2,
        'key-spacing': 2,
        'line-comment-position': 2,
        'linebreak-style': 2,
        'max-classes-per-file': 2,
        'multiline-comment-style': 2,
        'multiline-ternary': [2, 'always-multiline'],
        'new-parens': 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-console': 2,
        'no-constructor-return': 2,
        'no-else-return': 2,
        'no-empty': [
            2,
            {
                allowEmptyCatch: true,
            },
        ],
        'no-extra-label': 2,
        'no-floating-decimal': 2,
        'no-inline-comments': 2,
        'no-label-var': 2,
        'no-lone-blocks': 2,
        'no-lonely-if': 2,
        'no-mixed-operators': 2,
        'no-multi-assign': 2,
        'no-multi-spaces': 2,
        'no-multiple-empty-lines': 2,
        'no-negated-condition': 2,
        'no-new-func': 2,
        'no-new-object': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-octal-escape': 2,
        'no-octal': 2,
        'no-param-reassign': 2,
        'no-plusplus': 2,
        'no-proto': 2,
        'no-return-assign': 2,
        'no-return-await': 2,
        'no-script-url': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-template-curly-in-string': 2,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 2,
        'no-unmodified-loop-condition': 2,
        'no-unneeded-ternary': 2,
        'no-unreachable-loop': 2,
        'no-useless-call': 2,
        'no-useless-computed-key': 2,
        'no-useless-concat': 2,
        'no-useless-rename': 2,
        'no-useless-return': 2,
        'no-var': 2,
        'no-void': 2,
        'no-whitespace-before-property': 2,
        'object-shorthand': 2,
        'operator-assignment': 2,
        'padded-blocks': [2, 'never'],
        'prefer-arrow-callback': 2,
        'prefer-const': 2,
        'prefer-exponentiation-operator': 2,
        'prefer-object-spread': 2,
        'prefer-promise-reject-errors': 2,
        'prefer-regex-literals': 2,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'prefer-template': 2,
        'prettier/prettier': 2,
        'quote-props': [2, 'as-needed'],
        radix: 2,
        'require-await': 2,
        'require-unicode-regexp': 2,
        'rest-spread-spacing': 2,
        'sort-imports': 2,
        'space-in-parens': 2,
        'spaced-comment': 2,
        strict: 2,
        'switch-colon-spacing': 2,
        'template-curly-spacing': 2,
        'wrap-iife': 2,
        'yield-star-spacing': 2,
    },
};
