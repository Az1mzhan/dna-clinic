import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { defaultAnalysesLinks } from "../../types/AnalysisLink";
import { AnalysisLinkCard } from "../analysis-link-card/AnalysisLinkCard";

export const AnalysesFlagmanSection: FC = () => {
  return (
    <>
      <Box>
        <Typography>Анализы</Typography>
        <Box>
          {defaultAnalysesLinks.map((link, id) => (
            <AnalysisLinkCard key={id} link={link} />
          ))}
        </Box>
      </Box>
    </>
  );
};
