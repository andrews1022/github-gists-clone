"use client";

import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fileNameAndExtensionRegex = /^[\w-]+\.[\w-]+$/;

const formSchema = z.object({
  fileName: z
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
  code: z.string()
});

const CreateGistForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fileName: "",
      description: "",
      code: ""
    }
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="fileName"
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

        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Code</FormLabel>
              <FormControl>
                <CodeMirror
                  value={field.value}
                  onChange={field.onChange}
                  height="25vw"
                  theme={githubLight}
                  className="rounded-md text-base border border-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <button
            className="border-2 border-emerald-600 text-emerald-600 text-2xl py-2 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors w-1/2 flex items-center justify-center gap-x-2"
            type="submit"
          >
            <PlusCircle /> <span>Create Gist</span>
          </button>
        </div>
      </form>
    </Form>
  );
};

export { CreateGistForm };
