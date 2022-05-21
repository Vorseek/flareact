import { PrismicProvider } from "@prismicio/react";
import { client } from "../prismic";

export default function MyApp({ Component, pageProps }) {
  // Your custom stuff here

  return (
    <PrismicProvider client={client}>
      <Component {...pageProps} />
    </PrismicProvider>
  );
}
