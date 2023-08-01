import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
};

const SWRConfigProvider = ({ children }: Props) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRConfigProvider;
