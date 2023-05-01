import { useDispatch, useSelector } from 'react-redux';

function TradesIndex() {
    const reduxTrades = useSelector((state:any) => state.trades);
    const trades = reduxTrades.trades

    return (
        <div>
            Trades
        </div>
    )
}


export default TradesIndex;