"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { projectNeeds } from "@/data/profile";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    if (values.company) {
      setStatus("success");
      reset();
      return;
    }

    setStatus("idle");

    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.need,
          comment: values.message,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative flex min-w-0 flex-[1_1_380px] flex-col gap-[18px] bg-canvas p-[35px] shadow-lift"
    >
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-white">
        Name
        <input
          type="text"
          autoComplete="name"
          className="field"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name", {
            setValueAs: (value) => value.trim(),
            required: "Name is required.",
            maxLength: { value: 100, message: "Name must be 100 characters or fewer." },
          })}
        />
        {errors.name ? (
          <span id="name-error" className="font-normal text-rose-200">
            {errors.name.message}
          </span>
        ) : null}
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-semibold text-white">
        Email
        <input
          type="email"
          autoComplete="email"
          className="field"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email", {
            setValueAs: (value) => value.trim(),
            required: "Email is required.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address.",
            },
          })}
        />
        {errors.email ? (
          <span id="email-error" className="font-normal text-rose-200">
            {errors.email.message}
          </span>
        ) : null}
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-semibold text-white">
        What do you need?
        <select
          className="field"
          defaultValue=""
          aria-invalid={errors.need ? "true" : "false"}
          aria-describedby={errors.need ? "need-error" : undefined}
          {...register("need", { required: "Choose what you need." })}
        >
          <option value="" disabled>
            Select one
          </option>
          {projectNeeds.map((need) => (
            <option key={need} value={need}>
              {need}
            </option>
          ))}
        </select>
        {errors.need ? (
          <span id="need-error" className="font-normal text-rose-200">
            {errors.need.message}
          </span>
        ) : null}
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-semibold text-white">
        Tell me about your project
        <textarea
          rows={4}
          className="field h-auto resize-y py-3"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message", {
            setValueAs: (value) => value.trim(),
            required: "Message is required.",
            minLength: { value: 10, message: "Message must be at least 10 characters." },
            maxLength: { value: 5000, message: "Message must be 5000 characters or fewer." },
          })}
        />
        {errors.message ? (
          <span id="message-error" className="font-normal text-rose-200">
            {errors.message.message}
          </span>
        ) : null}
      </label>

      <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-[52px] bg-accent text-base font-extrabold text-canvas disabled:cursor-wait disabled:opacity-70"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>

      {status === "success" ? (
        <p role="status" className="text-sm font-semibold text-emerald-200">
          Message sent. I&apos;ll reply within one business day.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="text-sm font-semibold text-rose-200">
          Something went wrong. Email info@mysjit.com and I&apos;ll get back to you.
        </p>
      ) : null}
    </form>
  );
}
