export const createDownloadLink = (fileId: string) => {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

export const createViewLink = (fileId: string) => {
  return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
};
