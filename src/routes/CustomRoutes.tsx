import { useRoutes } from "react-router-dom";

import NotFound from "@/views/pages/NotFound/NotFound";
import HomeIndex from "@/views/pages/Home/HomeIndex";

import TradesIndex from "@/views/pages/Trades/TradesIndex";
import StockIndex from "@/views/pages/Stock/StockIndex";
import StatsIndex from "@/views/pages/Stats/StatsIndex";
import JournalIndex from "@/views/pages/Journal/JournalIndex";
import CalendarIndex from "@/views/pages/Calendar/CalendarIndex";
import AnalyticsIndex from "@/views/pages/Analytics/AnalyticsIndex";
import ResourcesIndex from "@/views/pages/Resources/ResourcesIndex";

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
            path: "/analytics",
            element: <AnalyticsIndex />
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
            path: "/journal",
            element: <JournalIndex />
        },
        {
            path: "/resources",
            element: <ResourcesIndex />
        },
        {
            path: "/calendar",
            element: <CalendarIndex />
        }
    ]);

    return routes;
}

export default CustomRoutes;