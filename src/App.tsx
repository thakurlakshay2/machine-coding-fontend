import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MACHINE_CODING_DATA } from "../Constants/CodingList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {MACHINE_CODING_DATA.map((data) => {
            return <Route path={data.path} element={data.render} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
