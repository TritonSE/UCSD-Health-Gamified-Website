import { readFileSync } from "fs";
import { resolve } from "path";

import admin from "firebase-admin";

const serviceAccount = JSON.parse(
  readFileSync(resolve(process.cwd(), process.env.GOOGLE_APPLICATION_CREDENTIALS), "utf8"),
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
