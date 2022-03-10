import Home from "./pages/Home";
import { initTheme } from "./utils/toggleTheme";

function App() {
  initTheme();

  return <Home></Home>;
}

export default App;
