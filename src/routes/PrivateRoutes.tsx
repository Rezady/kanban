import { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import { useAuth } from "../store/useAuth";
import DetailTasks from "../pages/detail-tasks";

const PrivateRoutes = () => {
  const { user, setUser } = useAuth();
  const CreateTasks = lazy(() => import("../pages/create-tasks"));
  const ListTasks = lazy(() => import("../pages/list-tasks"));
  const handleLogout = () => {
    setUser("");
  };

  return (
    <Routes>
      <Route
        element={
          <Menu user={user} background="purple" onLogout={handleLogout}>
            <Outlet />
          </Menu>
        }
      >
        <Route
          path="create"
          element={
            <Suspense fallback={<p>...Loading</p>}>
              <CreateTasks />
            </Suspense>
          }
        />
        <Route
          path="detail"
          element={
            <Suspense fallback={<p>...Loading</p>}>
              <DetailTasks />
            </Suspense>
          }
        />
        <Route
          index
          element={
            <Suspense fallback={<p>...Loading</p>}>
              <ListTasks />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
