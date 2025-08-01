// frontend/src/app/contexts/AuthContext.tsx
"use client";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

import { getUser } from "../api/user";
import { auth } from "../firebase-config.js";

import type { User } from "../api/user";
import type { User as FirebaseUser } from "firebase/auth";

type AuthContextType = {
  currentUser: User | null; // from your backend
  firebaseUser: FirebaseUser | null; // raw Firebase user
  loading: boolean;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  firebaseUser: null,
  loading: true,
  refreshUser: () => Promise.resolve(),
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    if (auth.currentUser?.email) {
      try {
        const result = await getUser(auth.currentUser.email);
        if (result.success) {
          setCurrentUser({
            ...result.data,
            firstLogin: result.data.firstLogin,
          });
        }
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Failed to refresh user:", error);
        }
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user); // Save Firebase user separately

      if (user?.email) {
        getUser(user.email)
          .then((result) => {
            if (result.success) {
              setCurrentUser({
                ...result.data,
                firstLogin: result.data.firstLogin,
              });
            }
            setLoading(false);
          })
          .catch((error) => {
            if (process.env.NODE_ENV !== "production") {
              console.error("Failed to get user in onAuthStateChanged:", error);
            }
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, firebaseUser, loading, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
