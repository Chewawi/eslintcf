module.exports =
    /**
     * 
     * @param {ReturnType<import('@typescript-eslint/utils').ESLintUtils.RuleCreator>} createRule 
     * @returns 
     */
    function create(createRule) {
        return createRule({
            create(context) {
                return {
                    ClassDeclaration(node) {
                        if (node.id != null) {
                            if (/^[a-z]/.test(node.id.name)) {
                                context.report({
                                    messageId: 'uppercase',
                                    node: node.id,
                                });
                            }
                        }
                    },
                };
            },
            name: 'uppercase-first-class-letter',
            meta: {
                docs: {
                    description:
                        'Class declaration names should start with an upper-case letter.',
                },
                messages: {
                    uppercase: 'Start this name with an upper-case letter.',
                },
                type: 'suggestion',
                schema: [],
            },
            defaultOptions: [],
        });
    }