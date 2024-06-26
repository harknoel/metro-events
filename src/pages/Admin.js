import React from "react";
import AdminNav from "../components/AdminNav";
import Container from "../components/styles/Container.styled";
import AdminUserRequest from "../components/AdminUserRequest";

const Admin = () => {
	return (
		<div>
			<AdminNav />
			<Container>
				<h1>Admin Dashboard</h1>
				<AdminUserRequest />
			</Container>
		</div>
	);
};

export default Admin;
