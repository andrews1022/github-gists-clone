"use client";

import { XCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/shadcn/ui/alert-dialog";
import { useToast } from "@/shadcn/ui/use-toast";

import { Button } from "@/components/ui/button";
import { apiRoutes, clientRoutes } from "@/constants/routes";

const DeleteGistButton = () => {
  const router = useRouter();
  const { toast } = useToast();

  const pathname = usePathname(); // /gists/...

  // split the pathname into an array of parts using the / as the separator
  // and remove the empty string at the beginning of the array
  const parts = pathname.split("/").filter(Boolean);

  // get the last item out of the parts array using array destructuring
  const gistId = parts[parts.length - 1];

  const deleteGist = async () => {
    const res = await fetch(apiRoutes.gists, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ gistId })
    });

    if (res.ok) {
      router.push(clientRoutes.gists);
    } else {
      const { message } = await res.json();

      toast({
        description: message,
        title: "Uh oh! Something went wrong.",
        variant: "destructive"
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button bgColor="red" size="small" type="button">
          <XCircle /> Delete this gist
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete this gist?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your gist and remove it from
            our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteGist}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { DeleteGistButton };
