import { FC } from "react";
import { InformationTile } from "../../types/InformationTile";
import { Box, Button, Typography } from "@mui/material";
import styles from "./informationTile.module.css";

interface Props {
  tile: InformationTile;
}

export const InformationTile: FC<Props> = ({ tile }: Props) => {
  return (
    <>
      <Box sx={{ width: tile.width }}>
        <Typography className={styles.tileTitle} sx={tile.titleSxProperties}>
          {tile.title}
        </Typography>
        <Box className={styles.tile} sx={tile.tileSxProperties}>
          <Box
            className={styles.descriptionContainer}
            sx={tile.descriptionContainerSxProperties}
          >
            {tile.descriptions.map((description, id) => (
              <Typography
                className={styles.tileDescription}
                key={id}
                sx={tile.descriptionSxProperties}
              >
                {description}
              </Typography>
            ))}
          </Box>
          {tile.isDetails ? (
            <Button className={"secondaryBtn " + styles.detailsBtn}>
              Подробнее
            </Button>
          ) : null}
        </Box>
      </Box>
    </>
  );
};
