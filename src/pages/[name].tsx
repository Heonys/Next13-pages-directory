import DetailContent from "@/components/DetailContent";
import DetailHeader from "@/components/DetailHeader";
import { Store } from "@/types/store";
import styles from "../../public/styles/detail.module.scss";
import { NextSeo } from "next-seo";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import useCurrentStore from "@/hooks/useCurrentStore";

type Props = {
  store: Store;
};

const DetailPage: NextPage<Props> = ({ store }) => {
  const expanded = true;

  const router = useRouter();
  const { setCurrentStore } = useCurrentStore();

  const goToMap = () => {
    setCurrentStore(store);
    router.push(`
      /?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}
    `);
  };

  return (
    <>
      <NextSeo title="detail page" description="매장에 대한 자세히 정보" />
      <div
        className={`${styles.detailSection} ${styles.expanded} ${styles.selected} `}
      >
        <DetailHeader
          currentStore={store}
          expanded={expanded}
          onClick={() => goToMap()}
        />
        <DetailContent currentStore={store} expanded={expanded} />
      </div>
    </>
  );
};

export default DetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import("../../public/stores.json")).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import("../../public/stores.json")).default;
  const store = stores.find((store) => store.name === params?.name);

  return { props: { store } };
};
