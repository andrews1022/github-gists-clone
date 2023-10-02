"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { RefreshCcw } from "lucide-react";
import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { z } from "zod";

import { LoadingIcon } from "@/components/LoadingIcon";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shadcn/ui/form";
import { Input } from "@/shadcn/ui/input";
import { Textarea } from "@/shadcn/ui/textarea";
import { useToast } from "@/shadcn/ui/use-toast";
import { apiRoutes, clientRoutes } from "@/constants/routes";
import { Gist } from "@/types";

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
  code: z.string().min(1, "Description must be at least 1 character")
});

type FormInputs = z.infer<typeof formSchema>;

type EditGistFormProps = {
  gist: Gist | undefined | null;
};

const EditGistForm = ({ gist }: EditGistFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fileNameAndExtension: gist?.fileNameAndExtension || "",
      description: gist?.description || "",
      code: gist?.code || ""
    }
  });

  const handleUpdateGist = async (values: FormInputs) => {
    setIsLoading(true);

    const res = await fetch(apiRoutes.gists, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fileNameAndExtension: values.fileNameAndExtension,
        description: values.description,
        code: values.code,
        gistId: gist?.gistId
      })
    });

    if (res.ok) {
      setIsLoading(false);
      router.push(clientRoutes.gists);
    } else {
      setIsLoading(false);
      const { message } = await res.json();

      toast({
        description: message,
        title: "Uh oh! Something went wrong.",
        variant: "destructive"
      });
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(handleUpdateGist)}>
        <FormField
          control={form.control}
          name="fileNameAndExtension"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Name + Extension</FormLabel>
              <FormControl>
                <Input
                  className="text-base"
                  onChange={field.onChange}
                  placeholder="useMyCustomHook.ts"
                  type="text"
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Description</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none text-base"
                  onChange={field.onChange}
                  placeholder="Describe your gist..."
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Suspense fallback={<p>Loading code editor...</p>}>
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Code</FormLabel>
                <FormControl>
                  <CodeMirror
                    className="rounded-md text-base border border-input"
                    height="25vw"
                    onChange={field.onChange}
                    theme={githubLight}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Suspense>

        <div className="flex justify-center">
          <button
            className="border-2 border-sky-600 text-sky-600 text-2xl py-2 rounded-lg hover:bg-sky-600 hover:text-white transition-colors w-1/2 flex items-center justify-center gap-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <>
                <LoadingIcon fill="emerald" /> <span>Loading...</span>
              </>
            ) : (
              <>
                <RefreshCcw /> <span>Update Gist</span>
              </>
            )}
          </button>
        </div>
      </form>
    </Form>
  );
};

export { EditGistForm };
