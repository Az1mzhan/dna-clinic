import { FC } from "react";
import { AnalysesGroup } from "../../types/AnalysesGroup";
import { Box, Link, Typography } from "@mui/material";

interface Props {
  group: AnalysesGroup;
}

export const PopularAnalysesCard: FC<Props> = ({ group }: Props) => {
  return (
    <>
      <Box>
        <Typography>{group.label}</Typography>
        <Box>
          {group.analyses.map((analysis, id) => (
            <Link key={id} href={analysis.link}>
              {analysis.naming}
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};
