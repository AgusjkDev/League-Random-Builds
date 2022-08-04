import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>League Random Builds</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Agustín Arnoldi" />
            </Head>

            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
