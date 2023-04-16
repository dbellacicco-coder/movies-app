import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes/routes";
import Layout from "./components/common/Layout";
import LogInPage from "./pages/LogInPage";
import { Home } from "./pages";
import MoviePage from "./pages/MoviePage";

const APPRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => {
          const { id, path, Component } = route;
          return <Route key={id} path={path} element={<Component />} />;
        })}
        <Route path="/movie/:id" element={<MoviePage />} />
      </Route>
      <Route path="/login" element={<LogInPage />} />
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default APPRouter;
