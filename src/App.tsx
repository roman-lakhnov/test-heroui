import { Route, Routes } from "react-router-dom";

import TablePage from "./pages/table";
import ListPage from "./pages/list";

function App() {
  return (
    <Routes>
      <Route element={<TablePage />} path="/" />
      <Route element={<ListPage />} path="/list" />
    </Routes>
  );
}

export default App;
