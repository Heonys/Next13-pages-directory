import dynamic from "next/dynamic";

// const NoSSR = dynamic(() => import(""), {
//   ssr: false,
// });

export default function ClientSideRendering() {
  return <div>{/* <NoSSR /> */}</div>;
}
