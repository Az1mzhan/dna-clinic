import { FC } from "react";
import { AnalysesFlagmanSection } from "../../components/analyses-flagman-section/AnalysesFlagmanSection";
import { PopularAnalyses } from "../../components/popular-analyses/PopularAnalyses";
// import { LaboratoryAnalysesList } from "../../components/laboratory-analyses-list/LaboratoryAnalysesList";
// import { OurLaboratory } from "../../components/our-laboratory/OurLaboratory";
import { CarouselItem } from "../../components/carousel-item/CarouselItem";

const AnalysesPage: FC = () => {
  return (
    <>
      <CarouselItem />
      <AnalysesFlagmanSection />
      <PopularAnalyses />
    </>
  );
};

export default AnalysesPage;
