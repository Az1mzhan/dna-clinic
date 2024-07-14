import { FC } from "react";
import { MainCarousel } from "../../components/main-carousel/MainCarousel";
import { ClinicDescription } from "../../components/clinic-description/ClinicDescription";
import { AnalysisCenter } from "../../components/analysis-center/AnalysisCenter";

const MainPage: FC = () => {
  return (
    <>
      <MainCarousel />
      <ClinicDescription />
      <AnalysisCenter />
    </>
  );
};

export default MainPage;
