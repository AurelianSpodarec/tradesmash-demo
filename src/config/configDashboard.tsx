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
            icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M7 14l3 -3l2 2l3 -3l2 2"></path>
          </svg>
        },
        {
            id: 200,
            name: "Stocks",
            url: "/stocks",
            icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"></path>
          </svg>,
        },
        // {
        //     id: 200,
        //     name: "Daily Stats",
        //     url: "/stats",
        //     icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //     <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
        //     <path d="M18 14v4h4"></path>
        //     <circle cx="18" cy="18" r="4"></circle>
        //     <path d="M15 3v4"></path>
        //     <path d="M7 3v4"></path>
        //     <path d="M3 11h16"></path>
        //   </svg>
        // },
        {
            id: 10,
            name: "Notebook",
            url: "/notebook",
            icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"></path>
            <line x1="13" y1="8" x2="15" y2="8"></line>
            <line x1="13" y1="12" x2="15" y2="12"></line>
          </svg>
        }
    ]
}