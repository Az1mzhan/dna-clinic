import { Service } from "../../types/Service";

export const selectServiceIcon = (service: Service) => {
  console.log(`../../assets/${Service[service]}`);
  return `../../assets/${Service[service].toLowerCase()}`;
};
