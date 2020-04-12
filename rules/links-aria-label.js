export const rules = {
    "links-aria-label": {
        create: function (context) {
            return {
                JSXOpeningElement(node) {
                    const isAriaLabelAdded = node.attributes.find(attr => attr.name.name === 'aria-label');
                    if (typeof node.name === 'object'
                        && (node.name.name === 'a' || node.name.name === 'button')
                        && !isAriaLabelAdded) {
                        context.report({
                            node,
                            message: 'Anchor tags should have aria-labels defined',
                        });
                    }
                }
            };
        }
    }
};
