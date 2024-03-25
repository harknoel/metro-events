import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserEvents from "./pages/UserEvents";
import Explore from "./pages/Explore";
import Manage from "./pages/Manage";
import CreateEvent from "./pages/CreateEvent";
import Admin from "./pages/Admin";
import { useMemo } from "react";
import React, { useState } from "react";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div>
      <Router>
        <UserContext.Provider value={value}>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/userevents" element={<UserEvents />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/manage/:eventId" element={<Manage />} />
            <Route exact path="/createevent" element={<CreateEvent />} />
            <Route exact path="/admin" element={<Admin />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
