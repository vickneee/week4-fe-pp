import { tours } from "../data";
import { useState, useEffect } from "react";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  const [toursData, setToursData] = useState(tours);

  const removeTour = (id) => {
    const newTours = toursData.filter((tour) => tour.id !== id);
    setToursData(newTours);
  };

  useEffect(() => {
    console.log(tours); // Log the tours array to verify its contents
  }, []);

  return (
    <div className="tours-container">
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />

        <div className="section-center featured-center">
          {toursData.length > 0 ? (
            toursData.map((tour) => (
              <Tour key={tour.id} {...tour} removeTour={removeTour} />
            ))
          ) : (
            <h2 style={{ color: "red" }}>No tours anymore</h2>
          )}
        </div>
      </section>
    </div>
  );
};
export default Tours;
