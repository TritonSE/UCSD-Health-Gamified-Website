import { StaticImageData } from "next/image";

// declarations.d.ts
declare module "*.webp" {
  const content: StaticImageData;
  export default content;
}
