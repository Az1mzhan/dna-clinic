import { FC, useEffect, useState } from "react";
import { SmallMedicCard } from "../small-medic-card/SmallMedicCard";
import { Box, Typography } from "@mui/material";
import styles from "./ourMedics.module.css";

export const OurMedics: FC = () => {
  const [translateX, setTranslateX] = useState<number>(0);
  const [iterations, setIterations] = useState<number>(0);

  const moveContainer = () => {
    if (iterations !== 4) {
      setTranslateX(translateX - 317);
      setIterations(iterations + 1);
    } else {
      setTranslateX(0);
      setIterations(0);
    }
  };

  useEffect(() => {
    setInterval(moveContainer, 1000);
  }, []);

  return (
    <>
      <Box className={styles.ourMedicsContainer}>
        <Typography className={styles.containerTitle}>Наши врачи</Typography>
        <Box
          className={styles.cardsContainer}
          sx={{ translateX: `${translateX}px !important` }}
        >
          {Array.from({ length: 4 }).map((item, id) => (
            <SmallMedicCard key={id} />
          ))}
        </Box>
      </Box>
    </>
  );
};
