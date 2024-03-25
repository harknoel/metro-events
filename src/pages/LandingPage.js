import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import themeConfig from "../components/styles/themeConfig";
import Hero from "../components/Hero";

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
