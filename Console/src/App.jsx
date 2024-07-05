import { useAuth0 } from "@auth0/auth0-react";
import DashboardBody from "./Pages/DashboardBody";
import LandingPageBody from "./Pages/LandingPageBody";

function App() {

  const {isAuthenticated} = useAuth0();

  return (
    <>
      {isAuthenticated ? <DashboardBody/> : <LandingPageBody/>}
    </>
  );
}

export default App;