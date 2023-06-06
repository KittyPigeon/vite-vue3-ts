import axios from "axios";
// axios对象
const service = axios.create({
	// axios请求基础URL
	baseURL: "http://localhost:5173", //此处根据自己启动的端口来
	timeout: 5000,
});
service.interceptors.request.use(config => {
	config.headers["Content-Type"] = "application/x-www-form-urlencoded";
	config.headers["X-Requested-With"] = "XMLHttpRequest";
	config.headers["Source-Flag"] = "h5";
	return config;
});
export default service;
