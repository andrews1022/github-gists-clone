"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
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

/* form fields:
  - Id (auto generated)
  - UserId (tied to who created it)
  - Name (including file extension —> `useMyHook.ts`)
  - Description
  - Code
  - Created At
  - Updated At
*/

const fileNameAndExtensionRegex = /^[\w-]+\.[\w-]+$/;

const formSchema = z.object({
  fileName: z
    .string()
    .min(1, "Name must be at least 1 character")
    .max(100, "Name cannot be more than 100 characters")
    .regex(
      new RegExp(fileNameAndExtensionRegex),
      "Name must be a valid file name with extension, eg: myCustomHook.ts"
    ),
  description: z
    .string()
    .min(1, "Description must be at least 1 character")
    .max(1000, "Description cannot be more than 1000 characters")
});

const CreateGistForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fileName: "",
      description: ""
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
              <FormLabel>Name + Extension</FormLabel>
              <FormControl>
                <Input placeholder="myCustomHook.ts" type="text" {...field} />
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe your gist..." className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="block w-full" type="submit">
          Create Gist
        </Button>
      </form>
    </Form>
  );
};

export { CreateGistForm };
