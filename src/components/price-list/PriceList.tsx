import { FC } from "react";
import { PricePosition } from "../price-position/PricePosition";
import { Box, Typography } from "@mui/material";
import styles from "./priceList.module.css";

export const PriceList: FC = () => {
  return (
    <>
      <Box className={styles.priceList}>
        <Typography className={styles.listTitle}>
          Цены на консультации
        </Typography>
        <Box className={styles.headerRow}>
          <Typography>Услуги</Typography>
          <Typography>Цена</Typography>
        </Box>
        <Box>
          {Array.from({ length: 10 }).map((position, id) => (
            <PricePosition key={id} />
          ))}
        </Box>
      </Box>
    </>
  );
};
