import { FC } from "react";
import { Link } from "@mui/material";
import styles from "./navItem.module.css?v=1.0.1";

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
