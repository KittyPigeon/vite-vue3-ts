import http from "@/utils/api";

export const privList = params => {
	return http({
		url: "/user/loginUserPrivList.action",
		params,
	});
};
