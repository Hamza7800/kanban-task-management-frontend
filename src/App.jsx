import { useState } from "react";
import { ThemeProvider } from "@mui/system";
import { Outlet } from "react-router-dom";
import { lightTheme, darkTheme } from "./styles/theme";
import { Section } from "./styles/pages/AppStyles";

function App() {
  const [theme, setTheme] = useState(darkTheme);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) =>
  //     prevTheme === lightTheme ? darkTheme : lightTheme
  //   );
  // };

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <Outlet />
      </Section>
    </ThemeProvider>
  );
}

export default App;
