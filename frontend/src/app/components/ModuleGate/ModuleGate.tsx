"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { get } from "../../api/requests";
import { useAuth } from "../../contexts/AuthContext";

export default function ModuleGate({
  children,
  module,
}: {
  children: React.ReactNode;
  module: number;
}) {
  const { currentUser, firebaseUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    // If not logged in or verified, redirect
    if (!firebaseUser || !firebaseUser.emailVerified || !currentUser) {
      router.replace("/signin");
      return;
    }

    // Check if user has access to this module
    void (async () => {
      try {
        const res = await get(`/api/user/get/${encodeURIComponent(currentUser.email)}`);
        const user = (await res.json()) as { module?: number; firstLogin?: boolean };

        if (user.firstLogin) {
          router.replace("/intro-video");
          return;
        }

        if (user.module === undefined || user.module < module) {
          router.replace("/");
        }
      } catch (err) {
        if (process.env.NODE_ENV !== "production") {
          console.error("ModuleGate fetch error:", err);
        }
      }
    })();
  }, [currentUser, firebaseUser, loading, module, router]);

  return <>{children}</>;
}
