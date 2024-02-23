// List of project routes
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
const routes = [
    // route of home
   { path: "/*", element: <Home /> },
//route of movie details
   { path: "/Details/:characterID", element: <Details /> },
];

export default routes;