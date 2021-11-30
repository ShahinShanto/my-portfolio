import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import './App.css';
import Header from "./Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="home" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
