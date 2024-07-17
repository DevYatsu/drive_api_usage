// contains all write operations on the drive
// IT MEANS getReadAndWriteDrive (preferrably) or getFullAccessDrive SHOULD BE USED TO ACCESS THE DRIVE

import { getReadAndWriteDrive } from "./auth";
import path from "path";
import fs from "fs";
import { getAllFiles } from "./read";

// Returns the file id if upload is successfull
export const uploadFile = async (filePath: string) => {
  const drive = await getReadAndWriteDrive();

  const fileName = path.basename(filePath);
  const mimeType = "application/octet-stream"; // Set the correct MIME type if known

  const requestBody = {
    name: fileName,
    fields: "id",
  };
  const media = {
    mimeType: mimeType,
    body: fs.createReadStream(filePath),
  };

  const responseFile = await drive.files.create({
    requestBody,
    media: media,
    fields: "id",
  });

  const fileId = responseFile.data.id;

  return fileId;
};

export const setDownloadPermissionsAnyone = async (fileId: string) => {
  const drive = await getReadAndWriteDrive();

  // Make the file public
  await drive.permissions.create({
    fileId: fileId,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  });
};

export const deleteFile = async (fileId: string) => {
  const drive = await getReadAndWriteDrive();

  await drive.files.delete({ fileId });
};
