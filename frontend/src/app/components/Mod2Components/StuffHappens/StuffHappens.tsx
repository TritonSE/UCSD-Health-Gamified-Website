import InjuredMascot from "./InjuredMascot";
import styles from "./StuffHappens.module.css";

export default function StuffHappens() {
  return (
    <section className={styles.stuff_happens_container} style={{ height: "80vh" }}>
      <h2 className={styles.title}>Stuff Happens</h2>
      <div className={styles.content_container}>
        <InjuredMascot />
        <p className={styles.content_text}>
          Like any vehicle, sometimes things happen rendering your bike inoperable, such as a flat
          tire, a broken part, a dead battery or an electronic malfunction.
          <strong> Don&apos;t attempt to ride a broken bike. </strong>Have a plan to phone a friend
          or family member for rescue. Sometimes that might mean having to leave your bike to get
          picked up later, so it&apos;s a good idea to always carry a quality bike lock!
        </p>
      </div>
    </section>
  );
}
