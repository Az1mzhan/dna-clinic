import { FC } from "react";
import { ServiceCard } from "../../types/ServiceCard";
import { Box, Typography } from "@mui/material";
import styles from "./serviceCard.module.css";

interface Props {
  service: ServiceCard;
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
