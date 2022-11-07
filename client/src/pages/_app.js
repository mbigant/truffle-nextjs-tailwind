import '../styles/globals.css'

import {EthProvider} from "../contexts/EthContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <EthProvider>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8"/>
                <link rel="icon" href="favicon.ico" />
            </Head>
            <div className="" >
                <div className="container mx-auto max-w-3xl py-8">
                    <Component {...pageProps} />
                </div>
            </div>
        </EthProvider>
    )
}

export default MyApp;