import Card from "@/views/components/Card";
import Container from "../_components/Container";
import PageHeader from "@/views/components/PageHeader";

// function PageTitle() {
//     return (

//     )
// }

function HomeIndex() {

    return (
        <Container>
           
            <PageHeader title="Overview" />

            <section className="mb-4">

                <Card>
                    Chatjs
                </Card>

            </section>

            <section className="mb-4">

                <div className="grid grid-cols-4 gap-4">
                    <Card>Hi</Card>
                    <Card>Hi</Card>
                    <Card>Hi</Card>
                    <Card>Hi</Card>
                </div>

            </section>
           
        </Container>
    )
}

export default HomeIndex;