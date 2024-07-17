// contains all read operations on the drive
// IT MEANS ONLY getMetadataDrive SHOULD BE USED TO ACCESS THE DRIVE

import { getMetadataDrive } from "./auth";

export const getAllFiles = async () => {
  const drive = await getMetadataDrive();

  const files = (await drive.files.list()).data.files;

  return files ?? [];
};
