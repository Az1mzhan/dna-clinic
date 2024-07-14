import { FC } from "react";
import { EquipmentCard } from "../equipment-card/EquipmentCard";
import { Box, Typography } from "@mui/material";
import styles from "./equipmentSection.module.css";

export const EquipmentSection: FC = () => {
  return (
    <>
      <Box className={styles.equipmentSection}>
        <Typography>Технологии и оборудования</Typography>
        <Box className={styles.cardsContainer}>
          {Array.from({ length: 3 }).map((item, id) => (
            <EquipmentCard key={id} />
          ))}
        </Box>
      </Box>
    </>
  );
};
