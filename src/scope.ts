const SCOPES = {
  // recommanded + non-sensitive
  EDIT_OR_MODIFY_FILES: "https://www.googleapis.com/auth/drive.file",

  // restricted
  FULL_PERMS: "https://www.googleapis.com/auth/drive",
  READ_ONLY: "https://www.googleapis.com/auth/drive.readonly",
  METADATA_ONLY: "https://www.googleapis.com/auth/drive.metadata.readonly",
};

export default SCOPES;
