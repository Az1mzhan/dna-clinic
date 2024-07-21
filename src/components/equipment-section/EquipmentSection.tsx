import { FC } from "react";
import { EquipmentCard } from "../equipment-card/EquipmentCard";
import { Box, Typography } from "@mui/material";
import styles from "./equipmentSection.module.css?v=1.0.1";

export const EquipmentSection: FC = () => {
  return (
    <>
      <Box className={styles.equipmentSection}>
        <Typography className={styles.sectionTitle}>
          Технологии и оборудования
        </Typography>
        <Box className={styles.cardsContainer}>
          {Array.from({ length: 3 }).map((item, id) => (
            <EquipmentCard key={id} />
          ))}
        </Box>
      </Box>
    </>
  );
};
