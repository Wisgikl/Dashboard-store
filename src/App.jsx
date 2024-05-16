import { RiMenuFill } from "react-icons/ri";
import { Sidebar } from "./components/Sidebar";
function App() {
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar />
      {/*Menu movil*/}
      <nav className=" bg-[#1F1D2B] lg:hidden">
        <button>
          <RiMenuFill />
        </button>
      </nav>
    </div>
  );
}

export default App;
