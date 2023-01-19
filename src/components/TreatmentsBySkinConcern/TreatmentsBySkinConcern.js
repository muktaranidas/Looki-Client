import React from "react";
import image1 from "../../assets/TreatmentsBySkinConcern/1.jpg";
import image2 from "../../assets/TreatmentsBySkinConcern/2.jpg";
import image3 from "../../assets/TreatmentsBySkinConcern/3.jpg";
import image4 from "../../assets/TreatmentsBySkinConcern/4.jpg";
import image5 from "../../assets/TreatmentsBySkinConcern/5.jpg";
import image6 from "../../assets/TreatmentsBySkinConcern/6.jpg";
import image7 from "../../assets/TreatmentsBySkinConcern/7.jpg";
import image8 from "../../assets/TreatmentsBySkinConcern/8.jpg";

import TreatmentsBySkinConcernCard from "./TreatmentsBySkinConcernCard";

const TreatmentsBySkinConcern = () => {
  const treatmentsBySkinConcerns = [
    {
      id: 1,
      title: "Doctor Consultation",
      image: image1,
      description:
        "Insert the actual text content here n sert the actual text content here n sert the.",
    },
    {
      id: 2,
      title: "Doctor Consultation",
      image: image2,
      description:
        "Insert the actual text content here n sert the actual text content here n sert the.",
    },
    {
      id: 3,
      title: "Doctor Consultation",
      image: image3,
      description:
        "Insert the actual text content here n sert the actual text content here n sert the.",
    },
    {
      id: 4,
      title: "Doctor Consultation",
      image: image4,
      description:
        "Insert the actual text content here n sert the actual text content here n sert the.",
    },
    {
      id: 5,
      title: "Doctor Consultation",
      image: image5,
      description:
        "Insert the actual text content here n sert the actual text content here n sert the.",
    },
    {
      id: 6,
      title: "Doctor Consultation",
      image: image6,
      description:
        "Insert the actual text content here n sert the actual text content here n sert the.",
    },
    {
      id: 7,
      title: "Doctor Consultation",
      image: image7,
      description:
        "Insert the actual text content here n sert the actual text content here n sert the.",
    },
    {
      id: 8,
      title: "Doctor Consultation",
      image: image8,
      description:
        "Insert the actual text content here n sert the actual text content here n sert the.",
    },
  ];
  return (
    <div>
      <div className="flex items-center pt-4 mt-4">
        <div className="flex-1 h-px  sm:w-16 bg-orange-200"></div>
        <p className="px-3 text-2xl uppercase text-black font-semibold border border-orange-700 p-2 ">
          Treatments By Skin Concern
        </p>
        <div className="flex-1 h-px sm:w-16 bg-orange-200 "></div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-4 space-x-8 bg-gray-100 w-11/12 my-8	mx-auto">
        {treatmentsBySkinConcerns?.map((treatmentsBySkinConcern) => (
          <TreatmentsBySkinConcernCard
            key={treatmentsBySkinConcern.id}
            treatmentsBySkinConcern={treatmentsBySkinConcern}
          ></TreatmentsBySkinConcernCard>
        ))}
      </div>
    </div>
  );
};

export default TreatmentsBySkinConcern;
