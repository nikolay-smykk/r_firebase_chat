import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import {Navbar} from "./components/Navbar"


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>
    <div className="App">
      init
    </div>
    </BrowserRouter>
  );
}

export default App;
