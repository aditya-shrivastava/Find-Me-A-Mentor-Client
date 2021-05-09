module.exports = {
	extends: ['stylelint-config-recommended'],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'variants',
					'responsive',
					'screen',
				],
			},
		],
		'declaration-block-trailing-semicolon': null,
		'no-descending-specificity': null,
		'no-empty-source': null,
		'declaration-block-no-duplicate-custom-properties': null,
		'named-grid-areas-no-invalid': null,
	},
};
