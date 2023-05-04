import PageHeader from "@/views/components/PageHeader";
import Container from "../_components/Container";
import Card from "@/views/atoms/Card";
import ChartLine from "./ChartLine";
import ChartPie from "./ChartPie";

function AnalyticsIndex() {
    return (
        <Container>
            <PageHeader title="Analytics" />

            <section>
                <div className="grid grid-cols-2  gap-4 h-[500px]">
                <Card className="h-full">
                    <h1 className="text-2xl font-semibold mb-6">Programming Languages</h1>
                    <ChartLine /> 
                </Card>
                <Card>
                    <h1 className="text-2xl font-semibold mb-6">Statsitics Pie Chart</h1>
                    <ChartPie />
                </Card>
                </div>

            </section>
        </Container>
    )
}

export default AnalyticsIndex;