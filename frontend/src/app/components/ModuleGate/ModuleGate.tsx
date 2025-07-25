"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!firebaseUser) {
      router.push("/signin");
      return;
    }

    if (!firebaseUser.emailVerified) {
      router.push("/signin");
      return;
    }

    if (!currentUser) {
      router.push("/signin"); // not logged in, redirect to signin
      return;
    }

    void (async () => {
      try {
        const res = await get(`/api/user/get/${encodeURIComponent(currentUser.email)}`);

        const user = (await res.json()) as { module?: number; firstLogin?: boolean };

        if (user.firstLogin) {
          router.push("/intro-video");
        }

        if ((user.module === undefined || user.module < module) && !user.firstLogin) {
          router.push("/"); // unauthorized access, redirect to home
          return;
        }

        setAuthenticated(true);
      } catch (err) {
        console.error("ModuleGate fetch error:", err);
      }
    })();
  }, [currentUser, loading, module, router]);
  if (!authenticated) return;
  return <>{children}</>;
}
