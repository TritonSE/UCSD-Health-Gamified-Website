import { readFileSync } from "fs";
import admin from "firebase-admin";

if (!admin.apps.length) {
  const raw = readFileSync("/etc/secrets/firebase-service-account.json", "utf8");
  const serviceAccount = JSON.parse(raw);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
