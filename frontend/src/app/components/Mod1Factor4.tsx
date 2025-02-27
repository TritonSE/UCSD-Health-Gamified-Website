import React from "react";

import InfoItem from "./InfoItem";
import Mod1FactorTitle from "./Mod1FactorTitle";

export default function Mod1Factor4() {
  return (
    <div style={{ marginTop: "80px" }}>
      <Mod1FactorTitle number={4} step="Set a budget" />
      <InfoItem
        icon={"/module1/feature_icon.svg"}
        content={"E-bikes vary in price based on features and components."}
        iconAlt={"Feature icon"}
      ></InfoItem>
      <InfoItem
        icon={"/module1/cost_icon.svg"}
        content={"Determine your budget to narrow down your options."}
        iconAlt={"Dollar icon"}
      ></InfoItem>
    </div>
  );
}
