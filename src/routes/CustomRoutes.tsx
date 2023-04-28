import { useRoutes } from "react-router-dom";

import NotFound from "../views/pages/NotFound/NotFound";
import Home from "../views/pages/Home";

import DashboardIndex from "../views/pages/Dashboard/DashboardIndex";
import TradingIndex from "../views/pages/Dashboard/Trading/TradingIndex";
import NotebookIndex from "@/views/pages/Dashboard/Notebook/NotebookIndex";
import TradeLogIndex from "@/views/pages/Dashboard/TradeLog/TradeLogIndex";
import StatsIndex from "@/views/pages/Dashboard/Stats/StatsIndex";

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
        },
        {
            path: "/dashboard/stats",
            element: <StatsIndex />
        },
        {
            path: "/dashboard/tradelog",
            element: <TradeLogIndex />
        },
        {
            path: "/dashboard/notebook",
            element: <NotebookIndex />
        }
    ]);

    return routes;
}

export default CustomRoutes;