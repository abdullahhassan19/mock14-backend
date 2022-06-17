import { Route, Routes } from "react-router-dom";
import Navbar from "../Component/Navbar";
import PrivateRoute from "../Component/PrivateRoute";
import Login from "./Login";
import Users from "./Users";
import UsersPage from "./UsersPage";

function AllRoutes() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/users"
            element={
              // <PrivateRoute>
              <Users />
              // {/* </PrivateRoute> */}
            }
          />
          <Route
            path="/users/:id"
            element={
              <PrivateRoute>
                <UsersPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default AllRoutes;
