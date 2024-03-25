import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8080/api/v1",
	timeout: 1000,
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
});

export default axiosInstance;
