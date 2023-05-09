import books from './../../../database/migrations/fakeBooks.json';

import Container from "../_components/Container";

import PageHeader from "@/views/components/PageHeader";
import Card from "@/views/atoms/Card";
import CardBook from '@/views/components/Card/CardBook';

function ResourcesIndex() {
    return (
        <Container>
            
            <PageHeader title="Resources" />

            <div className="grid grid-cols-12 gap-4">
                <aside className="col-span-3">
                <Card>

                    Sidebar categories filter

                </Card>
                </aside>

                <section className="col-span-9">
                <Card>

                    <div className="grid grid-cols-4 gap-6">

                        {books && books.map((book:any) => {
                            return (
                                <CardBook key={book.title} title={book.title} image={book.image} />
                            )
                        })}
                    </div>

                </Card>
                </section>
            </div>
        </Container>
    )
}

export default ResourcesIndex;
