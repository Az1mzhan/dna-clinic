import { FC } from "react";
import { Box, Link, Typography } from "@mui/material";
import { defaultLaboratoryAnalyses } from "../../types/LaboratoryAnalysis";

export const LaboratoryAnalysesList: FC = () => {
  return (
    <>
      <Box>
        <Typography>Виды лабораторных анализ и исследований</Typography>
        <Box>
          {defaultLaboratoryAnalyses.map((analysis, id) => (
            <Link key={id} href={analysis.link}>
              {analysis.naming}
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};
