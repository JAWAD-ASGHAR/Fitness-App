import { useAuth0 } from "@auth0/auth0-react";
import DashboardBody from "./Pages/DashboardBody";
import LandingPageBody from "./Pages/LandingPageBody";
import LoaderPageBody from "./Pages/LoaderPageBody";
import ThemeContextProvider, { ThemeContext } from "./store/ThemeStore";

function App() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();
  if (isLoading) {
    return (
      <>
        <LoaderPageBody />
      </>
    );
  }

  return (
    <>
      <ThemeContextProvider>
        {isAuthenticated ? <DashboardBody /> : <LandingPageBody />};
      </ThemeContextProvider>
    </>
  );
}

export default App;
