import Intro from "../components/Intro";
import Setup from "../components/Setup";
import Demo from "../components/Demo";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {

    return (
        <>
            <Head>
                <title>NextJs Truffle Box</title>
                <meta name="description" content="NextJs Truffle Box"/>
            </Head>
            <Intro />
            <hr />
            <Setup />
            <hr />
            <Demo />
            <hr />
            <Footer />
        </>
    );
};