import { FC } from "react";
import { AnalysisLink } from "../../types/AnalysisLink";
import { Box, Button, Typography } from "@mui/material";
import styles from "./analysisLinkCard.module.css";

interface Props {
  link: AnalysisLink;
}

export const AnalysisLinkCard: FC<Props> = ({ link }: Props) => {
  if (link.isDetails) {
    return (
      <>
        <Box
          className={styles.majorLinkCard}
          sx={{ backgroundColor: link.bgColor }}
        >
          <Typography className={styles.majorCardTitle}>
            {link.title}
          </Typography>
          <Typography className={styles.cardDescription}>
            {link.description}
          </Typography>
          <Button className={styles.detailsBtn}>Подробнее</Button>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box className={styles.linkCard} sx={{ backgroundColor: link.bgColor }}>
          <img src={link.icon} />
          <Typography className={styles.cardTitle}>{link.title}</Typography>
        </Box>
      </>
    );
  }
};
