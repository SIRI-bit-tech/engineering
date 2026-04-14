"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Loader2, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email({ error: "Invalid engineering email address" }),
  company: z.string().min(2, "Company name is required for consultation"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Rule 11 Success Message
        toast.success("Your engineering enquiry has been received. Our team will respond within 24 hours.");
        reset();
      } else {
        toast.error("Failed to send technical enquiry. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast.error("An unexpected error occurred. Please contact technical support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-accent font-bold uppercase tracking-widest text-primary">Full Name</label>
          <input
            id="name"
            {...register("name")}
            className={`w-full bg-white border ${errors.name ? "border-red-500" : "border-ocean/20"} py-3 px-4 font-body text-primary focus:outline-none focus:border-ocean transition-colors`}
            placeholder="John Engineer"
          />
          {errors.name && <p className="text-[10px] text-red-500 font-accent uppercase font-bold">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-accent font-bold uppercase tracking-widest text-primary">Work Email</label>
          <input
            id="email"
            {...register("email")}
            className={`w-full bg-white border ${errors.email ? "border-red-500" : "border-ocean/20"} py-3 px-4 font-body text-primary focus:outline-none focus:border-ocean transition-colors`}
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-[10px] text-red-500 font-accent uppercase font-bold">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Company */}
        <div className="space-y-2">
          <label htmlFor="company" className="text-xs font-accent font-bold uppercase tracking-widest text-primary">Company / Organization</label>
          <input
            id="company"
            {...register("company")}
            className={`w-full bg-white border ${errors.company ? "border-red-500" : "border-ocean/20"} py-3 px-4 font-body text-primary focus:outline-none focus:border-ocean transition-colors`}
            placeholder="Global Manufacturing Corp"
          />
          {errors.company && <p className="text-[10px] text-red-500 font-accent uppercase font-bold">{errors.company.message}</p>}
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label htmlFor="subject" className="text-xs font-accent font-bold uppercase tracking-widest text-primary">Inquiry Subject</label>
          <input
            id="subject"
            {...register("subject")}
            className={`w-full bg-white border ${errors.subject ? "border-red-500" : "border-ocean/20"} py-3 px-4 font-body text-primary focus:outline-none focus:border-ocean transition-colors`}
            placeholder="Renewable Energy Systems Design"
          />
          {errors.subject && <p className="text-[10px] text-red-500 font-accent uppercase font-bold">{errors.subject.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-accent font-bold uppercase tracking-widest text-primary">Technical Brief / Message</label>
        <textarea
          id="message"
          rows={6}
          {...register("message")}
          className={`w-full bg-white border ${errors.message ? "border-red-500" : "border-ocean/20"} py-3 px-4 font-body text-primary focus:outline-none focus:border-ocean transition-colors resize-none`}
          placeholder="Please describe your engineering needs..."
        />
        {errors.message && <p className="text-[10px] text-red-500 font-accent uppercase font-bold">{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-between px-10 py-5 bg-primary text-white rounded-none font-bold uppercase tracking-widest hover:bg-ocean transition-all duration-300 group"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center w-full">
            <Loader2 size={18} className="animate-spin mr-2" />
            <span>Processing...</span>
          </div>
        ) : (
          <>
            <span>Submit Engineering Inquiry</span>
            <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  );
};
