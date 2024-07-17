require("dotenv").config();
import { createViewLink } from "./link";
import { getAllFiles } from "./read";
import { deleteFile, setDownloadPermissionsAnyone, uploadFile } from "./write";

(async () => {
  const files = await getAllFiles();
  console.log(files);
})();
