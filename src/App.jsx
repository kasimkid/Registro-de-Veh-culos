import React, { useState } from "react";
import { MyRoutes } from "./router/routes";
export const ThemeContext = React.createContext(null)


function App() {
  const [theme, setTheme]=useState('ligth')



  return (
    <>
      <MyRoutes/>
    </>
  );
}

export default App;
