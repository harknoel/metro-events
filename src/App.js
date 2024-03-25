import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserEvents from "./pages/UserEvents";
import Explore from "./pages/Explore";
import Manage from "./pages/Manage";
import CreateEvent from "./pages/CreateEvent";
import Admin from "./pages/Admin";

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
					<Route exact path="/manage/:eventId" element={<Manage />} />
					<Route exact path="/createevent" element={<CreateEvent />} />
					<Route exact path="/admin" element={<Admin />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
