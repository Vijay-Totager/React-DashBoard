import { createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Layout } from "./Components/Layout/Layout";
import { lazy, Suspense } from "react";
import ErrorBoundary from "Components/ErrorBoundary/Error";

const Home = lazy(() => import("./Components/Home/Home"));


const Contact = lazy(() => import("./Components/Contact/Contact"));

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/home" replace={true} />}
              />
              <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />} />
               

                <Route path="/contacts" element={<Contact />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
};

export default App;
