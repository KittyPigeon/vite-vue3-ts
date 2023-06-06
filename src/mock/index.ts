// /src/mock/index.ts
import { MockMethod } from "vite-plugin-mock";
import AJSON from "./data/a";
import BarList from './data/barList'
const mock: Array<MockMethod> = [
	{
		url: "/api/test",
		method: "get",
		response: () => {
			return AJSON
		},
	},
	{
		url: "/user/leftRoomListSearch.action",
		method: "post",
		response: () => {
			return BarList
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
