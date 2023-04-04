import Layout from "@/components/Layout";
import { AuthProvider } from "@/context/auth";
import { PostProvider } from "@/context/posts";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <AuthProvider>
            <PostProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PostProvider>
        </AuthProvider>
    );
}
