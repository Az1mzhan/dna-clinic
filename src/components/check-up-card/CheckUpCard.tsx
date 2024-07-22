import { FC } from "react";
import { CheckUp } from "../../types/CheckUp";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "../check-up-card/checkUpCard.module.css";

interface Props {
  checkUp: CheckUp;
}

export const CheckUpCard: FC<Props> = ({ checkUp }: Props) => {
  return (
    <>
      <Card sx={{ borderRadius: 4 }}>
        <CardMedia
          className={styles.cardImage}
          component="img"
          image={checkUp.icon}
        />
        <CardContent className={styles.cardContent}>
          <Box className={styles.cardInfo}>
            <Typography className={styles.checkUpType}>
              {checkUp.type}
            </Typography>
            <Button className={styles.detailsBtn}>Подробнее</Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
