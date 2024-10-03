"use client";
import React, { useRef } from "react";
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
import emailjs from "@emailjs/browser";

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
    const data = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      template_params: {
        nom: values.nom,
        prenom: values.prenom,
        email: values.email,
        message: values.message,
      },
    };
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send email");
      } else {
        alert(
          `Thank you, we have received your message. ${values.nom} ${values.prenom}`
        );
      }

      const resData = await res.json();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section id="contact" className="w-full h-full my-10  gap-10 ">
      <div className="flex md:flex-row flex-col items-start justify-between gap-6 w-full">
        <div className="w-full p-8 border border-[#cccccc30] rounded-md flex flex-col gap-4">
          {/* contact header */}
          <div className="flex flex-col gap-2 w-full ">
            <h1 className="text-2xl font-semibold">Contact Us</h1>
            <p className="text-base text-hover">
              Need help or advice? Contact us by phone, e-mail, or visit us at
              the pharmacy.
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
                Send
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25598.02885737252!2d2.89541073476562!3d36.68042479999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fa5c069f0a37f%3A0xbb8fa3369e513d44!2sEl-Kendi%20Industrie%20du%20M%C3%A9dicament!5e0!3m2!1sfr!2sdz!4v1727953522847!5m2!1sfr!2sdz"
            className="w-full h-full border border-[#cccccc30] p-2 rounded-md"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
