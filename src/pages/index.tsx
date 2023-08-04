import DetailSection from "@/components/DetailSection";
import Header from "@/components/Header";
import MapSection from "@/components/MapSection";
import UseStore from "@/hooks/useStore";
import { Store } from "@/types/store";
import { useEffect } from "react";

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
      <Header />
      <main className="relative w-full h-full overflow-hidden">
        <MapSection />
        <DetailSection />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const stores = (await import("../../public/stores.json")).default;
  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
