import axios from "axios";
// axios对象
const service = axios.create({
	// axios请求基础URL
	baseURL: "http://localhost:5173", //此处根据自己启动的端口来
	timeout: 5000,
});
service.interceptors.request.use(config => {
	config.headers.test = "I am only a header!";
	config.headers["Content-Type"] = "application/json";
	return config;
});
export default service;
