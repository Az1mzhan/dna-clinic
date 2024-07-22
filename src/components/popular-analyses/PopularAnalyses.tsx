import { FC } from "react";
import { defaultAnalysesGroup } from "../../types/AnalysesGroup";
import { Box, Typography } from "@mui/material";
import { PopularAnalysesCard } from "../popular-analyses-card/PopularAnalysesCard";

export const PopularAnalyses: FC = () => {
  return (
    <>
      <Box>
        <Typography>Популярные анализы</Typography>
        <Box>
          {defaultAnalysesGroup.map((group, id) => (
            <PopularAnalysesCard key={id} group={group} />
          ))}
        </Box>
      </Box>
    </>
  );
};
