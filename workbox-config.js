module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{ico,png,json,svg,html,txt}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};