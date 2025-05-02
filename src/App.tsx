import { Route, Routes } from "react-router-dom";
import WebRoute from "./web-route";
import DashboardRoute from "./dashbard-route";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<WebRoute />} />
        <Route path="/dashboard/*" element={<DashboardRoute />} />
      </Routes>
    </>
  );
}

export default App;
