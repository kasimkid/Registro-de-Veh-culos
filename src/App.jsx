import React, { useState } from "react";
import { MyRoutes } from "./router/routes";
import { Ligth, Dark } from "./styles/Themes";
import { BrowserRouter } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu";
export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("ligth");

  const themeStyle = theme === "light" ? Ligth : Dark;

  return (
    <>
        <BrowserRouter>
          <SidebarMenu/>
          <MyRoutes />
          </BrowserRouter>
    </>
  );
}

export default App;
