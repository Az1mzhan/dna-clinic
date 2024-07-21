import { FC } from "react";
import { MainCarousel } from "../../components/main-carousel/MainCarousel";
import { ClinicDescription } from "../../components/clinic-description/ClinicDescription";
import { AnalysisCenter } from "../../components/analysis-center/AnalysisCenter";
import { OurMedics } from "../../components/our-medics/OurMedics";
import { CarouselItem } from "../../components/carousel-item/CarouselItem";

const MainPage: FC = () => {
  return (
    <>
      <CarouselItem />
      <ClinicDescription />
      <OurMedics />
      <AnalysisCenter />
    </>
  );
};

export default MainPage;
