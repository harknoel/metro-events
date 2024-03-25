import { Outlet, Navigate } from "react-router-dom";

const PrivateOrganizerRoutes = () => {
	return localStorage.getItem("role") === "ADMIN" ? (
		<Outlet />
	) : (
		<Navigate to="/notfound" />
	);
};

export default PrivateOrganizerRoutes;
