import { Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/login";
import { useAuth } from "../store/useAuth";

const AppRoutes = () => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route element={<Outlet />}>
        {user ? (
          <>
            <Route path="/*" element={<PrivateRoutes />} />
          </>
        ) : (
          <>
            <Route
              path="/auth"
              element={
                <Suspense fallback={<p>...Login</p>}>
                  <Login />
                </Suspense>
              }
            />
            <Route path="/*" element={<Navigate to="/auth" />} />
          </>
        )}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
