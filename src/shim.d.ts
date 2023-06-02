/// <reference path="./types/index.d.ts" />

declare module "*.vue" {
	import { ComponentOptions } from "vue";
	const componentOptions: ComponentOptions;
	export default componentOptions;
}
declare const API_BASE_URL: string = "https://api.twitter.com/";
