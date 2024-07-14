import { FC } from "react";
import { CarouselItem } from "../carousel-item/CarouselItem";
import Carousel from "react-material-ui-carousel";
import styles from "./mainCarousel.module.css";

export const MainCarousel: FC = () => {
  return (
    <>
      <Carousel className={styles.carousel}>
        {Array.from({ length: 3 }).map((item, id) => (
          <CarouselItem key={id} />
        ))}
      </Carousel>
    </>
  );
};
