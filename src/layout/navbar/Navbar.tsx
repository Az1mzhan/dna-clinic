import { FC, useState } from "react";
import { NavItem } from "../../components/nav-item/NavItem";
import {
  Box,
  Drawer,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import search from "../../assets/search.svg";
import styles from "./navbar.module.css";

export const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = [
    { title: "О нас", url: "about-us" },
    { title: "Главная", url: "" },
    { title: "Услуги", url: "services" },
    { title: "Врачи", url: "medics" },
    { title: "Отзывы", url: "reviews" },
  ];

  return (
    <>
      <nav className={styles.container}>
        <TextField
          label="Поиск по сайту"
          // sx={{
          //   marginLeft: { xs: "2.5vw", sm: "2.5vw", md: "2.5vw", lg: "5vw" },
          // }}
          InputLabelProps={{
            sx: {
              top: "-5.75px !important",
              height: "23px !important",
              color: "rgba(64, 64, 64, 0.53)",
              fontFamily: "'Montserrat', sans-serif !important",
              fontWeight: "500 !important",
              fontSize: "12px !important",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img src={search} />
              </InputAdornment>
            ),
            sx: {
              width: "212px !important",
              height: "38px !important",
              backgroundColor: "#fafafa !important",
              borderRadius: "20px !important",
            },
          }}
        />
        <Box
          className={styles.navLinks}
          sx={{ display: { xs: "none !important", md: "flex !important" } }}
          // marginRight: { md: "1.25vw", lg: "5vw" },
        >
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </Box>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "flex", md: "none" },
            color: "#3C79FF !important",
            transition: "all .25s ease-out !important",
            "&:hover": {
              backgroundColor: "transparent !important",
              // border: ".125vw solid #3C79FF !important",
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
              display: { xs: "flex !important", md: "none !important" },
              justifyContent: "center !important",
            },
          }}
          ModalProps={{ keepMounted: true }}
        >
          <Box
            className={styles.navLinks}
            sx={{
              flexDirection: "column",
              marginLeft: "20px !important",
            }}
          >
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </Box>
        </Drawer>
      </nav>
    </>
  );
};
