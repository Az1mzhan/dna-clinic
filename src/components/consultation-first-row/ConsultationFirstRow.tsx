import { FC } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import styles from "./consultationFirstRow.module.css";

export const ConsultationFirstRow: FC = () => {
  return (
    <>
      <Box className={styles.firstRow}>
        <Box>
          <Typography className={styles.rowTitle}>
            Консультации специалистов
          </Typography>
          <Box className={styles.linksContainer}>
            <Link>Цены</Link>
            <Link>Записаться на прием</Link>
          </Box>
        </Box>
        <Box className={styles.buttonsContainer}>
          <Button>Записаться онлайн</Button>
          <Button>Заказать звонок</Button>
        </Box>
      </Box>
    </>
  );
};
