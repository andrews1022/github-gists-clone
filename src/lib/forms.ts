import { z } from "zod";

const fileNameAndExtensionRegex = /^[\w-]+\.[\w-]+$/;

const formSchema = z.object({
  fileNameAndExtension: z
    .string()
    .min(1, "Name must be at least 1 character")
    .max(100, "Name cannot be more than 100 characters")
    .regex(
      new RegExp(fileNameAndExtensionRegex),
      "Name must be a valid file name with extension, eg: useMyCustomHook.ts"
    ),
  description: z
    .string()
    .min(1, "Description must be at least 1 character")
    .max(1000, "Description cannot be more than 1000 characters"),
  code: z.string().min(1, "Description must be at least 1 character"),
  gistId: z.string().optional()
});

type FormInputs = z.infer<typeof formSchema>;

export { fileNameAndExtensionRegex, formSchema };
export type { FormInputs };
