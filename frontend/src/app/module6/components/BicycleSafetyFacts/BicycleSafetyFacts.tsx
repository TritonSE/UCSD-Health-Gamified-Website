import styles from "./BicycleSafetyFacts.module.css";

import InjuredMascot from "@/app/components/Mod2Components/StuffHappens/InjuredMascot";

const SAFETY_FACTS = [
  {
    color: "rgba(187, 213, 103, 0.40)",
    description: (
      <p>
        Failing to yield the right of way is the <b>highest factor</b> in fatal bike crashes,
        followed by bicyclists not being visible.
      </p>
    ),
  },
  {
    color: "rgba(187, 213, 103, 0.60)",
    description: (
      <p>
        Serious bicyclist injuries and deaths are highest during the summer{" "}
        <b>months between June and September.</b>
      </p>
    ),
  },
  {
    color: "rgba(187, 213, 103, 1)",
    description: (
      <p>
        Nearly three quarters of all bicyclist deaths occur in <b>urban areas.</b>
      </p>
    ),
  },
];

export default function BicycleSafetyFacts() {
  return (
    <section id={styles.container}>
      <h2>Bicycle Safety Facts</h2>
      <ol>
        {SAFETY_FACTS.map((fact, index) => (
          <li key={"fact" + index} style={{ backgroundColor: fact.color }}>
            <span>{index + 1}.</span>
            {fact.description}
          </li>
        ))}
      </ol>
      <div id={styles.bottom_container}>
        <InjuredMascot />
        <div>
          <svg
            width="786"
            height="176"
            viewBox="0 0 786 176"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 176L23.635 139.876V8C23.635 3.58172 27.2167 0 31.6349 0H778C782.418 0 786 3.58173 786 8.00001V152.458C786 156.877 782.418 160.458 778 160.458H61.0112L0 176Z"
              fill="#FFE5C9"
            />
            <foreignObject x="25" y="0" width="96.75%" height="90%">
              <div>
                <p>
                  <b>Ride responsibly</b>, and remember: All states require bicyclists on the
                  roadway to follow the same rules and responsibilities as motorists.
                </p>
              </div>
            </foreignObject>
          </svg>
          <div id={styles.resource_text_container}>
            <p>Resource for futher information</p>
            <a
              href="https://www.nhtsa.gov/sites/nhtsa.gov/files/11146a-preventbikecrashes.pdf"
              target="_blank"
            >
              11146a-preventbikecrashes.pdf (nhtsa.gov)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
