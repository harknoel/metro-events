import { ThemeProvider } from "styled-components";
import Header from "./Header";
import themeConfig from "./styles/themeConfig";
import Hero from "./Hero";

const LandingPage = () => {
  return (
    <div>
      <ThemeProvider theme={themeConfig}>
        <Header />
        <Hero />
      </ThemeProvider>
    </div>
  );
};

export default LandingPage;
