import { Link } from "react-router-dom";
import LayoutMain from "../../layouts/LayoutMain/LayoutMain";

function Home() {
    return (
        <LayoutMain> 


            <section className="relative isolate pt-14">

                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

                <div className="py-24 sm:py-32 lg:pb-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">


                    <h1 className="text-7xl font-bold tracking-tight text-black sm:text-6xl">
                        Your trading is rich in data. <span className="text-skin-brand-500">Exploit it</span>.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-700">
                        Get insights on all of your trades and improve your P&L.
            
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/dashboard"
                            className="rounded-md text-white bg-skin-brand-500 px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                        >
                            Get started
                        </Link>
                        <Link
                            to="/dashboard"
                            className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                        >
                            Learn More
                        </Link>

                    </div>
                    </div>
                
                    <div className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24">
                        <img src="https://www.tradesmash.com/home.png" alt="image editor"/>
                    </div>

                </div>
                </div>
                <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
                >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
                </div>
            </section>
        

            <section className="container mx-auto mb-32 max-w-2xl prose md:prose-lg lg:prose-xl text-black">
                <h3 className="font-sans font-semibold">Dear trader,</h3>
                <p>I get it.</p>
                <p>Trading is hard. <strong>Really hard.</strong></p>
                <p>You never know where your next big trade is coming from.</p>
                <p>You’re always kicking yourself because you should’ve seen the opportunity.</p>
                <p>You wish you hadn’t sold too early or you wish you’d bought more watching it rise.</p>
                <p>And to top it all off, you’re drowning in uncertainty.</p>
                <p><em>"Should I buy?" "Should I sell?" "What’s the market going to do?" "Where’s the bottom?"</em></p>
                <p>So many questions!</p>
                <p>You’re reading this because maybe your trading isn’t where you want it to be.</p>
                <p>Or maybe you’re already flying but want better tools.</p>
                <p>A better way to capture rich data.</p>
                <p>An easier way to learn from it.</p>
                <p>More ease.&nbsp;</p>
                <p>More time.&nbsp;</p>
                <p><strong>More money.</strong></p>
                <p>Well, I’ve got some good news.</p>
                <p>I’m a trader myself and I’ve built Trade Smash to solve those problems.</p>
                <p>And the best news?</p>
                <p>It's completely free.</p>
                <p>We’ll be adding more features over time.</p>
            </section>



        
            <section className="bg-skin-brand-500">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">

                <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Start trading today
                    <br />
                    Start using our app today.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-800">
                    Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                    commodo do ea.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
                </div>

            </div>
            </section>
        


        </LayoutMain>
    )
}


export default Home;