// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const perfectionist = require('eslint-plugin-perfectionist')
const stylistic = require('@stylistic/eslint-plugin');


module.exports = tseslint.config(
    {
        ignores: [
            'dist/**/*.ts',
            'dist/**',
            '**/*.mjs',
            'eslint.config.mjs',
            '**/*.js',
        ],
    },
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
    },
    {
        plugins: {
            perfectionist,
        },
        rules: {
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-misused-promises': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    'args': 'all',
                    'argsIgnorePattern': '^_',
                    'caughtErrors': 'all',
                    'caughtErrorsIgnorePattern': '^_',
                    'destructuredArrayIgnorePattern': '^_',
                    'varsIgnorePattern': '^_',
                    'ignoreRestSiblings': true
                }
            ],
            '@typescript-eslint/no-unsafe-enum-comparison': 'off',
            '@typescript-eslint/ban-tslint-comment': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            'class-methods-use-this': 'off',
            '@typescript-eslint/class-methods-use-this': 'off',
            '@typescript-eslint/consistent-generic-constructors': 'error',
            'no-array-constructor': 'off',
            '@typescript-eslint/no-array-constructor': 'error',
            '@typescript-eslint/consistent-type-imports': ['error', {
                fixStyle: 'separate-type-imports'
            }],
            '@typescript-eslint/class-literal-property-style': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/adjacent-overload-signatures': 'error',
            '@typescript-eslint/array-type': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-array-delete': 'error',
            '@typescript-eslint/no-confusing-non-null-assertion': 'error',
            '@typescript-eslint/no-confusing-void-expression': 'error',
            '@typescript-eslint/no-extra-non-null-assertion': 'error',
            '@typescript-eslint/no-deprecated': 'error',
            '@typescript-eslint/no-extraneous-class': 'error',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/no-import-type-side-effects': 'error',
            '@typescript-eslint/no-misused-new': 'error',
            '@typescript-eslint/no-inferrable-types': 'error',
            '@typescript-eslint/no-invalid-void-type': 'error',
            '@typescript-eslint/no-duplicate-enum-values': 'error',
            '@typescript-eslint/no-meaningless-void-operator': 'error',
            '@typescript-eslint/no-duplicate-type-constituents': 'error',
            '@typescript-eslint/no-dynamic-delete': 'error',
            '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
            '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
            '@typescript-eslint/no-redundant-type-constituents': 'error',
            '@typescript-eslint/no-mixed-enums': 'error',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
            '@typescript-eslint/no-unnecessary-condition': 'error',
            '@typescript-eslint/no-namespace': 'error',
            '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
            'no-useless-constructor': 'off',
            '@typescript-eslint/no-useless-constructor': 'error',
            '@typescript-eslint/no-wrapper-object-types': 'error',
            '@typescript-eslint/non-nullable-type-assertion-style': 'error',
            'require-await': 'off',
            '@typescript-eslint/require-await': 'error',
            'no-throw-literal': 'off',
            '@typescript-eslint/restrict-plus-operands': 'error',
            '@typescript-eslint/restrict-template-expressions': 'error',
            '@typescript-eslint/return-await': 'error',
            '@typescript-eslint/switch-exhaustiveness-check': ['error', {
                'considerDefaultExhaustiveForUnions': true
            }],
            '@typescript-eslint/unified-signatures': 'error',
            '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
            '@typescript-eslint/only-throw-error': 'error',
            '@typescript-eslint/no-useless-empty-export': 'error',
            '@typescript-eslint/no-unnecessary-qualifier': 'error',
            '@typescript-eslint/no-unnecessary-template-expression': 'error',
            '@typescript-eslint/no-unnecessary-type-arguments': 'error',
            '@typescript-eslint/no-unnecessary-type-constraint': 'error',
            '@typescript-eslint/no-unsafe-declaration-merging': 'error',
            '@typescript-eslint/no-unsafe-function-type': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            '@typescript-eslint/no-unsafe-unary-minus': 'error',
            '@typescript-eslint/prefer-as-const': 'error',
            '@typescript-eslint/prefer-enum-initializers': 'error',
            '@typescript-eslint/prefer-find': 'error',
            '@typescript-eslint/prefer-for-of': 'error',
            '@typescript-eslint/prefer-function-type': 'error',
            '@typescript-eslint/prefer-includes': 'error',
            '@typescript-eslint/prefer-nullish-coalescing': ['error', {
                ignorePrimitives: true
            }],
            '@typescript-eslint/prefer-optional-chain': 'error', 'prefer-promise-reject-errors': 'off',
            '@typescript-eslint/prefer-promise-reject-errors': 'error',
            'no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-expressions': 'error',
            'no-empty-function': 'off',
            '@typescript-eslint/no-empty-function': 'error',
            'array-callback-return': 'off',
            'no-constructor-return': 'error',
            'no-inner-declarations': 'error',
            'no-promise-executor-return': 'error',
            'no-self-compare': 'error',
            'no-template-curly-in-string': 'error',
            'no-unmodified-loop-condition': 'error',
            'no-unreachable-loop': 'error',
            '@typescript-eslint/no-use-before-define': ['error', {
                'functions': false,
                'classes': false,
                'variables': true,
                'allowNamedExports': true
            }],
            '@typescript-eslint/prefer-reduce-type-parameter': 'error',
            '@typescript-eslint/prefer-return-this-type': 'error',
            '@typescript-eslint/prefer-regexp-exec': 'error',
            '@typescript-eslint/prefer-string-starts-ends-with': 'error',
            '@typescript-eslint/related-getter-setter-pairs': 'error',
            'no-useless-assignment': 'error',
            'require-atomic-updates': 'error',
            'arrow-body-style': 'error',
            'block-scoped-var': 'error',
            'capitalized-comments': 'error',
            'consistent-this': 'error',
            'constructor-super': 'error',
            'curly': 'error',
            'default-case-last': 'error',
            'dot-notation': 'error',
            'eqeqeq': 'error',
            'for-direction': 'error',
            'func-name-matching': 'error',
            'func-names': 'error',
            'getter-return': 'error',
            'grouped-accessor-pairs': 'error',
            'guard-for-in': 'error',
            'logical-assignment-operators': 'error',
            'max-depth': 'error',
            'no-async-promise-executor': 'error',
            'no-caller': 'error',
            'no-case-declarations': 'error',
            'no-class-assign': 'error',
            'no-compare-neg-zero': 'error',
            'no-cond-assign': 'error',
            'no-const-assign': 'error',
            'no-constant-binary-expression': 'error',
            'no-constant-condition': 'error',
            'no-control-regex': 'error',
            'no-debugger': 'error',
            'no-delete-var': 'error',
            'no-div-regex': 'error',
            'no-dupe-args': 'error',
            'no-dupe-class-members': 'error',
            'no-dupe-else-if': 'error',
            'no-dupe-keys': 'error',
            'no-duplicate-case': 'error',
            'no-else-return': 'error',
            'no-empty': 'error',
            'no-empty-character-class': 'error',
            'no-empty-pattern': 'error',
            'no-empty-static-block': 'error',
            'no-eq-null': 'error',
            'no-ex-assign': 'error',
            'no-extend-native': 'error',
            'no-extra-bind': 'error',
            'no-extra-boolean-cast': 'error',
            'no-extra-label': 'error',
            'no-fallthrough': 'error',
            'no-func-assign': 'error',
            'no-global-assign': 'error',
            'no-implicit-coercion': 'error',
            'no-implicit-globals': 'error',
            'no-implied-eval': 'error',
            'no-import-assign': 'error',
            'no-invalid-regexp': 'error',
            'no-invalid-this': 'error',
            'no-irregular-whitespace': 'error',
            'no-iterator': 'error',
            'no-label-var': 'error',
            'no-labels': 'error',
            'no-lone-blocks': 'error',
            'no-lonely-if': 'error',
            'no-loop-func': 'error',
            'no-loss-of-precision': 'error',
            'no-misleading-character-class': 'error',
            'no-multi-assign': 'error',
            'no-multi-str': 'error',
            'no-negated-condition': 'error',
            'no-new': 'error',
            'no-new-func': 'error',
            'no-new-native-nonconstructor': 'error',
            'no-new-wrappers': 'error',
            'no-nonoctal-decimal-escape': 'error',
            'no-obj-calls': 'error',
            'no-object-constructor': 'error',
            'no-octal': 'error',
            'no-octal-escape': 'error',
            'no-proto': 'error',
            'no-prototype-builtins': 'error',
            'no-regex-spaces': 'error',
            'no-restricted-exports': 'error',
            'no-restricted-globals': 'error',
            'no-restricted-imports': 'error',
            'no-restricted-properties': 'error',
            'no-restricted-syntax': 'error',
            'no-return-assign': 'error',
            'no-script-url': 'error',
            'no-self-assign': 'error',
            'no-sequences': 'error',
            'no-setter-return': 'error',
            'no-shadow': 'error',
            'no-shadow-restricted-names': 'error',
            'no-sparse-arrays': 'error',
            'no-this-before-super': 'error',
            'no-unexpected-multiline': 'error',
            'no-unreachable': 'error',
            'no-unsafe-finally': 'error',
            'no-unsafe-negation': 'error',
            'no-unsafe-optional-chaining': 'error',
            'no-unused-labels': 'error',
            'no-unused-private-class-members': 'error',
            'no-useless-backreference': 'error',
            'no-useless-call': 'error',
            'no-useless-catch': 'error',
            'no-useless-computed-key': 'error',
            'no-useless-concat': 'error',
            'no-useless-escape': 'error',
            'no-useless-rename': 'error',
            'no-useless-return': 'error',
            'no-var': 'error',
            'no-warning-comments': 'error',
            'no-with': 'error',
            'object-shorthand': 'error',
            'operator-assignment': 'error',
            'prefer-arrow-callback': 'error',
            'prefer-const': 'error',
            'prefer-exponentiation-operator': 'error',
            'prefer-numeric-literals': 'error',
            'prefer-object-has-own': 'error',
            'prefer-object-spread': 'error',
            'prefer-regex-literals': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'prefer-template': 'error',
            'radix': ['error', 'as-needed'],
            'require-yield': 'error',
            'sort-vars': 'error',
            'strict': 'error',
            'symbol-description': 'error',
            'unicode-bom': 'error',
            'use-isnan': 'error',
            'valid-typeof': 'error',
            'vars-on-top': 'error',
            'yoda': 'error',
            'perfectionist/sort-array-includes': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
            'perfectionist/sort-classes': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
            'perfectionist/sort-decorators': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
            'perfectionist/sort-enums': 'off',
            'perfectionist/sort-exports': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
            'perfectionist/sort-heritage-clauses': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
            'perfectionist/sort-imports': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
            'perfectionist/sort-interfaces': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
            'perfectionist/sort-intersection-types': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
            'perfectionist/sort-maps': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
            'perfectionist/sort-named-exports': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
            'perfectionist/sort-named-imports': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
            'perfectionist/sort-object-types': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
            'perfectionist/sort-objects': 'off',
            'perfectionist/sort-sets': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
            'perfectionist/sort-switch-case': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
            'perfectionist/sort-union-types': ['error', {
                type: 'line-length',
                order: 'desc'
            }],
        },
    },
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/array-bracket-spacing': 'error',
            '@stylistic/arrow-parens': 'error',
            '@stylistic/arrow-spacing': 'error',
            '@stylistic/block-spacing': 'error',
            '@stylistic/brace-style': 'error',
            '@stylistic/comma-dangle': ['error', 'never'],
            '@stylistic/comma-spacing': 'error',
            '@stylistic/comma-style': 'error',
            '@stylistic/computed-property-spacing': 'error',
            '@stylistic/dot-location': ['error', 'property'],
            '@stylistic/eol-last': 'error',
            '@stylistic/function-call-argument-newline': ['error', 'consistent'],
            '@stylistic/function-call-spacing': 'error',
            '@stylistic/function-paren-newline': ['error', 'consistent'],
            '@stylistic/generator-star-spacing': ['error', { 'before': true, 'after': false }],
            '@stylistic/implicit-arrow-linebreak': 'error',
            '@stylistic/key-spacing': 'error',
            '@stylistic/keyword-spacing': 'error',
            '@stylistic/lines-between-class-members': 'error',
            '@stylistic/member-delimiter-style': 'error',
            '@stylistic/multiline-ternary': 'error',
            '@stylistic/new-parens': 'error',
            '@stylistic/no-extra-parens': 'error',
            '@stylistic/no-extra-semi': 'error',
            '@stylistic/no-floating-decimal': 'error',
            '@stylistic/no-mixed-spaces-and-tabs': 'error',
            '@stylistic/no-multi-spaces': 'error',
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/no-whitespace-before-property': 'error',
            '@stylistic/nonblock-statement-body-position': 'error',
            '@stylistic/object-curly-newline': 'error',
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/object-property-newline': 'error',
            '@stylistic/one-var-declaration-per-line': 'error',
            '@stylistic/quote-props': ['error', 'as-needed'],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/rest-spread-spacing': 'error',
            '@stylistic/semi': 'error',
            '@stylistic/semi-spacing': 'error',
            '@stylistic/semi-style': 'error',
            '@stylistic/space-before-blocks': 'error',
            '@stylistic/space-before-function-paren': ["error", {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }],
            '@stylistic/space-in-parens': 'error',
            '@stylistic/space-infix-ops': ['error', { 'int32Hint': false }],
            '@stylistic/space-unary-ops': 'error',
            '@stylistic/spaced-comment': 'error',
            '@stylistic/switch-colon-spacing': 'error',
            '@stylistic/template-curly-spacing': 'error',
            '@stylistic/template-tag-spacing': 'error',
            '@stylistic/type-annotation-spacing': 'error',
            '@stylistic/type-generic-spacing': 'error',
            '@stylistic/type-named-tuple-spacing': 'error',
            '@stylistic/yield-star-spacing': 'error',
        },
    },
    {
        plugins: {
            marcrock: require('./rules/_.js')
        },
        rules: {
            'marcrock/uppercase-first-class-letter': 'error',
            'marcrock/no-newline-if-body-class-empty': 'error'
        }
    }
);
