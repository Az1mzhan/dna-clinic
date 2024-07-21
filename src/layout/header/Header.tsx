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
              xs: "space-between !important",
              md: "flex-start !important",
            },
            width: "100%",
            padding: "0 !important",
          }}
          disableGutters
        >
          <Typography
            className={styles.companyTitle}
            sx={{
              marginLeft: "5.9375vw !important",
              fontSize: {
                md: "25px !important",
                lg: "30px !important",
              },
            }}
          >
            ДНК-КЛ
          </Typography>
          <Box
            className={styles.headerContent}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Box
              className={styles.phoneSection}
              sx={{
                marginLeft: {
                  md: "0.25vw !important",
                  lg: "5.078vw !important",
                },
              }}
            >
              <img src={phoneIcon} />
              <Box className={styles.phoneContainer}>
                <Typography
                  className={styles.aroundClockLabel}
                  sx={{
                    fontSize: {
                      md: "8px !important",
                      lg: "9px !important",
                    },
                    fontWeight: {
                      md: "bold !important",
                      lg: "500 !important",
                    },
                  }}
                >
                  Круглосуточная запись по телефону:
                </Typography>
                <Typography
                  className={styles.aroundClockPhone}
                  sx={{
                    fontSize: {
                      md: "17px !important",
                      lg: "18px !important",
                    },
                  }}
                >
                  +7 702 301 2796
                </Typography>
              </Box>
            </Box>
            <Box className={styles.headerButtonsGroup}>
              <Button
                className="primaryBtn"
                sx={{
                  fontSize: {
                    md: "9.2px !important",
                    lg: "12.2px !important",
                  },
                }}
              >
                Вызвать врача на дом
              </Button>
              <Button
                className="primaryBtn"
                sx={{
                  fontSize: {
                    md: "9.2px !important",
                    lg: "12.2px !important",
                  },
                }}
              >
                Скорая помощь
              </Button>
              <Button
                className="secondaryBtn"
                sx={{
                  fontSize: {
                    md: "9.2px !important",
                    lg: "12.2px !important",
                  },
                }}
              >
                Записаться на прием
              </Button>
              <Button
                className={styles.personalCabinetBtn}
                sx={{
                  fontSize: {
                    md: "9.2px !important",
                    lg: "12.2px !important",
                  },
                }}
              >
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
              marginRight: "5.9375vw !important",
              color: "#3C79FF !important",
              transition: "all .25s ease-out !important",
              "&:hover": {
                backgroundColor: "transparent !important",
                border: ".125vw solid #3C79FF !important",
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
                width: { xs: "67.5vw", sm: "47.5vw" },
                display: { xs: "flex", md: "none" },
              },
            }}
            ModalProps={{ keepMounted: true }}
          >
            <Box
              className={styles.headerContent}
              sx={{
                flexDirection: "column-reverse",
                gap: "3.75vh",
                marginLeft: "3.75vw",
                marginTop: "5vh",
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
                    gap: "1.5vw",
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
