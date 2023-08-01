import SWRConfigProvider from "@/hooks/SWRConfigProvider";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <SWRConfigProvider>
        <body className="w-full max-w-xl mx-auto">
          <Main />
          <NextScript />
        </body>
      </SWRConfigProvider>
    </Html>
  );
}
