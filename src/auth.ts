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

// if needed directly get the CLient without a keyFile but with a
export async function getOAuth2Client(scopes: string[]) {
  if (
    !process.env.CLIENT_ID ||
    !process.env.CLIENT_SECRET ||
    !process.env.REDIRECT_URL
  ) {
    throw new Error(
      "CLIENT_ID, CLIENT_SECRET or/and REDIRECT_URL env variables are not defined."
    );
  }
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
  );

  google.options({
    auth: oauth2Client,
  });

  return oauth2Client;
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
