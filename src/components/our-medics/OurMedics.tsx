import { FC } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./ourMedics.module.css";
import { SmallMedicCard } from "../small-medic-card/SmallMedicCard";

export const OurMedics: FC = () => {
  return (
    <>
      <Box className={styles.ourMedicsContainer}>
        <Typography className={styles.containerTitle}>Наши врачи</Typography>
        <Box className={styles.cardsContainer}>
          {Array.from({ length: 5 }).map((item, id) => (
            <SmallMedicCard key={id} />
          ))}
        </Box>
      </Box>
    </>
  );
};
