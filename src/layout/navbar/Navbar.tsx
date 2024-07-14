import { FC } from "react";
import { NavItem } from "../../components/nav-item/NavItem";
import { Box, InputAdornment, TextField } from "@mui/material";
import search from "../../assets/search.svg";
import styles from "./navbar.module.css";

export const Navbar: FC = () => {
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
          className={styles.searchBar}
          label="Поиск по сайту"
          InputLabelProps={{
            sx: {
              color: "rgba(64, 64, 64, 0.53)",
              fontFamily: "'Montserrat', sans-serif",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img src={search} />
              </InputAdornment>
            ),
            sx: {
              backgroundColor: "#fafafa",
              borderRadius: "5vw",
              fontFamily: "'Montserrat', sans-serif",
            },
          }}
        />
        <Box className={styles.navLinks}>
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </Box>
      </nav>
    </>
  );
};
