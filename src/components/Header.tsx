import Image from "next/image";
import Link from "next/link";
import naver from "../../public/naver.png";

type Props = {};
export default function Header({}: Props) {
  return (
    <header className="p-2">
      <div className="flex items-center justify-between">
        <Link href="/" className="shadow-lg p-1">
          <Image src={naver} alt="naver" width={110} height={20} />
        </Link>
        <div className="flex">
          <div>버튼1</div>
          <div>버튼2</div>
        </div>
      </div>
    </header>
  );
}
