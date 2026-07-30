import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { GuestRoute } from "./components/GuestRoute";

import DashBoard from "./sections/Dashboard";
import Books from "./sections/Books";
import Loans from "./sections/Loans";
import Authors from "./sections/Authors";
import Users from "./sections/Users";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashBoard />} />
          <Route path="books" element={<Books />} />
          <Route path="loans" element={<Loans />} />
          <Route path="authors" element={<Authors />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        ></Route>
        {/* <Route path="/auth/callback" element={<AuthCallback />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
