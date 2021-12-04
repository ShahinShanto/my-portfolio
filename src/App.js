import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
