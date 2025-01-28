import React from "react";
import { services } from "../data";
import { servicesDetails } from "../types";

const Services = () => {
  return (
    <div>
      <h1 className="text-2xl">Services</h1>
      <div className="grid grid-cols-3">
        {services.map((item) => (
          <ServiceCard {...item} key={item.key} />
        ))}
      </div>
    </div>
  );
};

export default Services;

const ServiceCard = ({ title, detailed }: servicesDetails) => {
  return (
    <div className="w-[300px] h-[300px] ">
      <h4 className="text-lg">{title}</h4>
      <ul>
        {detailed.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
