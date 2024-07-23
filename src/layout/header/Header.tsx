import { FC, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./header.module.css";
import phoneIcon from "../../assets/phone.svg";
import personIcon from "../../assets/person.svg";
import personBlackIcon from "../../assets/person_black.svg";
import "../../App.css";

export const Header: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className={styles.header}>
        <Toolbar
          sx={{
            justifyContent: {
              xs: "space-around !important",
              md: "flex-start !important",
            },
            width: "100%",
          }}
          disableGutters
        >
          <Typography className={styles.companyTitle}>ДНК-КЛ</Typography>
          <Box
            className={styles.headerContent}
            sx={{ display: { xs: "none !important", md: "flex !important" } }}
          >
            <Box className={styles.phoneSection}>
              <img className={styles.phoneIcon} src={phoneIcon} />
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
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#3C79FF !important",
              transition: "all .2s ease-out !important",
              "&:hover": {
                backgroundColor: "transparent !important",
                border: "1px solid #3C79FF !important",
                opacity: "0.75 !important",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            container={window.document.body}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            PaperProps={{
              sx: {
                width: "250px !important",
                display: { xs: "flex", md: "none" },
              },
            }}
            ModalProps={{ keepMounted: true }}
          >
            <Box
              className={styles.headerContent}
              sx={{
                flexDirection: "column-reverse",
                gap: "15px",
                marginLeft: "20px",
                marginTop: "25px",
              }}
            >
              <Box
                className={styles.phoneSection}
                sx={{ marginInline: "0 !important" }}
              >
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginLeft: "0",
                }}
              >
                <Button
                  className="transparentBtn"
                  sx={{
                    width: "fit-content !important",
                    paddingInline: "0 !important",
                    color: "black !important",
                  }}
                >
                  Вызвать врача на дом
                </Button>
                <Button
                  className="transparentBtn"
                  sx={{
                    width: "fit-content !important",
                    paddingInline: "0 !important",
                    color: "black !important",
                  }}
                >
                  Скорая помощь
                </Button>
                <Button
                  className="transparentBtn"
                  sx={{
                    width: "fit-content !important",
                    paddingInline: "0 !important",
                    color: "black !important",
                  }}
                >
                  Записаться на прием
                </Button>
                <Button
                  className="transparentBtn"
                  sx={{
                    gap: "10px",
                    width: "fit-content !important",
                    paddingInline: "0 !important",
                    color: "black !important",
                  }}
                >
                  <img src={personBlackIcon} />
                  Личный кабинет
                </Button>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </nav>
    </>
  );
};
