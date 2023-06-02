module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true,
	},
	// moduleResolution: "node",
	extends: ["plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2020,
		sourceType: "module",
		// jsxPragma: "React",
		ecmaFeatures: {
			jsx: true,
		},
	},
	parser: "vue-eslint-parser",
	rules: {
		// semi: ["error", "always"],
		"vue/multi-word-component-names": 0,
		// "prettier/prettier": [
		// 	"error",
		// 	{
		// 		tabWidth: 2, // tab 样式宽度
		// 		parser: "flow",
		// 		semi: true, // 结尾不用分号
		// 		"singleQuote": true,

		// 	}
		// ],
		indent: ["off", 2],
		"@typescript-eslint/triple-slash-reference": "0"
	},
};
