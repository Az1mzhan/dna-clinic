import { Suspense, lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CircularProgress } from "@mui/material";

const MainPage = lazy(() =>
  import("./pages/main-page/MainPage").catch((err) => {
    console.error(err);
    return { default: CircularProgress };
  })
);

const MedicsPage = lazy(() =>
  import("./pages/medics-page/MedicsPage").catch((err) => {
    console.error(err);
    return { default: CircularProgress };
  })
);

const DiagnosticsPage = lazy(() =>
  import("./pages/diagnostics-page/DiagnosticsPage").catch((err) => {
    console.error(err);
    return { default: CircularProgress };
  })
);

const ConsultationPage = lazy(() =>
  import("./pages/consultation-page/ConsultationPage").catch((err) => {
    console.error(err);
    return { default: CircularProgress };
  })
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <Suspense fallback={<CircularProgress />}>
            <MainPage />
          </Suspense>
        }
      />
      <Route
        path="medics"
        element={
          <Suspense fallback={<CircularProgress />}>
            <MedicsPage />
          </Suspense>
        }
      />
      <Route
        path="diagnostics"
        element={
          <Suspense fallback={<CircularProgress />}>
            <DiagnosticsPage />
          </Suspense>
        }
      />
      <Route
        path="consultation"
        element={
          <Suspense fallback={<CircularProgress />}>
            <ConsultationPage />
          </Suspense>
        }
      />
    </Route>
  )
);
