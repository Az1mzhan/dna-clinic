import { FC } from "react";
import {
  ConsultingService,
  defaultConsultingService,
} from "../../types/ConsultingService";
import { Box, Typography } from "@mui/material";
import styles from "./pricePosition.module.css";

interface Props {
  position: ConsultingService;
}

export const PricePosition: FC<Props> = ({
  position = defaultConsultingService,
}: Props) => {
  return (
    <>
      <Box className={styles.pricePosition}>
        <Typography>{position.label}</Typography>
        <Typography>{`${position.price} тнг`}</Typography>
      </Box>
    </>
  );
};
