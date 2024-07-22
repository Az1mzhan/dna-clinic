import { FC } from "react";
import { InformationTile } from "../information-tile/InformationTile";
import { defaultInformationTiles } from "../../types/InformationTile";
import { Box } from "@mui/material";
import styles from "./informationTilesContainer.module.css";

export const InformationTilesContainer: FC = () => {
  return (
    <>
      <Box className={styles.container}>
        {defaultInformationTiles.map((tile, id) => (
          <InformationTile key={id} tile={tile} />
        ))}
      </Box>
    </>
  );
};
