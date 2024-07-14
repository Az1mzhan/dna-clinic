import { useEffect, useState } from "react";
import { Service } from "../../types/Service";
import { ServiceObject } from "../../types/ServiceObject";
import { selectServiceIcon } from "./selectServiceIcon";

export const useServices = () => {
  const [services, setServices] = useState<ServiceObject[]>([]);

  useEffect(() => {
    Object.values(Service).map((service) => {
      console.log(Service);
      setServices((prevState) => [
        ...prevState,
        { name: Service[service], icon: selectServiceIcon(Service[service]) },
      ]);
    });
  }, []);

  return services;
};
