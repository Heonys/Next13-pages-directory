import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/components/NoSSR"), {
  ssr: false,
});

export default function ClientSideRendering() {
  return (
    <div>
      <NoSSR />
    </div>
  );
}
