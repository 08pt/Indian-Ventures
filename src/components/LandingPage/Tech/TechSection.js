import TechCards from "./TechCards";
import techData from "@/data/techData";

function TechSection() {
  return (
    <div className="mt-16 text-center ">
      <div className="flex flex-wrap justify-center gap-x-10 mx-auto gap-y-6 px-2 animation-r-l  ">
        {techData.map((tech, index) => (
          <TechCards
            imageUrl={tech.imageUrl}
            altText={tech.altText}
            title={tech.title}
            items={tech.items}
            key={index}
          />
        ))}
      </div>

      <p className="font-bold text-black mt-20  text-lg sm:text-2xl manrope">
        We Offer Best IT Services
      </p>
      <p className="mt-2 text-lg sm:text-2xl manrope">
        Easy solutions for all difficult IT Problems
      </p>
    </div>
  );
}

export default TechSection;
