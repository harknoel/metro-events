import React from "react";
import AdminNav from "./AdminNav";
import Container from "./styles/Container.styled";
import AdminUserRequest from "./AdminUserRequest";
import verifyUser from "../helperFunctions";

const Admin = () => {
  verifyUser("ADMIN");
  return (
    <div>
      <AdminNav />
      <Container>
        <h1>Admin Dashboard</h1>
        <h2>User's request</h2>
        <AdminUserRequest />
      </Container>
    </div>
  );
};

export default Admin;
