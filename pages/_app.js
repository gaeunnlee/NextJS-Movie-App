import Layout from "../components/Layout";
import "../styles/globals.css"

export default function App({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps}/>
            <style jsx global>{`
                * {
                    margin: 0;
                    padding: 0;
                }
                #conent {
                    display: flex;                   
                }
            `}</style>
        </Layout>
    );
}