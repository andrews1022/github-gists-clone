"use client";

import { useRouter } from "next/navigation";
import { PlusCircle } from "lucide-react";
import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoadingIcon } from "@/components/LoadingIcon";
import { Button } from "@/components/ui/button";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shadcn/ui/form";
import { Input } from "@/shadcn/ui/input";
import { Textarea } from "@/shadcn/ui/textarea";
import { useToast } from "@/shadcn/ui/use-toast";

import { apiRoutes, clientRoutes } from "@/constants/routes";

import { formSchema } from "@/lib/forms";
import type { FormInputs } from "@/lib/forms";

const CreateGistForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fileNameAndExtension: "",
      description: "",
      code: ""
    }
  });

  const handleCreateGist = async (values: FormInputs) => {
    setIsLoading(true);

    const res = await fetch(apiRoutes.gists, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fileNameAndExtension: values.fileNameAndExtension,
        description: values.description,
        code: values.code
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
      <form className="space-y-6" onSubmit={form.handleSubmit(handleCreateGist)}>
        <FormField
          control={form.control}
          name="fileNameAndExtension"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Name + Extension</FormLabel>
              <FormControl>
                <Input
                  className="text-base"
                  placeholder="useMyCustomHook.ts"
                  type="text"
                  {...field}
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
                  placeholder="Describe your gist..."
                  {...field}
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
          <Button bgColor="emerald" size="large" type="submit">
            {isLoading ? (
              <>
                <LoadingIcon fill="emerald" /> <span>Loading...</span>
              </>
            ) : (
              <>
                <PlusCircle /> <span>Create Gist</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { CreateGistForm };
