import { FC } from "react";
import { DiagnosisBanner } from "../../types/DiagnosisBanner";
import { Box, Button, Divider, Typography } from "@mui/material";
import styles from "./diagnosisBannerComponent.module.css?v=1.0.1";

interface Props {
  banner: DiagnosisBanner;
}

export const DiagnosisBannerComponent: FC<Props> = ({ banner }: Props) => {
  return (
    <>
      <Box className={styles.diagnosisBanner} sx={{ background: banner.color }}>
        <img className={styles.bannerImage} src={banner.image} />
        <Box className={styles.bannerInfo}>
          <Box>
            <Typography className={styles.bannerTitle}>
              {banner.title}
            </Typography>
            <Divider className={styles.titleDivider} />
          </Box>
          <Typography className={styles.bannerDescription}>
            {banner.description}
          </Typography>
          <Box className={styles.buttonsContainer}>
            {banner.buttons.map((button, id) => (
              <Button
                key={id}
                onClick={button?.onClick}
                sx={{
                  minWidth: button.width,
                  maxWidth: button.width,
                  color: `${
                    banner.color.startsWith("#")
                      ? banner.color
                      : banner.textColor
                  } !important`,
                }}
              >
                {button.title}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
