import DetailSection from "@/components/DetailSection";
import Header from "@/components/Header";
import MapSection from "@/components/MapSection";
import UseStore from "@/hooks/useStore";
import { Store } from "@/types/store";
import { useEffect } from "react";
import { NextSeo } from "next-seo";

type Props = {
  stores: Store[];
};

export default function Home({ stores }: Props) {
  const { initializeStores } = UseStore();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <>
      <NextSeo
        title="next-pages-directory"
        description="naver dynamic map application"
        canonical="https://next13-dynamic-map.vercel.app/"
        openGraph={{
          url: "https://next13-dynamic-map.vercel.app/",
        }}
      />
      <Header />
      <main className="relative w-full h-full overflow-hidden">
        <MapSection />
        <DetailSection />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const stores = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
  ).then((response) => response.json());

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
