import { routes } from "core/routes";
import { Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      {routes.map((route) => {
        const Component = route.component;
        return (
          <Route key={route.path} path={route.path} element={<Component />} />
        );
      })}
    </Routes>
  );
}
