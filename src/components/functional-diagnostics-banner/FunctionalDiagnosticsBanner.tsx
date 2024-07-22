import { FC } from "react";
import { DiagnosisBannerComponent } from "../diagnosis-banner-component/DiagnosisBannerComponent";
import { defaultDiagnosesBanners } from "../../types/DiagnosisBanner";
import { Box } from "@mui/material";

export const FunctionalDiagnosticsBanner: FC = () => {
  const banner = defaultDiagnosesBanners[1];

  return (
    <>
      <Box sx={{ marginTop: "32px" }}>
        <DiagnosisBannerComponent banner={banner} />
      </Box>
    </>
  );
};
