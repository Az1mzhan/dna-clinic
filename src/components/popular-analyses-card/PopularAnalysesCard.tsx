import { FC } from "react";
import { AnalysesGroup } from "../../types/AnalysesGroup";
import { Box, Link, Typography } from "@mui/material";
import styles from "./popularAnalysesCard.module.css";

interface Props {
  group: AnalysesGroup;
}

export const PopularAnalysesCard: FC<Props> = ({ group }: Props) => {
  return (
    <>
      <Box className={styles.card}>
        <Typography className={styles.cardLabel}>{group.label}</Typography>
        <Box className={styles.linksContainer}>
          {group.analyses.map((analysis, id) => (
            <Link key={id} className={styles.cardLink} href={analysis.link}>
              {analysis.naming}
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};
