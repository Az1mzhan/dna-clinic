import { FC } from "react";
import { AnalysisLink } from "../../types/AnalysisLink";
import { Box, Button, Typography } from "@mui/material";

interface Props {
  link: AnalysisLink;
}

export const AnalysisLinkCard: FC<Props> = ({ link }: Props) => {
  if (link.isDetails) {
    return (
      <>
        <Box sx={{ backgroundColor: link.bgColor }}>
          <Typography>{link.title}</Typography>
          <Typography>{link.description}</Typography>
          <Button>Подробнее</Button>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box sx={{ backgroundColor: link.bgColor }}>
          <img src={link.icon} />
          <Typography>{link.title}</Typography>
        </Box>
      </>
    );
  }
};
