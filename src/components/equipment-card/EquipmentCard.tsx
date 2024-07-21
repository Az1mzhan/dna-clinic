import { FC } from "react";
import { Equipment } from "../../types/Equipment";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import mri from "../../assets/mri.svg";
import styles from "./equipmentCard.module.css?v=1.0.1";

const defaultEquipment: Equipment = {
  naming: "МРТ",
  features: [
    "1,5 тесла / до 200 кг",
    "3Д/4Д запись исследования",
    "МР Маммография",
    "МРТ всего тело за 1.5 часа",
    "МРТ суставов",
  ],
  icon: mri,
};

interface Props {
  equipment: Equipment;
}

export const EquipmentCard: FC<Props> = ({
  equipment = defaultEquipment,
}: Props) => {
  return (
    <>
      <Card className={styles.equipmentCard} sx={{ borderRadius: 3 }}>
        <CardMedia
          className={styles.cardImage}
          component="img"
          image={equipment.icon}
        />
        <CardContent className={styles.cardContent}>
          <Box className={styles.infoContainer} sx={{ borderRadius: 3 }}>
            <Typography className={styles.equipmentNaming}>
              {equipment.naming}
            </Typography>
            <ul className={styles.featuresList}>
              {equipment.features.map((feature, id) => (
                <li key={id}>
                  <Typography className={styles.equipmentFeature}>
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
