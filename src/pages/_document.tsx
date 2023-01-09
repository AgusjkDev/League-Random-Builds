import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
    const imagesToPreload = [
        "maps/aram-off.png",
        "maps/sr-off.png",
        "roles/top.svg",
        "roles/jungle.svg",
        "roles/mid.svg",
        "roles/bottom.svg",
        "roles/support.svg",
        "spells/barrier.png",
        "spells/clarity.png",
        "spells/cleanse.png",
        "spells/exhaust.png",
        "spells/flash.png",
        "spells/ghost.png",
        "spells/heal.png",
        "spells/ignite.png",
        "spells/mark.png",
        "spells/smite.png",
        "spells/teleport.png",
        "spells/jungle.png",
        "generate-hover.png",
        "generate-disable.png",
        "loading.gif",
    ];
    const soundsToPreload = ["gamemode.ogg", "generate.ogg", "select.ogg"];

    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="League Random Builds is, as its name says, a random build generator for the popular MOBA game League of Legends."
                />
                <meta
                    name="keywords"
                    content="League of Legends, LoL, League, Legends, Riot Games, Riot, Games, MOBA, Random, Build, Generator"
                />
                <meta property="og:title" content="League Random Builds" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://leaguerandombuilds.vercel.app" />
                <meta
                    property="og:description"
                    content="League Random Builds is, as its name says, a random build generator for the popular MOBA game League of Legends."
                />
                <meta
                    name="og:image"
                    content="https://raw.githubusercontent.com/ShadeDev7/League-Random-Builds/main/.github/preview.png?token=GHSAT0AAAAAABXAQCYWC27I77UF3SQ3GRGMYXLKAJQ"
                />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="1080" />
                <meta property="og:site_name" content="LeagueRandomBuilds" />
                <meta name="msapplication-TileImage" content="/favicon.png" />
                <link rel="apple-touch-icon" sizes="96x96" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                {imagesToPreload.map((src, i) => (
                    <link key={i} rel="preload" href={`/imgs/${src}`} as="image" />
                ))}
                <audio preload="auto">
                    {soundsToPreload.map((src, i) => (
                        <source key={i} src={`/sounds/${src}`} type="audio/ogg" />
                    ))}
                </audio>
            </Head>

            <body>
                <Main />

                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
