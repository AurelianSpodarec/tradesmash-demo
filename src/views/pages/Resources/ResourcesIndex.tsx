import PageHeader from "@/views/components/PageHeader";
import Container from "../_components/Container";
import Card from "@/views/atoms/Card";

const books = [
    {
        title: "Alpha Trader: The Mindset, Methodology and Mathematics of Professional Trading",
        image: "https://m.media-amazon.com/images/I/51N9FHWBfWS.jpg",
        author: "Brent Donnelly"
    },
    {
        title: "One Good Trade: Inside the Highly Competitive World of Proprietary Trading",
        image: "https://m.media-amazon.com/images/I/51c7ZOayErL._SY346_.jpg",
        author: "Mike Bellafiore"
    },
    {
        title: "The UK Stock Trading Handbook",
        image: "https://shiftingshares.b-cdn.net/wp-content/uploads/2021/01/ebook-the-uk-stock-trading-handbook.jpg",
        author: "Michael Taylor",
    },
    {
        title: "Trade Like a Stock Market Wizard: How to Achieve Super Performance in Stocks in Any Market ",
        image: "https://m.media-amazon.com/images/P/0071807225.01._SCLZZZZZZZ_SX500_.jpg",
        author: "Mark Minervini"
    },
    {
        title: "The Guide to Breakouts",
        image: "https://shiftingshares.b-cdn.net/wp-content/uploads/2021/01/ebook-tradingbreakouts-guide.jpg",
        author: "Michael Taylor",
    },
    {
        title: "Unknown Market Wizards by Jack Schwager",
        image: "https://m.media-amazon.com/images/I/51V-e1UUdJL._SY346_.jpg",
        author: "Jack D. Schwager"
    },
    {
        title: "The Sceptical Investor",
        image: "https://m.media-amazon.com/images/I/41OsrBJeorL._SY346_.jpg",
        author: "John Stepek",
    },
    {
        title: "The Guide to Shorting",
        image: "https://shiftingshares.b-cdn.net/wp-content/uploads/2021/01/ebook-shortselling-guide.jpg",
        author: "Michael Taylor",
    },
    {
        title: "The Art of Execution",
        image: "https://m.media-amazon.com/images/I/5158HrCHutL.jpg",
        author: "Lee Freeman-Shor",
    },
    {
        title: "Monster Stocks",
        image: "https://images-eu.ssl-images-amazon.com/images/I/41DwHIwBwAL._AC_UL232_SR232,232_.jpg",
        author: "John Boik",
    },
    {
        title: "How to Make 6 Figures in Stocks",
        image: "https://shiftingshares.b-cdn.net/wp-content/uploads/2021/01/ebook-howtomake6figures.jpg",
        author: "Michael Taylor",
    },
    {
        title: "The Playbook",
        image: "https://m.media-amazon.com/images/I/41UhoVwT6CL._SY346_.jpg",
        author: "Mike Bellafiore",
    },
    {
        title: "Reminiscences of a Stock Operator",
        image: "https://m.media-amazon.com/images/I/51H6WGw4O9L._SY346_.jpg",
        author: "Edwin Lefevre",
    },
    {
        title: "Atomic Habits by James Clear",
        image: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY346_.jpg",
        author: "James Clear",
    },


]


// Learn how to read screens
// Learn how to read charts
// 

function CardBook({ title, image }:any) {
    return (
        <article className="relative flex flex-col">
            <div className="mb-1">
                <img className="h-full rounded-lg border w-full  h-[370px] object-cover" src={image} />
            </div>
            <div className="py-2">
                <h3 className="font-medium text-lg">{title}</h3>
            </div>
        </article>
    )
}

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
                                <CardBook title={book.title} image={book.image} />
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