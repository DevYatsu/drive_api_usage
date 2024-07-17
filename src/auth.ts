import { Auth, google } from "googleapis";
import SCOPES from "./scope";

const keyFile = process.env.SERVICE_ACCOUNT_KEY_FILE;

export async function getAuthClient(scopes: string[]) {
  if (!keyFile) {
    throw new Error("Service account key file path is not defined.");
  }

  const auth = new google.auth.GoogleAuth({
    ...{ keyFile },
    scopes,
  });

  const authClient = (await auth.getClient()) as Auth.OAuth2Client;

  return authClient;
}

export async function getMetadataDrive() {
  const client = await getAuthClient([SCOPES.METADATA_ONLY]);

  return google.drive({ auth: client, version: "v3" });
}

export async function getReadOnlyDrive() {
  const client = await getAuthClient([SCOPES.READ_ONLY]);

  return google.drive({ auth: client, version: "v3" });
}

export async function getFullAccessDrive() {
  const client = await getAuthClient([SCOPES.FULL_PERMS]);

  return google.drive({ auth: client, version: "v3" });
}

export async function getReadAndWriteDrive() {
  const client = await getAuthClient([SCOPES.EDIT_OR_MODIFY_FILES]);

  return google.drive({ auth: client, version: "v3" });
}
