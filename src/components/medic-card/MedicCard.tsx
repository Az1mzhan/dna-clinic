import { FC, useEffect, useState } from "react";
import { Medic } from "../../types/Medic";
import { Box, Button, Typography } from "@mui/material";
import MediaQuery from "react-responsive";
import bluePhone from "../../assets/phone_blue.svg";
import file from "../../assets/file.svg";
import styles from "./medicCard.module.css";

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

export const MedicCard: FC<Props> = ({ medic = defaultMedic }: Props) => {
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
      <Box className={styles.medicCard}>
        <Box className={styles.header}>
          <Box className={styles.secondaryInfo}>
            <Box className={styles.medicAvatar}>
              {medic.image && (
                <img src={medic.image} sx={{ width: "100%", height: "100%" }} />
              )}
            </Box>
            <MediaQuery minWidth={900}>
              <Button className={styles.medicInfoBtn}>
                <Typography className={styles.medicInfoTypography}>
                  Стаж:
                </Typography>
                <Typography className={styles.medicInfoTypography}>
                  {medic.experience}
                </Typography>
                <Typography className={styles.medicInfoTypography}>
                  {experienceLabel}
                </Typography>
              </Button>
              <Button className={styles.medicInfoBtn}>
                <Typography className={styles.medicInfoTypography}>
                  Отзывы:
                </Typography>
                <Typography className={styles.medicInfoTypography}>
                  {medic.reviews.length}
                </Typography>
              </Button>
            </MediaQuery>
          </Box>
          <MediaQuery maxWidth={900}>
            <Box className={styles.headerName}>
              <Typography className={styles.fullName}>
                {medic.fullName}
              </Typography>
              <Typography className={styles.occupation}>
                {medic.occupation}
              </Typography>
              <MediaQuery maxWidth={900}>
                <Button className={styles.medicInfoBtn}>
                  <Typography className={styles.medicInfoTypography}>
                    Стаж:
                  </Typography>
                  <Typography className={styles.medicInfoTypography}>
                    {medic.experience}
                  </Typography>
                  <Typography className={styles.medicInfoTypography}>
                    {experienceLabel}
                  </Typography>
                </Button>
                <Button className={styles.medicInfoBtn}>
                  <Typography className={styles.medicInfoTypography}>
                    Отзывы:
                  </Typography>
                  <Typography className={styles.medicInfoTypography}>
                    {medic.reviews.length}
                  </Typography>
                </Button>
              </MediaQuery>
            </Box>
          </MediaQuery>
        </Box>
        <Box className={styles.primaryInfo}>
          <MediaQuery minWidth={900}>
            <Box>
              <Typography className={styles.fullName}>
                {medic.fullName}
              </Typography>
              <Typography className={styles.occupation}>
                {medic.occupation}
              </Typography>
            </Box>
          </MediaQuery>
          <Box>
            <Box>
              <Typography className={styles.listTitle}>
                Специализация:
              </Typography>
              <ul>
                {medic.specialties.map((specialty, id) => (
                  <li className={styles.listItem} key={id}>
                    {specialty}
                  </li>
                ))}
              </ul>
            </Box>
            <Box>
              <Typography className={styles.listTitle}>
                Профессиональное развитие и достижения:
              </Typography>
              <ul>
                {medic.achievements.map((achievement, id) => (
                  <li className={styles.listItem} key={id}>
                    {achievement}
                  </li>
                ))}
              </ul>
              <Button className={"primaryBtn " + styles.recordToDoctorButton}>
                Записаться к врачу
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className={styles.actionButtons}>
          <Button className={styles.actionBtn}>
            <img className={styles.actionBtnIcon} src={bluePhone} />
            <Box className={styles.actionBtnInfo}>
              <Typography className={styles.actionBtnTitle}>
                Запись по телефону:
              </Typography>
              <Typography className={styles.contactPhone}>
                +7 702 301 2796
              </Typography>
            </Box>
          </Button>
          <Button className={styles.actionBtn}>
            <img className={styles.actionBtnIcon} src={file} />
            <Box className={styles.actionBtnInfo}>
              <Typography className={styles.actionBtnTitle}>
                Резюме врача
              </Typography>
              <Typography className={styles.actionBtnMedicName}>
                {medic.fullName}
              </Typography>
            </Box>
          </Button>
        </Box>
      </Box>
    </>
  );
};
