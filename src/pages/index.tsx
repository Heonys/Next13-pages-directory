import { Open_Sans } from "next/font/google";
const sans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return <main className={sans.className}></main>;
}
