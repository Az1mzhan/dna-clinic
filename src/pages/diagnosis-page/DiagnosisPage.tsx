import { FC } from "react";
import { DiagnosesCardsContainer } from "../../components/diagnoses-cards-container/DiagnosesCardsContainer";
import { EndoscopyBanner } from "../../components/endoscopy-banner/EndoscopyBanner";
import { FunctionalDiagnosisBanner } from "../../components/functional-diagnosis-banner/FunctionalDiagnosisBanner";
import { EquipmentSection } from "../../components/equipment-section/EquipmentSection";

const DiagnosisPage: FC = () => {
  return (
    <>
      <EndoscopyBanner />
      <DiagnosesCardsContainer />
      <FunctionalDiagnosisBanner />
      <EquipmentSection />
    </>
  );
};

export default DiagnosisPage;
