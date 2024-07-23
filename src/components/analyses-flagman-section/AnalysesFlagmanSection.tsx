import { FC } from "react";
import { AnalysisLinkCard } from "../analysis-link-card/AnalysisLinkCard";
import { defaultAnalysesLinks } from "../../types/AnalysisLink";
import { Box, Typography } from "@mui/material";
import styles from "./analysesFlagmanSection.module.css";

export const AnalysesFlagmanSection: FC = () => {
  return (
    <>
      <Box className={styles.container}>
        <Typography className={styles.containerTitle}>Анализы</Typography>
        <Box className={styles.linkCardsContainer}>
          {defaultAnalysesLinks.map((link, id) => (
            <AnalysisLinkCard key={id} link={link} />
          ))}
        </Box>
      </Box>
    </>
  );
};
