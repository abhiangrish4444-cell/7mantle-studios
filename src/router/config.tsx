import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Projects from "../pages/projects/page";
import Profile from "../pages/profile/page";
import Contact from "../pages/contact/page";
import Jobs from "../pages/jobs/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;