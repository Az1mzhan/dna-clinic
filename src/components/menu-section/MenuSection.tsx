import { FC } from "react";
import { Menu } from "../../types/Menu";
import { Box, Link, Typography } from "@mui/material";
import styles from "./menuSection.module.css";

interface Props {
  menu: Menu;
}

export const MenuSection: FC<Props> = ({ menu }: Props) => {
  const alphabet = [..."абвгдеёжзийклмнопрстуфхцчшщъыьэюя"];

  return (
    <>
      <Box className={styles.menuSection}>
        {alphabet
          .filter((letter) =>
            menu.list.some((item) =>
              item.label.toLowerCase().startsWith(letter)
            )
          )
          .map((letter, id) => (
            <Box key={id} className={styles.letterSection}>
              <Typography className={styles.letterTitle}>
                {letter.toUpperCase()}
              </Typography>
              <Box className={styles.letterList}>
                {menu.list
                  .filter((item) => item.label.toLowerCase().startsWith(letter))
                  .map((item, id) => (
                    <Link key={id} className={styles.link} href={item.link}>
                      {item.label}
                    </Link>
                  ))}
              </Box>
            </Box>
          ))}
      </Box>
    </>
  );
};
