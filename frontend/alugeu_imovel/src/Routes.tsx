import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ChildrenProp } from "./types/tyopes";
import { Login } from "./pages/Login";
import { Homepage } from "./pages/home";
import { PageHeader } from "./components/PageHeader";
import { MyPage } from "./pages/myPage";

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
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <PageHeader>
                <Homepage />
              </PageHeader>
            </PrivateRoute>
          }
        />
        <Route
          path="/:id"
          element={
            <PrivateRoute>
              <PageHeader>
                <MyPage />
              </PageHeader>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};
