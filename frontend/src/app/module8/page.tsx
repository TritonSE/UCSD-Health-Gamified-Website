"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { put } from "../api/requests";
import ModuleIntro from "../components/AllModules/ModuleIntro/ModuleIntro";
import ClosingVideo from "../components/Module8Components/ClosingVideo/ClosingVideo";
import ModuleGate from "../components/ModuleGate/ModuleGate";
import ModuleSliderContainer from "../components/ModuleSliderContainer/ModuleSliderContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import { TitleScreen } from "../components/quiz_components/TitleScreen";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase-config";

import styles from "./mod8.module.css";

export default function Module8() {
  const router = useRouter();
  const { currentUser, refreshUser } = useAuth();

  const handleStart = async () => {
    // Update module progress if user is at module 8
    if (currentUser) {
      try {
        const currentModule = 8; // This is module 8

        if (currentModule < currentUser.module) {
          console.log("Module 8 is behind user's current progress - no update needed");
        } else if (currentModule === currentUser.module) {
          const nextModule = Math.min(currentUser.module + 1, 10);
          const token = await auth.currentUser?.getIdToken();
          const headers = token ? { Authorization: `Bearer ${token}` } : {};
          await put(`/api/user/update/${currentUser.email}`, { module: nextModule }, headers);
          console.log(`Module updated to ${nextModule}`);

          // Refresh the user data in the context
          await refreshUser();
        } else {
          console.error("Error: User is attempting a module ahead of their current progress");
        }
      } catch (error) {
        console.error("Failed to update module:", error);
      }
    }

    // Navigate to final test
    router.push("/final-test");
  };

  return (
    <ModuleGate module={8}>
      <div className={styles.container}>
        <Sidebar currentlyOn={8} />
        <ModuleSliderContainer moduleText="MODULE 8: Closing Video">
          <ModuleIntro
            moduleNumber={8}
            title="Closing Video"
            subtitle="You're Almost There!"
            description={
              <p>
                We hope you found this curriculum educational and empowering! We want to continue
                seeing you enjoy the roads of San Diego safely. Here is a closing video from the
                city of Encinitas that summarizes the key elements of these modules. Happy Riding!
              </p>
            }
            Mascot={
              <Image
                src="/module8/TimmyStudious.svg"
                alt="Timmy, the tire mascot smiling with a pencil and notebook"
                width={320}
                height={310.11}
                className={styles.mascot}
              />
            }
          />
          <ClosingVideo />
          <TitleScreen finalModule={true} handleStart={handleStart} />
        </ModuleSliderContainer>
      </div>
    </ModuleGate>
  );
}
