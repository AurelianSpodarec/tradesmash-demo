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
        image: "",
        author: "Mike Bellafiore"
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
        title: "The Art of Execution by Lee Freeman-Shor",
        image: "",
        author: "",
    },
    {
        title: "Monster Stocks",
        image: "",
        author: "",
    },
    {
        title: "How to Make 6 Figures in Stocks",
        image: "https://shiftingshares.b-cdn.net/wp-content/uploads/2021/01/ebook-howtomake6figures.jpg",
        author: "Michael Taylor",
    },
    {
        title: "The Playbook",
        image: "",
        author: "",
    },
    {
        title: "Reminiscences of a Stock Operator",
        image: "",
        author: "",
    },
    {
        title: "Atomic Habits by James Clear",
        image: "",
        author: "",
    },

    {
        title: "The UK Stock Trading Handbook",
        image: "https://shiftingshares.b-cdn.net/wp-content/uploads/2021/01/ebook-the-uk-stock-trading-handbook.jpg",
        author: "Michael Taylor",
    },

    {
        title: "The Guide to Shorting",
        image: "https://shiftingshares.b-cdn.net/wp-content/uploads/2021/01/ebook-shortselling-guide.jpg",
        author: "Michael Taylor",
    }
]



function CardBook({ title, image }:any) {
    return (
        <article className="relative flex flex-col">
            <div className="mb-2">
                <img className="h-full w-full" src={image} />
            </div>
            <div>
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

                    hi

                </Card>
                </aside>

                <section className="col-span-9">
                <Card>

                    <div className="grid grid-cols-4 gap-3">

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