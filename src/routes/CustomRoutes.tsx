import { useRoutes } from "react-router-dom";

import NotFound from "../views/pages/NotFound/NotFound";
import Home from "../views/pages/Home";

import DashboardIndex from "../views/pages/Dashboard/DashboardIndex";
import TradingIndex from "../views/pages/Dashboard/Trading/TradingIndex";

function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/dashboard",
            element: <DashboardIndex />
        },
        {
            path: "/dashboard/trades",
            element: <TradingIndex />
        }
    ]);

    return routes;
}

export default CustomRoutes;