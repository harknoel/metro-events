import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserEvents from "./components/UserEvents";
import Explore from "./components/Explore";
import Manage from "./components/Manage";
import CreateEvent from "./components/CreateEvent";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/userevents" element={<UserEvents />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/manage" element={<Manage />} />
          <Route exact path="/createevent" element={<CreateEvent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
