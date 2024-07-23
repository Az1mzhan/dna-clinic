import { FC } from "react";
import { MedicCard } from "../../components/medic-card/MedicCard";
import { Box, Typography } from "@mui/material";
import styles from "./medicsPage.module.css";

const MedicsPage: FC = () => {
  return (
    <>
      <Box className={styles.medicsPage}>
        <Typography className={styles.pageTitle}>Врачи</Typography>
        <Box className={styles.cardsContainer}>
          {Array.from({ length: 5 }).map((medic, id) => (
            <MedicCard key={id} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default MedicsPage;
