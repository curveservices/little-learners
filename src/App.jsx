import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const Layout = lazy(() => import("./layout/main/index.jsx"));
import LoadingSpinner from "./components/loadingSpinner/index.jsx";
import NotFound from "./pages/404";
const Home = lazy(() => import("./pages/home/index.jsx"));
const About = lazy(() => import("./pages/about/index.jsx"));
const LearningPlaying = lazy(() => import("./pages/learning/index.jsx"));
const GalleryPage = lazy(() => import("./pages/gallery/index.jsx"));
const Contact = lazy(() => import("./pages/contact/index.jsx"));
const Policies = lazy(() => import("./pages/policies/index.jsx"))
import "./App.scss";

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
        <Route
          path="/about-us"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/learning-and-playing"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LearningPlaying />
            </Suspense>
          }
        />
        <Route
          path="/gallery"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <GalleryPage />
            </Suspense>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          }
        />
        <Route 
          path="/policies-and-procedures"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Policies/>
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
