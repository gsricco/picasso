module.exports = {
    extends: '@it-incubator/eslint-config',
    overrides: [
        {
            files: ['**/*.stories.tsx'],
            rules: {
                'react-hooks/rules-of-hooks': 'off',
                'no-console': 'off',
            },
        },
    ],
    rules: {
        "import/no-named-as-default": 0,
        "react-hooks/exhaustive-deps": 0,
        "import/extensions": 0,
    }
}


