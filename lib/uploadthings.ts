import { generateReactHelpers } from "@uploadthing/react/hooks";
 
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadThingError } from "uploadthing/server";
 
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();