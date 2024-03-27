import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserEvents from "./pages/UserEvents";
import Explore from "./pages/Explore";
import Manage from "./pages/Manage";
import CreateEvent from "./pages/CreateEvent";
import Admin from "./pages/Admin";
import Organizer from "./pages/Organizer";
import PrivateRoutes from "./utils/PrivateRoutes";
import PrivateUserRoutes from "./utils/PrivateUserRoutes";
import PrivateOrganizerRoutes from "./utils/PrivateOrganizerRoutes";
import PrivateAdminRoutes from "./utils/PrivateAdminRoutes";
import Error from "./pages/Error";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route element={<PrivateRoutes />}>
						<Route path="*" element={<Error />}></Route>
						<Route element={<PrivateAdminRoutes />}>
							<Route path="/admin" element={<Admin />} />
						</Route>

						<Route element={<PrivateUserRoutes />}>
							<Route exact path="/userevents" element={<UserEvents />} />
							<Route path="/explore" element={<Explore />} />
						</Route>

						<Route element={<PrivateOrganizerRoutes />}>
							<Route path="/manage/:eventId" element={<Manage />} />
							<Route path="/createevent" element={<CreateEvent />} />
							<Route path="/organizer" element={<Organizer />} />
						</Route>
					</Route>
					<Route exact path="/" element={<LandingPage />} />
					<Route exact path="/signin" element={<SignIn />} />
					<Route exact path="/signup" element={<SignUp />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
