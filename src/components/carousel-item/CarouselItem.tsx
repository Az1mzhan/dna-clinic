import { FC, ReactNode } from "react";
import { Box, Button, ListItem, styled, Typography } from "@mui/material";
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
        <Box>
          <Typography
            className={styles.slideTitle}
            sx={{
              backgroundColor: {
                xs: "red",
                sm: "transparent",
              },
            }}
          >
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
                xs: "flex-end",
                sm: "center",
              },
              marginLeft: {
                sm: "0.607%",
                md: "15.607%",
                lg: "21.607%",
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
                  "&:nth-child(2)": {
                    marginLeft: {
                      sm: "2.5vw",
                      md: "7.5vw",
                    },
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
                marginRight: {
                  sm: "2.5vw !important",
                  md: "0 !important",
                },
                textAlign: {
                  xs: "right",
                  sm: "left",
                },
              }}
            >
              <Button
                className="secondaryBtn"
                sx={{
                  marginLeft: {
                    xs: "0",
                    sm: "2.5vw",
                  },
                  paddingInline: {
                    xs: "8.75vw !important",
                    md: "0 !important",
                  },
                }}
              >
                Подробнее
              </Button>
            </ListItem>
          </Box>
        </Box>
      </Box>
    );
  return <>{content}</>;
};
