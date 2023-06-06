// /src/mock/index.ts
import { MockMethod } from "vite-plugin-mock";
import AJSON from "./data/a";
import BarList from "./data/barList";
import path from "path";
import fs from "fs";
const mock: Array<MockMethod> = [
	{
		url: "/api/test",
		method: "get",
		response: () => {
			return AJSON;
		},
	},
	{
		url: "/user/leftRoomListSearch.action",
		method: "post",
		rawResponse: (req, res) => {
			res.end(fs.readFileSync(path.resolve(__dirname, "data/userLeftRoomListSearch.json"), "utf8"));
		},
	},
	{
		url: "/user/loginUserPrivList.action",
		method: "post",
		rawResponse: (req, res) => {
			res.end(fs.readFileSync(path.resolve(__dirname, "data/userLoginUserPrivList.json"), "utf8"));
		},
	},
	{
		url: "/api/text",
		method: "post",
		rawResponse: (req, res) => {
			res.end(fs.readFileSync(path.resolve(__dirname, "data/userLoginUserPrivList.json"), "utf8"));
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
