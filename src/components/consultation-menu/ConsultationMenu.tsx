import { Menu, defaultMenus } from "../../types/Menu";
import { FC, useState } from "react";
import { MenuSection } from "../menu-section/MenuSection";
import { Box, Button } from "@mui/material";
import styles from "./consultationMenu.module.css";

export const ConsultationMenu: FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<Menu>(defaultMenus[0]);

  const selectMode = (menu: Menu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <Box className={styles.consultationMenu}>
        <Box className={styles.buttonsContainer}>
          {defaultMenus.map((menu, id) => (
            <Button
              key={id}
              className={
                menu === selectedMenu ? styles.selectedMenuBtn : styles.menuBtn
              }
              onClick={() => {
                selectMode(menu);
              }}
            >
              {menu.mode}
            </Button>
          ))}
        </Box>
        <MenuSection menu={selectedMenu} />
      </Box>
    </>
  );
};
