import { FC } from "react";
import { ConsultationFirstRow } from "../../components/consultation-first-row/ConsultationFirstRow";
import { ConsultationMenu } from "../../components/consultation-menu/ConsultationMenu";
import { InformationTilesContainer } from "../../components/information-tiles-container/InformationTilesContainer";
import { PriceList } from "../../components/price-list/PriceList";
import { CarouselItem } from "../../components/carousel-item/CarouselItem";

const ConsultationPage: FC = () => {
  return (
    <>
      <CarouselItem />
      <ConsultationFirstRow />
      <ConsultationMenu />
      <InformationTilesContainer />
      <PriceList />
    </>
  );
};

export default ConsultationPage;
