import { FC } from "react";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import styles from "./header.module.css";
import phoneIcon from "../../assets/phone.svg";
import personIcon from "../../assets/person.svg";
import "../../App.css";

export const Header: FC = () => {
  return (
    <>
      <nav className={styles.header}>
        <Toolbar
          sx={{
            width: "100%",
            padding: "0 !important",
            justifyContent: "space-between",
          }}
        >
          <Typography className={styles.companyTitle} variant="h3">
            ДНК-КЛ
          </Typography>
          <Box className={styles.headerContent}>
            <Box className={styles.phoneSection}>
              <img src={phoneIcon} />
              <Box className={styles.phoneContainer}>
                <Typography className={styles.aroundClockLabel}>
                  Круглосуточная запись по телефону:
                </Typography>
                <Typography className={styles.aroundClockPhone}>
                  +7 702 301 2796
                </Typography>
              </Box>
            </Box>
            <Box className={styles.headerButtonsGroup}>
              <Button className="primaryBtn">Вызвать врача на дом</Button>
              <Button className="primaryBtn">Скорая помощь</Button>
              <Button className="secondaryBtn">Записаться на прием</Button>
              <Button className={styles.personalCabinetBtn}>
                <img src={personIcon} />
                Личный кабинет
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </nav>
    </>
  );
};
