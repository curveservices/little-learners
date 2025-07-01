import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/main/index.jsx";
import LoadingSpinner from "./components/loadingSpinner/index.jsx";
import NotFound from "./pages/404";
import Home from "./pages/home/index.jsx";

import "./App.scss";
import About from "./pages/about/index.jsx";
import LearninPlaying from "./pages/learning/index.jsx";
import Gallery from "./pages/gallery/index.jsx";
import Contact from "./pages/contact/index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/about-us" element={
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        }
        />
        <Route path="/learning-and-playing" element={
            <Suspense fallback={<LoadingSpinner />}>
              <LearninPlaying />
            </Suspense>
        }
        />
        <Route path="/gallery" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Gallery />
          </Suspense>
        }
        />
        <Route path="/contact-us" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        }
        />
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        }
      />
    </>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
