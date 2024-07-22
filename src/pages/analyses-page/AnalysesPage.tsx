import { FC } from "react";
import { AnalysesFlagmanSection } from "../../components/analyses-flagman-section/AnalysesFlagmanSection";
import { PopularAnalyses } from "../../components/popular-analyses/PopularAnalyses";
import { LaboratoryAnalysesList } from "../../components/laboratory-analyses-list/LaboratoryAnalysesList";

const AnalysesPage: FC = () => {
  return (
    <>
      <AnalysesFlagmanSection />
      <PopularAnalyses />
      <LaboratoryAnalysesList />
    </>
  );
};

export default AnalysesPage;
