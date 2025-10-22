import styles from "./GroupPage.module.css";
import OverviewSection from "../components/section/OverviewSection";
import PeopleSection from "../components/section/PeopleSection";
import PresenceSection from "../components/section/PresenceSection";

export default function GroupPage() {
  return (
    <main className={styles.page}>
      <OverviewSection />
      <PeopleSection />
      <PresenceSection />
    </main>
  );
}
