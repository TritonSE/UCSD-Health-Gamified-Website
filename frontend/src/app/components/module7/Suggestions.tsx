import React from "react";

import styles from "./Suggestions.module.css";
import SuggestionsCard from "./SuggestionsCard";

const Page5: React.FC = () => {
  const cards = [
    {
      icon: "/module7/Suggestions1.svg",
      title: "Setting Expectations & Open Dialogue",
      content: (
        <ul>
          <li>Communicate the importance of safety and establishing family riding rules.</li>
          <li>Encourage open discussions about fears, experiences, and riding habits.</li>
        </ul>
      ),
    },
    {
      icon: "/module7/Suggestions2.svg",
      title: "Practicing Together",
      content: (
        <ul>
          <li>Encourage family outings and shared riding experiences to model safe practices.</li>
          <li>Set time for regular check-ins about riding experiences and challenges.</li>
        </ul>
      ),
    },
    {
      icon: "/module7/Suggestions3.svg",
      title: "Review, discuss, and sign an E Bike Agreement between the guardian and teen. ",
      content: (
        <p>
          Link to example agreement that can be downloaded and printed: <br />
          <a href="https://electra.trekbikes.com/us/en_US/e-bike-agreement/">
            (https://electra.trekbikes.com/us/en_US/e-bike-agreement/)
          </a>
        </p>
      ),
    },
  ];

  return (
    <section id={styles.container}>
      <h1 className={styles.title}>SUGGESTIONS TO HELP KEEP YOUR CHILD SAFE</h1>
      <div className={styles.content}>
        {cards.map((card, idx) => (
          <SuggestionsCard key={idx} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Page5;
