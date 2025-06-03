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
  const { currentUser, loading } = useAuth();
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!currentUser) {
      router.push("/signin"); // not logged in, redirect to signin
      return;
    }

    if (currentUser.firstLogin){
      router.push("/intro-video")
      return;
    }

    void (async () => {
      try {
        const res = await get(`/api/user/get/${encodeURIComponent(currentUser.email)}`);
        // if (!res.ok) console.log(res);

        const user = (await res.json()) as { module?: number };

        if (user.module === undefined || user.module < module) {
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
