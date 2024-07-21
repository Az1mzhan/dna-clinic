import { FC, useEffect, useState } from "react";
import { Medic } from "../../types/Medic";
import { Box, Button, Typography } from "@mui/material";
import styles from "./smallMedicCard.module.css";

const defaultMedic: Medic = {
  fullName: "Величко Светлана Михайловна",
  occupation: "Врач-генетик",
  briefSpecialty: "Медико-генетическое консультирование пациентов и их семей",
  specialties: [
    "Заболевания репродуктивной и мочеполовой систем: миома матки, эндометриоз, опухоли и опухолевидные образования яичников, патологии шейки матки, бесплодие и иные заболевания",
  ],
  achievements: [
    "Заболевания репродуктивной и мочеполовой систем: миома матки, эндометриоз, опухоли и опухолевидные образования яичников, патологии шейки матки, бесплодие и иные заболевания",
  ],
  experience: 29,
  reviews: Array.from({ length: 32 }),
};

interface Props {
  medic: Medic;
}

export const SmallMedicCard: FC<Props> = ({ medic = defaultMedic }: Props) => {
  const [experienceLabel, setExperienceLabel] = useState<string>("");

  const getExperienceLabel = () => {
    let count = medic.experience % 100;

    if (count >= 5 && count <= 20) setExperienceLabel("лет");
    else {
      count = count % 10;

      if (count === 1) setExperienceLabel("год");
      else if (count >= 2 && count <= 4) setExperienceLabel("года");
      else setExperienceLabel("лет");
    }
  };

  useEffect(() => {
    getExperienceLabel();
  }, [medic.experience]);

  return (
    <>
      <Box className={styles.card}>
        <Box className={styles.firstRow}>
          <Box className={styles.avatarContainer}>
            {medic.image && (
              <img src={medic.image} sx={{ width: "100%", height: "100%" }} />
            )}
          </Box>
          <Box className={styles.initialInfoContainer}>
            <Typography className={styles.fullName}>
              {medic.fullName}
            </Typography>
            <Typography className={styles.occupation}>
              {medic.occupation}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box className={styles.infoButtonsContainer}>
            <Button>
              <Typography className={styles.buttonText}>Стаж:&nbsp;</Typography>
              <Typography
                className={styles.buttonText + " " + styles.buttonQuantity}
              >
                {medic.experience}&nbsp;
              </Typography>
              <Typography className={styles.buttonText}>
                {experienceLabel}
              </Typography>
            </Button>
            <Button>
              <Typography className={styles.buttonText}>
                Отзывы:&nbsp;
              </Typography>
              <Typography
                className={styles.buttonText + " " + styles.buttonQuantity}
              >
                {medic.reviews.length}
              </Typography>
            </Button>
          </Box>
          <Box className={styles.briefSpecialty}>
            <Typography className={styles.briefSpecialtyLabel}>
              Специализация:
            </Typography>
            <Typography className={styles.briefSpecialtyText}>
              {medic.briefSpecialty}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button>Записаться по телефону</Button>
          <Button>Записаться онлайн</Button>
        </Box>
      </Box>
    </>
  );
};
