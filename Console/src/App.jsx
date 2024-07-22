import { useAuth0 } from "@auth0/auth0-react";
import DashboardBody from "./Pages/DashboardPageBody";
import LandingPageBody from "./Pages/LandingPageBody";
import LoaderPageBody from "./Pages/LoaderPageBody";
import ThemeContextProvider, { ThemeContext } from "./store/ThemeStore";
import HomeBody from "./Pages/HomePageBody";

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
        {isAuthenticated ? <HomeBody /> : <LandingPageBody />};
      </ThemeContextProvider>
    </>
  );
}

export default App;
