import useCurrentStore from "@/hooks/useCurrentStore";
import styles from "../../public/styles/detail.module.scss";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const DetailSection = () => {
  const { currentStore } = useCurrentStore();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${styles.detailSection} ${expanded ? styles.expanded : ""} ${
        currentStore ? styles.selected : ""
      } `}
    >
      <div className={styles.header}>
        <button
          className={styles.arrowButton}
          onClick={() => setExpanded((prev) => !prev)}
          disabled={!currentStore}
        >
          <IoIosArrowUp size={20} color="#666666" />
        </button>
        {!currentStore && <p className={styles.title}>매장을 선택해주세요</p>}
        {currentStore && <p className={styles.title}>{currentStore.name}</p>}
      </div>
    </div>
  );
};
export default DetailSection;
