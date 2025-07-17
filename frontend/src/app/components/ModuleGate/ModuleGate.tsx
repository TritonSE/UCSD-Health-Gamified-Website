"use client";

import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

import { get } from "../../api/requests";
import { useAuth } from "../../contexts/AuthContext";

type Progress = { module?: number; firstLogin?: boolean };

export default function ModuleGate({
  children,
  module: requiredModule,
}: {
  children: React.ReactNode;
  module: number;
}) {
  const { currentUser, firebaseUser, loading } = useAuth();
  const router = useRouter();

  const [cached, setCached] = useState<Progress | null>(null);

  useEffect(() => {
    try {
      const data = localStorage.getItem("__progress");
      if (data) setCached(JSON.parse(data) as Progress);
    } catch {
      /* ignore invalid JSON */
    }
  }, []);

  const [status, setStatus] = useState<"checking" | "allowed" | "denied">("checking");

  useLayoutEffect(() => {
    if (loading) return;
    if (!firebaseUser || !firebaseUser.emailVerified || !currentUser) {
      router.replace("/signin");
      setStatus("denied");
      return;
    }

    const guard = async () => {
      let progress: Progress | null = cached;
      if (!progress) {
        try {
          const res = await get(`/api/user/get/${encodeURIComponent(currentUser.email)}`);
          progress = (await res.json()) as Progress;
          localStorage.setItem("__progress", JSON.stringify(progress));
          setCached(progress);
        } catch (e) {
          // console.error("ModuleGate fetch error:", e);
          router.replace("/signin");
          setStatus("denied");
          return;
        }
      }

      if (progress?.firstLogin && window.location.pathname !== "/intro-video") {
        router.replace("/intro-video");
        setStatus("denied");
        return;
      }
      if (progress?.module === undefined || progress.module < requiredModule) {
        router.replace("/");
        setStatus("denied");
        return;
      }

      setStatus("allowed");
    };

    void guard();
  }, [loading, currentUser, firebaseUser, cached, requiredModule, router]);

  /* 5️⃣ What we render ------------------------------------------------- */
  if (status !== "allowed") return;
  return <>{children}</>;
}
