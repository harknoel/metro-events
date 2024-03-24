import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./App";

const verifyUser = (user_type) => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null || user.user.authorities[0]?.authority !== user_type) {
      navigate("/signin");
    }
  }, [user, user_type, navigate]);
};

export default verifyUser;
