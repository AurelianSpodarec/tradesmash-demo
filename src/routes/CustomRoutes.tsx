import { useRoutes } from "react-router-dom";

import HomeIndex from "../views/pages/Home/HomeIndex";

import TradingIndex from "../views/pages/Trading/TradingIndex";
import NotebookIndex from "@/views/pages/Notebook/NotebookIndex";
import TradeLogIndex from "@/views/pages/TradeLog/TradeLogIndex";
import StatsIndex from "@/views/pages/Stats/StatsIndex";
import StockIndex from "@/views/pages/Stock/StockIndex";

import NotFound from "@/views/pages/NotFound/NotFound";

function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "",
            element: <HomeIndex />
        },
        {
            path: "/trades",
            element: <TradingIndex />
        },
        {
            path: "/stocks",
            element: <StockIndex />
        },
        {
            path: "/stats",
            element: <StatsIndex />
        },
        {
            path: "/tradelog",
            element: <TradeLogIndex />
        },
        {
            path: "/notebook",
            element: <NotebookIndex />
        }
    ]);

    return routes;
}

export default CustomRoutes;