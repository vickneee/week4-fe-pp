import { services } from "../data";
import { useState } from "react";
import Title from "./Title";
import Service from "./Service";

const Services = () => {
  const [servicesData, setServiceData] = useState(services);

  return (
    <div className="container">
      <section className="section section-services services" id="services">
        <Title title="our" subTitle="services" />

        <div className="section-center services-center">
          {servicesData.map((service) => {
            return <Service {...service} key={service.id} />;
          })}
        </div>
      </section>
    </div>
  );
};
export default Services;
