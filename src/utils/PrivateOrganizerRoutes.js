import { Outlet, Navigate } from "react-router-dom";

const PrivateOrganizerRoutes = () => {
	return localStorage.getItem("role") === "ORGANIZER" ? (
		<Outlet />
	) : (
		<Navigate to="/notfound" />
	);
};

export default PrivateOrganizerRoutes;
