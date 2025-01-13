"use server";

import { database } from "@/lib/prisma";
import z from "zod";

const emailSchema = z.string().email();

export async function subscribeToNewsletter(email: string) {
    try {
        const { success } = emailSchema.safeParse(email);
  if (!success) {
    return { success: false, error: "Invalid email" };
  }

  const response = await database.newsletter.create({
    data: {
      email,
    },
  });
  if (!response) {
    return { success: false, error: "Something went wrong" };
  }

  return { success: true };  
    } catch (error) {
        console.error(error);
        return { success: false, error: "Something went wrong" };
    }

}
