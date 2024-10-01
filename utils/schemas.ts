import { z } from "zod";

export const formSchema = z.object({
  nom: z.string().min(3, { message: "Nom must be at least 2 characters" }),
  prenom: z
    .string()
    .min(3, { message: "Prenom must be at least 2 characters" }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});
