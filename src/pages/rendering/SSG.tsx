import { GetStaticProps } from "next";

type Props = {
  data: number;
};

export default function StaticSiteGenerator({ data }: Props) {
  return <div>{data}</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.random()), 1000);
  });
  // revalidate 속성을 통해 ISR 방식으로 동작가능
  return {
    props: { data },
    revalidate: 3,
  };
};
