import { FC } from "react";
import { Equipment } from "../../types/Equipment";
import { Box, Typography } from "@mui/material";

const defaultEquipment: Equipment = {
  naming: "МРТ",
  features: [
    "1,5 тесла / до 200 кг",
    "3Д/4Д запись исследования",
    "МР Маммография",
    "МРТ всего тело за 1.5 часа",
    "МРТ суставов",
  ],
};

interface Props {
  equipment: Equipment;
}

export const EquipmentSection: FC<Props> = ({
  equipment = defaultEquipment,
}: Props) => {
  return (
    <>
      <Box>
        <Typography>{equipment.naming}</Typography>
        <ul>
          {equipment.features.map((feature, id) => (
            <li key={id}>
              <Typography></Typography>
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
};
