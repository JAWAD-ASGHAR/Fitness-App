import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <Header />
          <Statistics />
        </div>
      </div>
    </>
  );
}

export default App;
