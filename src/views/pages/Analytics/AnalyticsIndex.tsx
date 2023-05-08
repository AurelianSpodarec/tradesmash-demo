import PageHeader from "@/views/components/PageHeader";
import Container from "../_components/Container";
import Card from "@/views/atoms/Card";
import ChartLine from "../../components/Charts/ChartLine";
import ChartPie from "../../components/Charts/ChartPie";

function AnalyticsIndex() {
    return (
        <Container>
            <PageHeader title="Analytics" />

            <section>
                <div className="grid grid-cols-2  gap-4 h-auto">
                <Card className="h-full">
                    <h1 className="text-2xl font-semibold mb-6">Programming Languages</h1>
                    <div  className="h-[400px]">
                        <ChartLine aspect={1.7} legend={true} xAxie={true} yAxie={true} /> 
                    </div>
                </Card>
                <Card>
                    <h1 className="text-2xl font-semibold mb-6">Statsitics Pie Chart</h1>
                    <div className="h-[400px]">
                        <ChartPie legend={true} xAxie={true} yAxie={true} toolTip={true}/>
                    </div>
                </Card>
                </div>

            </section>
        </Container>
    )
}

export default AnalyticsIndex;