import { FC, ReactNode } from "react";
import { Box, Button, Typography } from "@mui/material";
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

  if (isDefaultTemplate)
    return (
      <Box className={styles.slideContainer}>
        <Typography className={styles.slideTitle} variant="h4">
          Центр диагностики и лечения
        </Typography>
        <ul className={styles.featureList}>
          {listItems.map((item, id) => (
            <li key={id}>
              <Typography className={styles.listItem} variant="h6">
                {item}
              </Typography>
            </li>
          ))}
          <li>
            <Button className="secondaryBtn">Подробнее</Button>
          </li>
        </ul>
      </Box>
    );
  return <>{content}</>;
};
