import { FC } from "react";
import { DiagnosesCardsContainer } from "../../components/diagnoses-cards-container/DiagnosesCardsContainer";
import { EndoscopyBanner } from "../../components/endoscopy-banner/EndoscopyBanner";
import { FunctionalDiagnosticsBanner } from "../../components/functional-diagnostics-banner/FunctionalDiagnosticsBanner";
import { EquipmentSection } from "../../components/equipment-section/EquipmentSection";
import { CheckUpSection } from "../../components/check-up-section/CheckUpSection";
import { CarouselItem } from "../../components/carousel-item/CarouselItem";

const DiagnosticsPage: FC = () => {
  return (
    <>
      <CarouselItem />
      <EndoscopyBanner />
      <DiagnosesCardsContainer />
      <FunctionalDiagnosticsBanner />
      <CheckUpSection />
      <EquipmentSection />
    </>
  );
};

export default DiagnosticsPage;
