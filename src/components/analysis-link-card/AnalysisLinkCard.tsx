import { FC } from "react";
import { AnalysisLink } from "../../types/AnalysisLink";
import { Box } from "@mui/material";

interface Props {
  link: AnalysisLink;
}

export const AnalysisLinkCard: FC<Props> = ({ link }: Props) => {
  return (
    <>
      <Box sx={{ backgroundColor: link.bgColor }}>
        <img src={link.icon} />
      </Box>
    </>
  );
};
