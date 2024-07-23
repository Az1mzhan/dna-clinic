import { FC } from "react";
import { PopularAnalysesCard } from "../popular-analyses-card/PopularAnalysesCard";
import { defaultAnalysesGroup } from "../../types/AnalysesGroup";
import { Box, Typography } from "@mui/material";
import styles from "./popularAnalyses.module.css";

export const PopularAnalyses: FC = () => {
  return (
    <>
      <Box className={styles.analysesContainer}>
        <Typography className={styles.containerTitle}>
          Популярные анализы
        </Typography>
        <Box className={styles.groupsContainer}>
          {defaultAnalysesGroup.map((group, id) => (
            <PopularAnalysesCard key={id} group={group} />
          ))}
        </Box>
      </Box>
    </>
  );
};
