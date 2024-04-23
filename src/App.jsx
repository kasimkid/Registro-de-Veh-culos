import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { MyRoutes } from "./router/routes";
import { Light, Dark } from "./styles/Themes";
import { BrowserRouter } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu";
//*import { triggerFocus } from "antd/es/input/Input";//*
export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const themeStyle = theme === "light" ? Light : Dark;

  const changeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container 
            className = {sidebarOpen ? "sidebarState active"
             : ""}>
                  <SidebarMenu 
                  sidebarOpen = { sidebarOpen }
                  setSidebarOpen = { setSidebarOpen }/>
                  <MyRoutes />
              <input type = 'checkbox'
              onClick={changeTheme}></input>
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
const Container = styled.div`
    display: grid;
    grid-template-columns: 90px auto;
    background: ${({ theme }) => theme.bgtotal};
    &.active {
      grid-template-columns: 300px auto;
    }
`;
export default App;

// styled.div`background: ${({theme})=> theme.body}`
