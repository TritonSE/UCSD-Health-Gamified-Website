import Accordion from "../Accordion";

export default function Mod1WhyNotBike() {
  return (
    <div>
      <Accordion
        title="Electric Motorcycles vs. Bicycles"
        content="Electric motorcycles are not bicycles and require a motorcycle license, registration and insurance, and additional modifications to be street legal to operate."
      />
      <Accordion
        title="Recognizing Legal E-Bikes"
        content="Legal, classified ebikes are clearly sold and marked as such.  Unclassified “bicycle shaped objects” often sold through online retailers, slip through the cracks and are sold as toys and are often illegal to operate on roadways.  Read the fine print and check with a reputable shop, or with law enforcement to be sure what you’re buying is legal to operate."
      />
      <Accordion
        title="Law Enforcement Actions"
        content="In many cities, law enforcement can, and will cite the rider, and impound illegal devices."
      />
      <Accordion
        title="School Parking Restrictions"
        content="Schools will not issue bike parking permits for electric motorcycles or unclassified, illegal devices."
      />
    </div>
  );
}
