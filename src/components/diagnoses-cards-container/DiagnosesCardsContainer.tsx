import { FC } from "react";
import { DiagnosisMethod, defaultDiagnoses } from "../../types/DiagnosisMethod";
import { DiagnosisCard } from "../diagnosis-card/DiagnosisCard";
import { Box } from "@mui/material";
import styles from "./diagnosesCardsContainer.module.css";

export const DiagnosesCardsContainer: FC = () => {
  const diagnoses: DiagnosisMethod[] = defaultDiagnoses;

  return (
    <>
      <Box className={styles.cardsContainer}>
        {diagnoses.map((diagnosis, id) => (
          <DiagnosisCard key={id} diagnosis={diagnosis} />
        ))}
      </Box>
    </>
  );
};
