import { FC } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./clinicDescription.module.css?v=1.0.1";

export const ClinicDescription: FC = () => {
  return (
    <>
      <Box className={styles.descriptionContainer}>
        <Typography className={styles.descriptionTitle}>
          ДНК - Клиник
        </Typography>
        <Typography className={styles.descriptionInfo} variant="h6">
          предоставлять уникальные, качественные медицинские услуги лучших
          специалистов в области медицины нашего региона. С заботой о здоровье
          всей семьи, начиная с момента зарождения новой жизни!
        </Typography>
      </Box>
    </>
  );
};
