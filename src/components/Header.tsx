import Image from "next/image";
import Link from "next/link";
import naver from "../../public/naver.png";
import Button from "./ui/Button";
import { FeedbackIcon, ShareIcon } from "./icons";
import useMap from "@/hooks/useMap";
import { useRouter } from "next/router";
import { useCallback } from "react";
import copy from "copy-to-clipboard";

type Props = {
  children?: React.ReactNode;
};
export default function Header({ children }: Props) {
  const { resetMapOptions, getMapOptions } = useMap();

  const router = useRouter();
  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions();
    if (!mapOptions) return;
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;

    router.replace(query);
    copy(location.origin + query);
  }, [router, getMapOptions]);

  return (
    <header className="p-2">
      <div className="flex items-center justify-between">
        <Link href="/" onClick={resetMapOptions} className="shadow-lg p-1">
          <Image src={naver} alt="naver" width={110} height={20} />
        </Link>
        <div className="flex space-x-2">
          <Button onClick={replaceAndCopyUrl}>
            <ShareIcon />
          </Button>
          <Button>
            <Link href="/feedback">
              <FeedbackIcon />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
