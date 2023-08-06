import Header from "@/components/Header";
import { NextSeo } from "next-seo";

export default function Feedback() {
  return (
    <>
      <NextSeo
        title="feedback page"
        description="매장 지도 서비스에 대한 피드백을 받습니다."
        canonical="https://next13-dynamic-map.vercel.app/"
      />
      <Header />
    </>
  );
}
