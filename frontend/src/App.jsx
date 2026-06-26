import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./features/dashboard/pages/Dashboard";
import Order from "./features/dashboard/pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={< Order/>} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;