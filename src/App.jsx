import { useState } from "react";
import { ThemeProvider } from "@mui/system";
import { Outlet } from "react-router-dom";
import { lightTheme, darkTheme } from "./styles/theme";
import { Section } from "./styles/pages/AppStyles";
import NavBar from "./components/Navbar/NavBar";

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    console.log("hi");
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <NavBar toggleTheme={toggleTheme} />
        <Outlet />
      </Section>
    </ThemeProvider>
  );
}

export default App;
