import Header from "@/components/Header";
import MapSection from "@/components/MapSection";
import { FeedbackIcon, ShareIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import UseStore from "@/hooks/useStore";
import { Store } from "@/types/store";
import Link from "next/link";
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
      <Header>
        <div className="flex space-x-2">
          <Button>
            <Link href="">
              <ShareIcon />
            </Link>
          </Button>
          <Button>
            <Link href="/feedback">
              <FeedbackIcon />
            </Link>
          </Button>
        </div>
      </Header>

      <main className="w-full h-full">
        <MapSection />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const stores = (await import("../../public/stores.json")).default;
  console.log(stores);

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
