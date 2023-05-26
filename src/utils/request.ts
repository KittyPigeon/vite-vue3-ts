import request from "./api";

export const GetRoutes = () => request({ url: "/api/getRoutes", method: "GET" });
export const GetTest = () => request({ url: "/api/test", method: "GET" });
