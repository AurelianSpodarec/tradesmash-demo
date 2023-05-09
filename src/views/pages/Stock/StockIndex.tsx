import Card from "@/views/atoms/Card";
import Container from "../_components/Container";
import PageHeader from "@/views/components/PageHeader";

function StockIndex() {
    return (
        <Container>
            <PageHeader title="Stock Exchange" />
            
            <Card>
                List of all invested Stock names
            </Card>
        </Container>
    )
}

export default StockIndex;
