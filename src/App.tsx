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
               

<<<<<<< HEAD
                <Route path="/contacts" element={<Contact />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
=======
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace={true} />} />
            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/features" element={<MembersList />} />
              <Route path="/usecases" element={<Brand />} />
              <Route path="/business" element={<Business />} />
              <Route path="/wellness" element={<Wellness />} />
              <Route path="/lifestyle" element={<Artist />} />
              <Route path="/entrepreneur" element={<Homemaker />} />
              <Route path="/brand" element={<Brand />} />
              <Route path="/members" element={<MembersList />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/communities" element={<Communitylist />} />
              <Route path="/subscription" element={<Plans />} />
              <Route path="/post" element={<Post />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-uses" element={<TermsAndCondition />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>

    </>
>>>>>>> parent of b7c483b (updates)
  );
};

export default App;
