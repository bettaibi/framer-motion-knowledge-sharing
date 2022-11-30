import { routes } from "core/routes";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function Router() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        {routes.map((route) => {
          const Component = route.component;
          return (
            <Route key={route.path} path={route.path} element={<Component />} />
          );
        })}
      </Routes>
    </AnimatePresence>
  );
}
