import { GetServerSideProps } from "next";

type Props = {
  data: number;
};

export default function ServerSideRendering({ data }: Props) {
  return <div>{data}</div>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.random()), 1000);
  });

  return {
    props: { data },
  };
};
