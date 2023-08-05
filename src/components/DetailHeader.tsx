import { IoIosArrowUp } from "react-icons/io";
import styles from "../../public/styles/detail.module.scss";
import headerStyles from "../../public/styles/header.module.scss";

import { Store } from "@/types/store";
import { AiOutlineShareAlt } from "react-icons/ai";
import copy from "copy-to-clipboard";

type Props = {
  currentStore?: Store;
  expanded: boolean;
  onClick: () => void;
};
export default function DetailHeader({
  currentStore,
  expanded,
  onClick,
}: Props) {
  return (
    <div className={styles.header}>
      <button
        className={`${styles.arrowButton} ${expanded ? styles.expanded : ""}`}
        onClick={onClick}
        disabled={!currentStore}
        aria-label={expanded ? "접기" : "펼치기"}
      >
        <IoIosArrowUp size={20} color="#666666" />
      </button>
      {!currentStore && <p className={styles.title}>매장을 선택해주세요</p>}
      {currentStore && (
        <div className={styles.flexRow}>
          <p className={styles.title}>{currentStore.name}</p>
          <button
            className={headerStyles.box}
            onClick={() => {
              copy(location.origin + "/" + currentStore.name);
            }}
            aria-label="매장정보 클립보드에 복사"
          >
            <AiOutlineShareAlt size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
