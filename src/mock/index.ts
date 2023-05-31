// /src/mock/index.ts
import { MockMethod } from "vite-plugin-mock";

const mock: Array<MockMethod> = [
	{
		url: "/api/test",
		method: "get",
		response: () => {
			return {
				status: 200,
				message: "success",
				data: "返回的数据",
			};
		},
	},
	{
		url: "/api/getRoutes",
		method: "get",
		response: () => {
			const routes = [
				{
					path: "/about",
					name: "about",
					component: "about",
				},
			];
			return {
				status: 200,
				message: "success",
				data: routes,
			};
		},
	},
];

export default mock;
