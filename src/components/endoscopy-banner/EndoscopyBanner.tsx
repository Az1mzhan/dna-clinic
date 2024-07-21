import { FC } from "react";
import { DiagnosisBannerComponent } from "../diagnosis-banner-component/DiagnosisBannerComponent";
import { defaultDiagnosesBanners } from "../../types/DiagnosisBanner";
import { Box, Button, Typography } from "@mui/material";
import styles from "./endoscopyBanner.module.css?v=1.0.1";

export const EndoscopyBanner: FC = () => {
  const banner = defaultDiagnosesBanners[0];

  return (
    <>
      <Box className={styles.endoscopyBanner}>
        <Box className={styles.firstRow}>
          <Typography className={styles.firstRowTitle}>Диагностика</Typography>
          <Box className={styles.buttonsContainer}>
            <Button>Записаться по телефону</Button>
            <Button>Справочник заболевании</Button>
          </Box>
        </Box>
        <DiagnosisBannerComponent banner={banner} />
      </Box>
    </>
  );
};
