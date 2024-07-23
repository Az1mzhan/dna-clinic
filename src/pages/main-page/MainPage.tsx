import { FC } from "react";
import { ClinicDescription } from "../../components/clinic-description/ClinicDescription";
import { AnalysisCenter } from "../../components/analysis-center/AnalysisCenter";
import { OurMedics } from "../../components/our-medics/OurMedics";
import { CarouselItem } from "../../components/carousel-item/CarouselItem";
import { EquipmentSection } from "../../components/equipment-section/EquipmentSection";

const MainPage: FC = () => {
  return (
    <>
      <CarouselItem />
      <ClinicDescription />
      <OurMedics />
      <AnalysisCenter />
      <EquipmentSection />
    </>
  );
};

export default MainPage;
