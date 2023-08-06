import Header from "@/components/Header";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { getFeedbackListFromFirestore } from "../../firebase/feedback";
import FeedbackSection from "@/components/feedback/FeedbackSection";
import { Feedback } from "@/types/feedback";

interface Props {
  initialFeedbackList: Feedback[];
}

export default function Feedback({ initialFeedbackList }: Props) {
  return (
    <>
      <NextSeo
        title="feedback page"
        description="매장 지도 서비스에 대한 피드백을 받습니다."
        canonical="https://next13-dynamic-map.vercel.app/"
        openGraph={{
          url: "https://next13-dynamic-map.vercel.app/",
        }}
      />
      <Header />
      <main
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          touchAction: "pinch-zoom",
        }}
      >
        <FeedbackSection initialFeedbackList={initialFeedbackList} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      initialFeedbackList: await getFeedbackListFromFirestore(),
    },
  };
};
