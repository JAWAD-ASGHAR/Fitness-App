import { useAuth0 } from "@auth0/auth0-react";
import DashboardBody from "./Pages/DashboardBody";
import LandingPageBody from "./Pages/LandingPageBody";
import { ThemeContext } from "./store/theme";

function App() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        {isAuthenticated ? <DashboardBody /> : <LandingPageBody />};
      </ThemeContext.Provider>
    </>
  );
}

export default App;
