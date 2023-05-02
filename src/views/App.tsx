import React, { useEffect } from 'react';
import Layout from "./pages/Layout"
import { getTrades } from '@/database/services/apis/demo/requests/trades';
import { useDispatch } from 'react-redux';
import { setTrades } from '@/store/features/trades/tradesSlice';

function App() {
    const dispatch = useDispatch()

    function fetchFakeData() {
        const trades = getTrades()

        dispatch(setTrades(trades))
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