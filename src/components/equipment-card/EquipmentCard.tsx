import { FC } from "react";
import { Equipment } from "../../types/Equipment";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import mri from "../../assets/mri.svg";

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
      <Card>
        <CardMedia image={equipment.icon} />
        <CardContent>
          <Typography>{equipment.naming}</Typography>
          <ul>
            {equipment.features.map((feature, id) => (
              <li key={id}>
                <Typography>{feature}</Typography>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
