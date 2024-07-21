import { FC } from "react";
import { ServiceObject } from "../../types/ServiceObject";
import { Box, Typography } from "@mui/material";
import styles from "./serviceCard.module.css?v=1.0.1";

interface Props {
  service: ServiceObject;
}

export const ServiceCard: FC<Props> = ({ service }: Props) => {
  return (
    <>
      <Box className={styles.card}>
        <img className={styles.cardIcon} src={service.icon} />
        <Typography>{service.name}</Typography>
      </Box>
    </>
  );
};
