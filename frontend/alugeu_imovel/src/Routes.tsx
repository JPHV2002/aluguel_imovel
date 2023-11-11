import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ChildrenProp } from "./types/tyopes";
import { Login } from "./pages/Login";

const TOKEN = localStorage.getItem("token");

const PrivateRoute = ({ children }: ChildrenProp) => {
  if (!TOKEN) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};
