"use client";

import { useState, type ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Loader2, Send, Upload, FileCheck, X } from "lucide-react";
import { SERVICES } from "@/constants/constants";
import { useUploadThing } from "@/lib/uploadthing";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid engineering email address"),
  company: z.string().min(2, "Company name is required"),
  serviceType: z.string().min(1, "Please select a service type"),
  projectLocation: z.string().min(5, "Project location is required"),
  estimatedBudget: z.string().optional(),
  message: z.string().min(10, { message: "Project description must be at least 10 characters" }),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { startUpload } = useUploadThing("projectImage");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast.error("File size must be less than 5MB");
      return;
    }

    // Since .dwg might have inconsistent mime types across browsers,
    // we'll check the extension as a fallback.
    const ext = file.name.split(".").pop()?.toLowerCase();
    const validExtensions = ["pdf", "xlsx", "dwg"];

    if (!validExtensions.includes(ext || "")) {
      toast.error("Invalid file type. Please upload .pdf, .dwg, or .xlsx only.");
      return;
    }

    setSelectedFile(file);
    toast.success(`File "${file.name}" attached successfully.`);
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    try {
      let attachmentUrl = "";
      
      // Upload file using UploadThing if selected
      if (selectedFile) {
        try {
          const uploadResult = await startUpload([selectedFile]);
          if (uploadResult && uploadResult.length > 0) {
            attachmentUrl = uploadResult[0].url;
          }
        } catch (uploadError) {
          console.error("File upload error:", uploadError);
          toast.error("Failed to upload file. Please try again.");
          setIsSubmitting(false);
          return;
        }
      }

      // Send data as JSON with file URL
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          attachment: attachmentUrl
        }),
      });

      if (response.ok) {
        toast.success("Your engineering quote request has been received. Our team will respond within 24 hours.");
        reset();
        setSelectedFile(null);
      } else {
        toast.error("Failed to send technical quote request. Please try again.");
      }
    } catch (error) {
      console.error("Quote form submission error:", error);
      toast.error("An unexpected engineering system error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-accent font-bold uppercase tracking-widest text-primary">Full Name</label>
          <input
            id="name"
            {...register("name")}
            className={`w-full bg-white border ${errors.name ? "border-red-500" : "border-ocean/20"} py-4 px-6 font-body text-primary focus:outline-none focus:border-ocean transition-colors`}
          />
          {errors.name && <p className="text-[10px] text-red-500 font-accent uppercase font-bold">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-accent font-bold uppercase tracking-widest text-primary">Work Email</label>
          <input
            id="email"
            {...register("email")}
            className={`w-full bg-white border ${errors.email ? "border-red-500" : "border-ocean/20"} py-4 px-6 font-body text-primary focus:outline-none focus:border-ocean transition-colors`}
          />
          {errors.email && <p className="text-[10px] text-red-500 font-accent uppercase font-bold">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="company" className="text-xs font-accent font-bold uppercase tracking-widest text-primary">Company / Organization</label>
          <input
            id="company"
            {...register("company")}
            className={`w-full bg-white border ${errors.company ? "border-red-500" : "border-ocean/20"} py-4 px-6 font-body text-primary focus:outline-none focus:border-ocean transition-colors`}
          />
          {errors.company && <p className="text-[10px] text-red-500 font-accent uppercase font-bold">{errors.company.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="serviceType" className="text-xs font-accent font-bold uppercase tracking-widest text-primary">Service Type</label>
          <select
            id="serviceType"
            {...register("serviceType")}
            className={`w-full bg-white border ${errors.serviceType ? "border-red-500" : "border-ocean/20"} py-4 px-6 font-body text-primary focus:outline-none focus:border-ocean transition-colors appearance-none`}
          >
            <option value="">Select Engineering Solution</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>
          {errors.serviceType && <p className="text-[10px] text-red-500 font-accent uppercase font-bold">{errors.serviceType.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="projectLocation" className="text-xs font-accent font-bold uppercase tracking-widest text-primary">Project Location</label>
          <input
            id="projectLocation"
            {...register("projectLocation")}
            className={`w-full bg-white border ${errors.projectLocation ? "border-red-500" : "border-ocean/20"} py-4 px-6 font-body text-primary focus:outline-none focus:border-ocean transition-colors`}
          />
          {errors.projectLocation && <p className="text-[10px] text-red-500 font-accent uppercase font-bold">{errors.projectLocation.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="estimatedBudget" className="text-xs font-accent font-bold uppercase tracking-widest text-primary">Estimated Budget (Optional)</label>
          <input
            id="estimatedBudget"
            {...register("estimatedBudget")}
            className="w-full bg-white border border-ocean/20 py-4 px-6 font-body text-primary focus:outline-none focus:border-ocean transition-colors"
            placeholder="$"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-accent font-bold uppercase tracking-widest text-primary">Project Brief / Specifications</label>
        <textarea
          id="message"
          rows={6}
          {...register("message")}
          className={`w-full bg-white border ${errors.message ? "border-red-500" : "border-ocean/20"} py-4 px-6 font-body text-primary focus:outline-none focus:border-ocean transition-colors resize-none`}
          placeholder="Please describe your project goals, equipment needs, and technical requirements..."
        />
        {errors.message && <p className="text-[10px] text-red-500 font-accent uppercase font-bold">{errors.message.message}</p>}
      </div>

      {/* File Upload - Rule 11 */}
      <div className="space-y-4">
        <label htmlFor="attachment" className="text-xs font-accent font-bold uppercase tracking-widest text-primary">Technical Documentation (.pdf, .dwg, .xlsx)</label>

        {selectedFile ? (
          <div className="flex items-center justify-between p-6 bg-ocean/5 border border-ocean/20">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-ocean/10 flex items-center justify-center mr-4">
                <FileCheck size={20} className="text-ocean" />
              </div>
              <div>
                <p className="text-sm font-body font-bold text-primary">{selectedFile.name}</p>
                <p className="text-[10px] font-mono text-charcoal/40">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="p-2 hover:bg-ocean/10 text-ocean/40 hover:text-ocean transition-colors duration-300"
            >
              <X size={18} />
            </button>
          </div>
        ) : (
          <div className="relative border-2 border-dashed border-ocean/20 p-12 text-center group hover:border-ocean transition-colors duration-300">
            <input
              id="attachment"
              type="file"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer z-10"
              accept=".pdf,.dwg,.xlsx"
            />
            <div className="flex flex-col items-center">
              <Upload size={32} className="text-ocean/40 group-hover:text-ocean transition-colors duration-300 mb-4" />
              <p className="text-sm font-body text-charcoal/60">
                Click or drag to upload technical drawings or project equipement lists.
              </p>
              <p className="text-[10px] font-accent font-bold uppercase text-ocean/40 mt-2 tracking-widest">Max file size: 5MB</p>
            </div>
          </div>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center space-x-3 py-5"
      >
        {isSubmitting ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <>
            <span>Submit Engineering Quotation Request</span>
            <Send size={20} className="ml-3" />
          </>
        )}
      </Button>
    </form>
  );
};
