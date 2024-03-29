import { ThemeProvider } from "styled-components";
import themeConfig from "../config/themeConfig";
import GoBack from "../components/GoBack";
import PageNotFound from "../components/pageNotFound";

const Error = () => {
	return (
		<div>
			<ThemeProvider theme={themeConfig}>
				<GoBack />

				<PageNotFound />
			</ThemeProvider>
		</div>
	);
};

export default Error;
