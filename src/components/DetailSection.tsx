import useCurrentStore from "@/hooks/useCurrentStore";
import styles from "../../public/styles/detail.module.scss";
import { useState } from "react";
import DetailContent from "./DetailContent";
import DetailHeader from "./DetailHeader";

const DetailSection = () => {
  const { currentStore } = useCurrentStore();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${styles.detailSection} ${expanded ? styles.expanded : ""} ${
        currentStore ? styles.selected : ""
      } `}
    >
      <DetailHeader
        currentStore={currentStore}
        expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
      />
      <DetailContent currentStore={currentStore} expanded={expanded} />
    </div>
  );
};
export default DetailSection;
