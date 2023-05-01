import { useRoutes } from "react-router-dom";

import NotFound from "@/views/pages/NotFound/NotFound";
import HomeIndex from "../views/pages/Home/HomeIndex";
import NotebookIndex from "@/views/pages/Notebook/NotebookIndex";
import StatsIndex from "@/views/pages/Stats/StatsIndex";
import StockIndex from "@/views/pages/Stock/StockIndex";
import TradesIndex from "../views/pages/Trades/TradesIndex";



function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/",
            element: <HomeIndex />
        },
        {
            path: "/trades",
            element: <TradesIndex />
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
            path: "/notebook",
            element: <NotebookIndex />
        }
    ]);

    return routes;
}

export default CustomRoutes;