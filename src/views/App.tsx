import React, { useEffect } from 'react';
import Layout from "./pages/Layout"
import { getTrades } from '@/services/apis/demo/requests/trades';
import { useDispatch } from 'react-redux';
import { setTrades } from '@/store/features/trades/tradesSlice';
import { getNotes } from '@/services/apis/demo/requests/notes';
import { setNotes } from '@/store/features/notes/notesSlice';

function App() {
    const dispatch = useDispatch()

    function fetchFakeData() {
        const trades = getTrades()
        const notes = getNotes()

        dispatch(setTrades(trades))
        dispatch(setNotes(notes))
    }

    useEffect(() => {
        fetchFakeData();
    }, [])

    return (
        <>
            <Layout />
        </>
    );
}

export default App