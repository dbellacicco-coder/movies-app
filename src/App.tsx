import { Suspense, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes/routes";
import Navbar from "./components/Navbar";

function App() {
  const [testing, setTesting] = useState("App runningf");
  console.log(testing);
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div>
          <Navbar />

          <Routes>
            {routes.map((route) => {
              const { id, path, Component } = route;
              return <Route key={id} path={path} element={<Component />} />;
            })}
            <Route path="/*" element={<Navigate to="/home" replace />} />
          </Routes>
          <h1>Aqui el Footer</h1>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
