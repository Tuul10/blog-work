import { Layout } from "@/components/Layout";
import { ThemeContextProvider } from "@/components/ThemeContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </Layout>
  );
}
