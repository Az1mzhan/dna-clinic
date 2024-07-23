import { FC, ReactNode } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import styles from "./carouselItem.module.css";

interface Props {
  isDefaultTemplate?: boolean;
  content?: ReactNode;
}

export const CarouselItem: FC<Props> = ({
  isDefaultTemplate = true,
  content,
}: Props) => {
  const listItems = ["Скидка 30%", "Бесплатная консультация"];
  const ListItem = styled("li")({});

  if (isDefaultTemplate)
    return (
      <Box className={styles.slideContainer}>
        <Typography className={styles.slideTitle}>
          Центр диагностики и лечения
        </Typography>
        <Box
          className={styles.featureList}
          component="ul"
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
          }}
        >
          {listItems.map((item, id) => (
            <ListItem
              key={id}
              sx={{
                width: {
                  sm: "fit-content",
                  md: "auto",
                },
                textAlign: {
                  xs: "right",
                  sm: "left",
                },
              }}
            >
              <Typography className={styles.listItem}>{item}</Typography>
            </ListItem>
          ))}
          <ListItem
            sx={{
              flexBasis: {
                xs: "100%",
                sm: "auto",
              },
              textAlign: {
                xs: "right",
                sm: "left",
              },
            }}
          >
            <Button className="secondaryBtn">Подробнее</Button>
          </ListItem>
        </Box>
      </Box>
    );
  return <>{content}</>;
};
