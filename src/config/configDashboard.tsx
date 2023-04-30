export const configDashboard = {
    navigation: [
        {
            id: 0,
            name: "Dashboard",
            url: "/",
            icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg>
        },
        {
            id: 10,
            name: "Trades",
            url: "/trades",
            icon: <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M7 14l3 -3l2 2l3 -3l2 2"></path>
          </svg>
        },
        {
            id: 10,
            name: "Trade Log",
            url: "/tradelog",
            icon: ""
        },
        {
            id: 200,
            name: "Stocks",
            url: "/stocks",
            icon: "",
        },
        {
            id: 200,
            name: "Daily Stats",
            url: "/stats",
            icon: ""
        },
        {
            id: 10,
            name: "Notebook",
            url: "/notebook",
            icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"></path>
            <line x1="13" y1="8" x2="15" y2="8"></line>
            <line x1="13" y1="12" x2="15" y2="12"></line>
          </svg>
        }
    ]
}