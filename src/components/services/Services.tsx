import { FC } from "react";
import { useServices } from "../../hooks/useServices/useServices";
import { Box } from "@mui/material";
import { ServiceCard } from "../service-card/ServiceCard";

export const Services: FC = () => {
  const services = useServices();

  return (
    <>
      <Box>
        {services.map((service, id) => (
          <ServiceCard key={id} service={service} />
        ))}
      </Box>
    </>
  );
};
