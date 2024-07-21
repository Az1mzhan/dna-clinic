import { FC } from "react";
import { MedicCard } from "../../components/medic-card/MedicCard";
import { Box } from "@mui/material";
import styles from "./medicsPage.module.css?v=1.0.1";

const MedicsPage: FC = () => {
  return (
    <>
      <Box className={styles.medicsPage}>
        {Array.from({ length: 5 }).map((medic, id) => (
          <MedicCard key={id} />
        ))}
      </Box>
    </>
  );
};

export default MedicsPage;
