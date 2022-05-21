import { PrismicProvider } from "@prismicio/react";
import { client } from "../prismic";

const MyApp = ({ Component, pageProps }) => {
  // Your custom stuff here

  return (
    <PrismicProvider client={client}>
      <Component {...pageProps} />
    </PrismicProvider>
  );
}

export default MyApp;