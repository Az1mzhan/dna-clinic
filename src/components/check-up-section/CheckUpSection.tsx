import { FC } from "react";
import { CheckUpCard } from "../check-up-card/CheckUpCard";
import { defaultCheckUps } from "../../types/CheckUp";
import { Box } from "@mui/material";
import styles from "./checkUpSection.module.css";

export const CheckUpSection: FC = () => {
  return (
    <>
      <Box className={styles.cardsContainer}>
        {defaultCheckUps.map((checkUp, id) => (
          <CheckUpCard key={id} checkUp={checkUp} />
        ))}
      </Box>
    </>
  );
};
