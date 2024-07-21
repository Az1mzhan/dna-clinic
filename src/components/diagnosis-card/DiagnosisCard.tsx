import { FC } from "react";
import { DiagnosisMethod } from "../../types/DiagnosisMethod";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./diagnosisCard.module.css?v=1.0.1";

interface Props {
  diagnosis: DiagnosisMethod;
}

export const DiagnosisCard: FC<Props> = ({ diagnosis }: Props) => {
  return (
    <>
      <Card className={styles.diagnosisCard}>
        <CardMedia
          className={styles.cardImage}
          component="img"
          image={diagnosis.image}
        />
        <CardContent className={styles.cardContent}>
          <Typography className={styles.cardTitle}>
            {diagnosis.title}
          </Typography>
          <Typography className={styles.cardDescription}>
            {diagnosis.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
