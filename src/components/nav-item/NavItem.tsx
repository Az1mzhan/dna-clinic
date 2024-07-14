import { FC } from "react";
import styles from "./navItem.module.css";
import { Link } from "@mui/material";

interface Props {
  item: { title: string; url: string };
}

export const NavItem: FC<Props> = ({ item }: Props) => {
  return (
    <>
      <Link className={styles.navItem} href={"/" + item.url} variant="h6">
        {item.title}
      </Link>
    </>
  );
};
