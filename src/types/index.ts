export type Gist = {
  fileNameAndExtension: string | undefined | null;
  description: string | undefined | null;
  code: string | undefined | null;
  userId: string | undefined | null;
  gistId: string | undefined | null;
  createdAt: Date | undefined | null;
  updatedAt: Date | undefined | null;
};
