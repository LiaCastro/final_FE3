import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useReducer } from "react";
import {
  themeReducer,
  TOGGLE_LIGHT_THEME,
  TOGGLE_DARK_THEME,
} from "./Components/utils/themeReducer";

const App = () => {
  const [state, dispatch] = useReducer(themeReducer, { theme: "light" });

  const toggleTheme = () => {
    if (state.theme === "light") {
      dispatch({ type: TOGGLE_DARK_THEME });
    } else {
      dispatch({ type: TOGGLE_LIGHT_THEME });
    }
  };
  return (
    <div className={`App ${state.theme}`}>
      <Navbar themeChange={toggleTheme} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
