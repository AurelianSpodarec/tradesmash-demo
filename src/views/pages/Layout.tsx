import react, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "../../routes/CustomRoutes";
import { fetchTrades } from "@/database/fakeTrades";
import { fetchNotes } from "@/database/fakeNotes";
import { setNotes } from '@/store/features/notes/notesSlice';
import { setTrades } from '@/store/features/trades/tradesSlice';

function Layout() {
    const dispatch = useDispatch() 

    function fetchProjectData() {
        const trades = fetchTrades()
        const notes = fetchNotes();

        dispatch(setTrades(trades))
        dispatch(setNotes(notes))
    }

    useEffect(() => {
        fetchProjectData();
        // if(projectID !== null && shouldShow) {
        //     setisLoading(false)
        // }
    }, []);

    return (
        <BrowserRouter>
            <CustomRoutes />
        </BrowserRouter>
    )
}

export default Layout;