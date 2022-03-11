import "~/src/css/main.css";
import "~/src/css/base.css.ts";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
