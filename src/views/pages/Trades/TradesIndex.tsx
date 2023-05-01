import { useDispatch, useSelector } from 'react-redux';
import PageContent from '../_components/PageContent';

function TradesIndex() {
    const reduxTrades = useSelector((state:any) => state.trades);
    const trades = reduxTrades.trades

    return (
        <PageContent>
            Trades
        </PageContent>
    )
}


export default TradesIndex;