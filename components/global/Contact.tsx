"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

import { contactInfo } from "@/constant";

type Props = {};

const formSchema = z.object({
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

const Contact = (props: Props) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section id="contact" className="w-full h-full my-10  gap-10 ">
      <div className="flex md:flex-row flex-col items-start justify-between gap-6 w-full">
        <div className="w-full p-8 border border-[#cccccc30] rounded-md flex flex-col gap-4">
          {/* contact header */}
          <div className="flex flex-col gap-2 w-full ">
            <h1 className="text-2xl font-semibold">Contactez-nous</h1>
            <p className="text-base text-hover">
              Besoin d'aide ou de conseils ? Contactez-nous par téléphone,
              e-mail, ou passez nous voir en pharmacie.
            </p>
          </div>
          {/* contact form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-row gap-4">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="nom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="prenom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pre Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        // className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                envoyez
              </Button>
            </form>
          </Form>
        </div>

        <div className="w-full flex flex-col h-full items-center  gap-6">
          {contactInfo.map((item) => (
            <div
              className="flex gap-4 w-full border border-[#cccccc30] rounded-md p-4"
              key={item.title}
            >
              <div className="mt-1">{item.icon}</div>
              <div className="flex flex-col gap-2">
                <h1 className="text-lg xl:text-2xl">{item.title}</h1>
                <p className="text-base text-hover">{item.content}</p>
              </div>
            </div>
          ))}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12790.899431410211!2d3.1679266999999998!3d36.729168699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sdz!4v1727694026461!5m2!1sfr!2sdz"
            className="w-full h-full border border-[#cccccc30] p-2 rounded-md"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
