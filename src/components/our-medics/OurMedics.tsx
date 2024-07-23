import { FC, useEffect, useRef, useState } from "react";
import { SmallMedicCard } from "../small-medic-card/SmallMedicCard";
import { Box, Typography } from "@mui/material";
import styles from "./ourMedics.module.css";
import { defaultMedics } from "../../types/Medic";

export const OurMedics: FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const containerRef = useRef(null);

  const moveContainer = (scrollAmount) => {
    const newScrollPosition = scrollPosition - scrollAmount;

    setScrollPosition(newScrollPosition);

    containerRef.current.scrollLeft = newScrollPosition;
  };

  useEffect(() => {
    setInterval(() => {
      moveContainer(276);
    }, 1000);
  }, []);

  return (
    <>
      <Box className={styles.ourMedicsContainer}>
        <Typography className={styles.containerTitle}>Наши врачи</Typography>
        <Box ref={containerRef} className={styles.cardsContainer}>
          {defaultMedics.map((medic, id) => (
            <SmallMedicCard key={id} medic={medic} />
          ))}
        </Box>
      </Box>
    </>
  );
};
