import http from "@/utils/api";
import { barTranslator } from "./translators";
export const getBarList = params => {
	return http({
		method: "POST",
		url: "/user/leftRoomListSearch.action",
		params: params,
	}).then(res => {
		return barTranslator(res.data.data);
	});
};
