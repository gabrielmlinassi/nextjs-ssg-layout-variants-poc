import { VariantsProvider } from "@/contexts/VariantsContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VariantsProvider initialVariant={pageProps.initialVariant ?? "a"}>
      <Component {...pageProps} />
    </VariantsProvider>
  );
}
