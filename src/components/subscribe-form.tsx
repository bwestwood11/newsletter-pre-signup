"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeToNewsletter } from "@/actions/newsletter";

export function SubscribeForm() {
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      if (!email) return;
      startTransition(async () => {
        // Handle form submission here
        const response = await subscribeToNewsletter(email);
        if (!response.success) {
          toast.error(response.error);
          return;
        }
        toast.success("You have successfully subscribed to our newsletter!");
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex space-x-2"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileTap={{ scale: 1.01 }}
    >
      <Input
        className="w-full flex-1 bg-white text-black"
        placeholder="Enter your email"
        autoFocus
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        name="email"
        required
      />
      <Button
        className="bg-emerald-500 hover:bg-emerald-500/70"
        type="submit"
        disabled={isPending || !email}
      >
        {isPending ? "Joining..." : "Join Now"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.form>
  );
}
