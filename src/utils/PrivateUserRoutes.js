import { Outlet, Navigate } from "react-router-dom";

const PrivateUserRoutes = () => {
	const role = localStorage.getItem("role");
	return role === "USER" || role === "ORGANIZER" ? (
		<Outlet />
	) : (
		<Navigate to="/notfound" />
	);
};

export default PrivateUserRoutes;
