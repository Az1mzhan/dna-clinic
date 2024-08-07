import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import analysis from "../../assets/analysis.svg";
import styles from "./analysisCenter.module.css";

export const AnalysisCenter: FC = () => {
  const listItems = [
    "Один из важнейших этапов диагностики",
    "Более 1800 видов исследований",
    "Анализы крови, мочи, ПЦР, инфекции гормоны, ВИЧ и другие ",
  ];

  return (
    <>
      <Box className={styles.container}>
        <Typography className={styles.containerTitle}>
          Центр анализов
        </Typography>
        <Box className={styles.medicalAnalyses}>
          <Box>
            <Typography className={styles.analysesTitle}>
              Медицинские анализы
            </Typography>
            <ul>
              {listItems.map((item, id) => (
                <li key={id} className={styles.listItem}>
                  <Typography className={styles.listItem} variant="h5">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
            <Button className={"primaryBtn " + styles.redirectBtn}>
              Перейти
            </Button>
          </Box>
          <img className={styles.analysisPoster} src={analysis} />
        </Box>
      </Box>
    </>
  );
};
